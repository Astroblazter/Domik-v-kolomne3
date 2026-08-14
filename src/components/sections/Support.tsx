import { IMG, SUPPORT_OPTIONS, SUPPORT_LEAD, SUPPORT_USES } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export function Support() {
  return (
    <section id="support" className="relative section-y overflow-hidden">
      {/* Atmospheric photo background */}
      <img
        src={IMG.support}
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
          <Button as="a" href="#contacts" variant="primary" size="lg" className="!bg-accent !text-white">
            Поддержать театр
            <ArrowRight size={18} />
          </Button>
          <p className="mt-3 text-xs text-white/60">
            Демонстрационная кнопка — платёжная система будет подключена позже.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {SUPPORT_OPTIONS.map((opt, i) => (
            <Reveal key={opt.id} delay={(i % 3) * 70}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
