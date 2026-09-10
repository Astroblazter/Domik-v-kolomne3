import { ArrowUpRight } from 'lucide-react';
import { PARTNERS } from '@/data/loadPartners';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Partners() {
  return (
    <section id="partners" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Партнёры"
          title="Нам помогают"
          intro="Театры, фонды и культурные площадки, вместе с которыми появляются наши проекты."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 70}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-hairline bg-canvas p-6 text-center shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                {/* Logo (or name as fallback if no logo uploaded yet) */}
                <div className="flex h-16 w-full items-center justify-center">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={`Логотип: ${p.name}`}
                      className="max-h-16 max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm font-medium leading-snug text-muted">{p.name}</span>
                  )}
                </div>

                {/* Full name (only shown separately if a logo is present, to avoid repeating text) */}
                {p.logo && (
                  <div className="text-sm font-medium leading-snug text-ink">{p.name}</div>
                )}

                {/* Link to partner site */}
                <div className="mt-auto pt-1">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Сайт партнёра
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="text-xs text-muted">Ссылка скоро появится</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
