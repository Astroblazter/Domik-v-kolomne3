import { useEffect, useState } from 'react';
import {
  SUPPORT_IMAGE,
  SUPPORT_OPTIONS,
  SUPPORT_LEAD,
  SUPPORT_USES,
  SUPPORT_BUTTON_NOTE,
  SUPPORT_DONATE_INFO_TEXT,
  SUPPORT_PARTNER_INFO_TEXT,
} from '@/data/loadSupport';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ArrowRight, X } from 'lucide-react';

type InfoModal = 'donate' | 'partner' | null;

const MODAL_CONTENT: Record<Exclude<InfoModal, null>, { title: string; text: string }> = {
  donate: { title: 'Поддержать театр', text: SUPPORT_DONATE_INFO_TEXT },
  partner: { title: 'Стать партнёром', text: SUPPORT_PARTNER_INFO_TEXT },
};

export function Support() {
  const [infoModal, setInfoModal] = useState<InfoModal>(null);

  useEffect(() => {
    if (!infoModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInfoModal(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [infoModal]);

  return (
    <section id="support" className="relative section-y overflow-hidden">
      {/* Atmospheric photo background */}
      <img
        src={SUPPORT_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
      <div className="relative container-x">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Поддержать театр"
            title="Поддержать театр"
            light
            intro={SUPPORT_LEAD}
          />
        </div>
        {/* What donations support */}
        <Reveal className="mt-8 max-w-2xl" delay={80}>
          <p className="text-sm uppercase tracking-[0.18em] text-white/70">
            На что идут пожертвования
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {SUPPORT_USES.map((use) => (
              <li key={use} className="text-sm text-white/85 leading-relaxed">
                • {use}
              </li>
            ))}
          </ul>
        </Reveal>
        {/* Donate button */}
        <Reveal className="mt-10" delay={140}>
          <Button
            variant="primary"
            size="lg"
            className="!bg-accent !text-white"
            onClick={() => setInfoModal('donate')}
          >
            Поддержать театр
            <ArrowRight size={18} />
          </Button>
          <p className="mt-3 text-xs text-white/60">
            {SUPPORT_BUTTON_NOTE}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {SUPPORT_OPTIONS.map((opt, i) => {
            const modalKey: InfoModal = opt.showDonateInfo
              ? 'donate'
              : opt.showPartnerInfo
                ? 'partner'
                : null;

            const cardInner = (
              <>
                <h3 className="text-lg font-medium">{opt.label}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
                  {opt.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
                  Узнать больше
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </>
            );

            const cardClassName =
              'group flex h-full flex-col rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:bg-white/15';

            return (
              <Reveal key={opt.id} delay={(i % 3) * 70}>
                {modalKey ? (
                  <button
                    type="button"
                    onClick={() => setInfoModal(modalKey)}
                    className={`w-full text-left ${cardClassName}`}
                  >
                    {cardInner}
                  </button>
                ) : (
                  <a href={opt.href} className={cardClassName}>
                    {cardInner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Info modal (donate / partner) */}
      {infoModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setInfoModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={MODAL_CONTENT[infoModal].title}
        >
          <button
            type="button"
            onClick={() => setInfoModal(null)}
            aria-label="Закрыть"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-canvas p-7 shadow-lift animate-scale-in sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-medium tracking-tight text-ink">
              {MODAL_CONTENT[infoModal].title}
            </h3>
            <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted">
              {MODAL_CONTENT[infoModal].text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
