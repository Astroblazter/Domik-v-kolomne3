import aboutData from '@/content/about.json';

export type AboutFact = { value: string; label: string };

type AboutData = {
  image: string;
  imageWide: string;
  badge: string;
  paragraphs: string[];
  quote: string;
  facts: AboutFact[];
};

const data = aboutData as AboutData;

export const ABOUT_IMAGE: string = data.image;
export const ABOUT_IMAGE_WIDE: string = data.imageWide;
export const ABOUT_BADGE: string = data.badge;
export const ABOUT_PARAGRAPHS: string[] = data.paragraphs;
export const ABOUT_QUOTE: string = data.quote;
export const ABOUT_FACTS: AboutFact[] = data.facts;
