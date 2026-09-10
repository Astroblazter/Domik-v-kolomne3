import { useEffect, useState } from 'react';
import {
  SUPPORT_IMAGE,
  SUPPORT_OPTIONS,
  SUPPORT_LEAD,
  SUPPORT_USES,
  SUPPORT_BUTTON_NOTE,
  SUPPORT_DONATE_INFO_TEXT,
} from '@/data/loadSupport';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ArrowRight, X } from 'lucide-react';

export function Support() {
  const [donateOpen, setDonateOpen] = useState(false);

  useEffect(() => {
    if (!donateOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDonateOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [donateOpen]);

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
            onClick={() => setDonateOpen(true)}
          >
            Поддержать театр
            <ArrowRight size={18} />
          </Button>
          <p className="mt-3 text-xs text-white/60">
            {SUPPORT_BUTTON_NOTE}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {SUPPORT_OPTIONS.map((opt, i) => (
            <Reveal key={opt.id} delay={(i % 3) * 70}>
              {opt.showDonateInfo ? (
                <button
                  type="button"
                  onClick={() => setDonateOpen(true)}
                  className="group flex h-full w-full flex-col rounded-2xl bg-white/10 p-6 text-left text-white backdrop-blur-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:bg-white/15"
                >
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
                </button>
              ) : (
                <a
                  href={opt.href}
                  className="group flex h-full flex-col rounded-2xl bg-white/10 p-6 text-white backdrop-blur-sm transition-all duration-500 ease-smooth hover:-translate-y-1 hover:bg-white/15"
                >
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
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Donation info modal */}
      {donateOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setDonateOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Как поддержать театр"
        >
          <button
            type="button"
            onClick={() => setDonateOpen(false)}
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
              Поддержать театр
            </h3>
            <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-muted">
              {SUPPORT_DONATE_INFO_TEXT}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
