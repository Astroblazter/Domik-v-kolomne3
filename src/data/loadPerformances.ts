export type Performance = {
  id: string;
  title: string;
  author: string;
  duration: string;
  age: string;
  image: string;
  description: string;
  status: string;
};

// Vite 6: подхватываем все JSON-файлы спектаклей, которые сохраняет CMS
const files = import.meta.glob('/src/content/performances/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<Performance, 'id'>>;

export const PERFORMANCES: Performance[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  });
