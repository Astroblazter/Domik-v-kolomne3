export type TeamMember = {
  name: string;
  photo: string;
  role: string;
  shortBio: string;
  theatreRoles: string;
};

// Vite 6: подхватываем все JSON-файлы актёров, которые сохраняет CMS
const files = import.meta.glob('/src/content/team/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, TeamMember>;

export const TEAM: TeamMember[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, data]) => data);
