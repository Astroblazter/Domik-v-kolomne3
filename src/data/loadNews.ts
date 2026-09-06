import { parseFrontmatter } from './frontmatter';

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  preview: string;
  image: string;
};

// Vite 6: подхватываем все markdown-файлы, которые CMS сохраняет в src/content/news
const files = import.meta.glob('/src/content/news/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const NEWS: NewsItem[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    const id = path.split('/').pop()!.replace(/\.md$/, '');
    return {
      id,
      date: data.date ?? '',
      title: data.title ?? '',
      preview: data.preview ?? '',
      image: data.image ?? '',
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));
