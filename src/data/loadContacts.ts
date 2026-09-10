import contactsData from '@/content/contacts.json';

export type Contacts = {
  name: string;
  intro?: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  socials: { label: string; href: string }[];
};

const DEFAULT_INTRO =
  'Наша основная площадка, где мы собираемся, проводим репетиции и выступаем, находится в историческом центре Санкт-Петербурга. Но мы с радостью приедем к Вам! Пожалуйста, пишите и звоните ))';

const data = contactsData as Contacts;

export const CONTACTS: Contacts = {
  ...data,
  intro: data.intro && data.intro.trim() ? data.intro : DEFAULT_INTRO,
};
