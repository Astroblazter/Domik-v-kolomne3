export type ScheduleEvent = {
  id: string;
  /** ISO datetime string, as saved by the CMS "Дата и время" field */
  date: string;
  venue: string;
  performance: string;
};

const files = import.meta.glob('/src/content/schedule/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<ScheduleEvent, 'id'>>;

// Sorted from the furthest-future date down to the oldest past date:
// upcoming shows at the top (furthest first), history at the bottom.
export const SCHEDULE: ScheduleEvent[] = Object.entries(files)
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const MONTHS_GENITIVE = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

export function formatEventDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS_GENITIVE[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatEventTime(iso: string): string {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** True once the event's date+time is in the past relative to now. */
export function isPastEvent(iso: string): boolean {
  return new Date(iso).getTime() < Date.now();
}
