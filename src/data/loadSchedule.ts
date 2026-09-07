export type ScheduleEvent = {
  id: string;
  date: string;
  time: string;
  venue: string;
  performance: string;
};

const files = import.meta.glob('/src/content/schedule/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<ScheduleEvent, 'id'>>;

export const SCHEDULE: ScheduleEvent[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  });
