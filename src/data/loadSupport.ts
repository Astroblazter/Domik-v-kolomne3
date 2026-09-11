import supportData from '@/content/support.json';

export type SupportOption = {
  id: string;
  label: string;
  description: string;
  href: string;
  showDonateInfo: boolean;
  showPartnerInfo: boolean;
  showInviteInfo: boolean;
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
    showPartnerInfo?: boolean;
    showInviteInfo?: boolean;
  }[];
  buttonNote: string;
  donateInfoText?: string;
  partnerInfoText?: string;
  inviteInfoText?: string;
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

const DEFAULT_PARTNER_INFO = `Наш театр — независимый некоммерческий проект, и мы во многом держимся благодаря людям и организациям, которые готовы стать частью нашей истории не разово, а на постоянной основе.

Партнёрство может быть разным:
• регулярная финансовая поддержка — помогает планировать репетиции и постановки заранее, а не от случая к случаю
• предоставление площадки для репетиций, спектаклей или творческих встреч
• помощь материалами, оборудованием, транспортом
• информационная поддержка — рассказать о нас своей аудитории
• совместные проекты, фестивали и образовательные программы

Мы открыты к разным формам сотрудничества и всегда рады обсудить, что было бы полезно и интересно именно вам.

Это временная страница. Скоро здесь появится отдельная страница с подробным описанием форм партнёрства и формой для связи — чтобы предложить сотрудничество можно было в пару кликов. Спасибо, что рассматриваете возможность стать частью нашего театра!`;

const DEFAULT_INVITE_INFO = `Мы — некоммерческий инклюзивный театр, и каждый показ вне дома становится для нас особенным событием: возможностью встретить новых зрителей и рассказать о том, что мы делаем.

Именно поэтому мы очень ждём приглашений — они помогают нам:
• показывать спектакли на новых площадках и знакомиться с новой аудиторией
• участвовать в фестивалях и культурных программах
• пробовать себя в разных пространствах — от камерных залов до открытых площадок
• находить единомышленников среди театров, фондов и культурных центров

Мы открыты к разным форматам участия в ваших мероприятиях: отдельный показ, творческая встреча, мастер-класс или совместная программа — обсудим то, что подойдёт именно вам.

Это временная страница. Скоро здесь появится отдельная страница для связи с подробным объяснением вариантов участия в ваших мероприятиях и на ваших площадках. Спасибо, что думаете о нас!`;

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
  showPartnerInfo:
    typeof o.showPartnerInfo === 'boolean' ? o.showPartnerInfo : /партн[её]р/i.test(o.label),
  showInviteInfo:
    typeof o.showInviteInfo === 'boolean' ? o.showInviteInfo : /пригласи/i.test(o.label),
}));

export const SUPPORT_BUTTON_NOTE: string = data.buttonNote;
export const SUPPORT_DONATE_INFO_TEXT: string =
  data.donateInfoText && data.donateInfoText.trim() ? data.donateInfoText : DEFAULT_DONATE_INFO;
export const SUPPORT_PARTNER_INFO_TEXT: string =
  data.partnerInfoText && data.partnerInfoText.trim() ? data.partnerInfoText : DEFAULT_PARTNER_INFO;
export const SUPPORT_INVITE_INFO_TEXT: string =
  data.inviteInfoText && data.inviteInfoText.trim() ? data.inviteInfoText : DEFAULT_INVITE_INFO;
