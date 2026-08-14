import { CONTACTS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export function Contacts() {
  return (
    <section id="contacts" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Контакты"
          title="Где нас найти"
          intro="Демонстрационная контактная информация. Когда сайт будет наполнен реальными данными, здесь появятся адрес, телефон и почта театра."
        />

        <Reveal className="mt-12 max-w-2xl">
          <div className="rounded-2xl border border-hairline bg-surface p-6">
            <div className="text-base font-medium text-ink">{CONTACTS.name}</div>
            <div className="mt-1 text-sm uppercase tracking-[0.18em] text-muted">
              {CONTACTS.city}
            </div>
          </div>

          <div className="mt-px grid gap-px overflow-hidden rounded-2xl border border-t-0 border-hairline bg-hairline sm:grid-cols-2">
            <ContactRow icon={<MapPin size={20} />} label="Адрес">
              {CONTACTS.address}
            </ContactRow>
            <ContactRow icon={<Phone size={20} />} label="Телефон">
              {CONTACTS.phone}
            </ContactRow>
            <ContactRow icon={<Mail size={20} />} label="Электронная почта">
              {CONTACTS.email}
            </ContactRow>
            <ContactRow icon={<ExternalLink size={20} />} label="Мы в сетях">
              <div className="flex flex-wrap gap-2">
                {CONTACTS.socials.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center rounded-full border border-hairline bg-canvas px-3 py-1 text-sm font-medium text-ink"
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </ContactRow>
          </div>

          <p className="mt-5 text-xs text-muted">
            Контактные данные — демонстрационные. Реальные адрес, телефон и ссылки будут добавлены позже.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 bg-surface p-6">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="flex flex-col text-sm leading-relaxed text-muted">
        <span className="mb-1 text-xs uppercase tracking-[0.18em] text-muted">{label}</span>
        {children}
      </div>
    </div>
  );
}
