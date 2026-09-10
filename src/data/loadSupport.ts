import supportData from '@/content/support.json';

export type SupportOption = {
  id: string;
  label: string;
  description: string;
  href: string;
  showDonateInfo: boolean;
};

type SupportData = {
  image: string;
  lead: string;
  uses: string[];
  options: {
    label: string;
    description: string;
    href: string;
    showDonateInfo?: boolean;
  }[];
  buttonNote: string;
  donateInfoText?: string;
};

const DEFAULT_DONATE_INFO = `Наш театр — некоммерческий проект. Мы не продаём билеты и не берём плату с участников: играть, репетировать и выходить на сцену может каждый, кому это важно.

Ваша поддержка помогает нам:
• арендовать помещение для репетиций и хранения декораций
• шить и обновлять костюмы, покупать реквизит
• оплачивать поездки на гастроли и фестивали
• приобретать звуковое и световое оборудование
• снимать и монтировать видео о наших спектаклях
• готовить новые постановки

Даже небольшое пожертвование напрямую помогает нашим спектаклям выходить, а новым участникам — находить свой путь на сцену.

Это временная страница. Совсем скоро здесь появится QR-код и ссылка для быстрого перевода — чтобы поддержать театр можно было в пару кликов. Спасибо, что вы с нами!`;

const data = supportData as SupportData;

export const SUPPORT_IMAGE: string = data.image;
export const SUPPORT_LEAD: string = data.lead;
export const SUPPORT_USES: string[] = data.uses;

export const SUPPORT_OPTIONS: SupportOption[] = data.options.map((o, i) => ({
  id: `option-${i}`,
  label: o.label,
  description: o.description,
  href: o.href,
  // If the CMS field isn't set yet, guess from the label so it works immediately.
  showDonateInfo:
    typeof o.showDonateInfo === 'boolean' ? o.showDonateInfo : /пожертвован/i.test(o.label),
}));

export const SUPPORT_BUTTON_NOTE: string = data.buttonNote;
export const SUPPORT_DONATE_INFO_TEXT: string =
  data.donateInfoText && data.donateInfoText.trim() ? data.donateInfoText : DEFAULT_DONATE_INFO;
