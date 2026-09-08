import supportData from '@/content/support.json';

export type SupportOption = {
  id: string;
  label: string;
  description: string;
  href: string;
};

type SupportData = {
  image: string;
  lead: string;
  uses: string[];
  options: { label: string; description: string; href: string }[];
  buttonNote: string;
};

const data = supportData as SupportData;

export const SUPPORT_IMAGE: string = data.image;
export const SUPPORT_LEAD: string = data.lead;
export const SUPPORT_USES: string[] = data.uses;
export const SUPPORT_OPTIONS: SupportOption[] = data.options.map((o, i) => ({
  id: `option-${i}`,
  ...o,
}));
export const SUPPORT_BUTTON_NOTE: string = data.buttonNote;
