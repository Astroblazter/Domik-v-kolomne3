import heroData from '@/content/hero.json';

type HeroData = {
  image: string;
  eyebrow: string;
  titleLine1: string;
  titleItalic: string;
  subtitle: string;
  description: string;
};

const data = heroData as HeroData;

export const HERO_IMAGE: string = data.image;
export const HERO_EYEBROW: string = data.eyebrow;
export const HERO_TITLE_LINE1: string = data.titleLine1;
export const HERO_TITLE_ITALIC: string = data.titleItalic;
export const HERO_SUBTITLE: string = data.subtitle;
export const HERO_DESCRIPTION: string = data.description;
