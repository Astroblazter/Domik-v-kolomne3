export type Partner = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

const files = import.meta.glob('/src/content/partners/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<Partner, 'id'>>;

export const PARTNERS: Partner[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  });
