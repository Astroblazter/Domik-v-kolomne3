import brandingData from '@/content/branding.json';

type BrandingData = {
  logo?: string;
  siteName: string;
  tagline: string;
  footerDescription: string;
};

const data = brandingData as BrandingData;

export const BRANDING_LOGO: string | undefined = data.logo || undefined;
export const BRANDING_SITE_NAME: string = data.siteName;
export const BRANDING_TAGLINE: string = data.tagline;
export const BRANDING_FOOTER_DESCRIPTION: string = data.footerDescription;
