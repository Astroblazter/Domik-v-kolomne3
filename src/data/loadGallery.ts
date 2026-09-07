import galleryData from '@/content/gallery.json';

export const GALLERY: string[] = (galleryData as { images: string[] }).images;
