export type VideoItem = {
  id: string;
  poster: string;
  title: string;
  url?: string;
};

const files = import.meta.glob('/src/content/video/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, Omit<VideoItem, 'id'>>;

export const VIDEOS: VideoItem[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, data]) => {
    const id = path.split('/').pop()!.replace(/\.json$/, '');
    return { id, ...data };
  });
