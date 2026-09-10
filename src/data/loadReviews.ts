export type Review = {
  id: string;
  keyPhrase: string;
  fullText: string;
  author: string;
  source: string;
};

const files = import.meta.glob('/src/content/reviews/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<Review, 'id'>>;

export const REVIEWS: Review[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  });
