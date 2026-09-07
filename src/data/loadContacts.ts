import contactsData from '@/content/contacts.json';

export type Contacts = {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  socials: { label: string; href: string }[];
};

export const CONTACTS: Contacts = contactsData as Contacts;
