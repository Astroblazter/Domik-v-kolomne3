import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { NEWS } from '@/data/loadNews';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, X } from 'lucide-react';

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Lightweight markdown: turns **bold** into <strong> and blank-line-separated
// blocks into paragraphs. Covers the formatting the CMS "Текст" field needs
// without pulling in a full markdown library.
function renderBody(text: string): ReactNode {
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim());
  return paragraphs.map((paragraph, pi) => {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g).filter((p) => p !== '');
    return (
      <p key={pi} className="mt-4 first:mt-0">
        {parts.map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </p>
    );
  });
}

export function News() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedId]);

  const selected = NEWS.find((n) => n.id === selectedId) ?? null;

  return (
    <section id="news" className="section-y bg-surface/40 border-y border-hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Новости"
          title="Что происходит в театре"
          intro="Гастроли, премьеры, лаборатории и разговоры со зрителями — всё, что заслуживает отдельной заметки."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {NEWS.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:flex-row">
                <div className="relative shrink-0 overflow-hidden sm:w-2/5">
                  <img
                    src={item.image}
                    alt={`Иллюстрация к новости: ${item.title}`}
                    className="h-48 w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03] sm:h-full"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs uppercase tracking-[0.18em] text-muted">
                    {formatDate(item.date)}
                  </time>
                  <h3 className="mt-3 text-lg font-medium leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.preview}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    Читать далее
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full news modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            aria-label="Закрыть"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-canvas shadow-lift animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.image && (
              <img
                src={selected.image}
                alt={`Иллюстрация к новости: ${selected.title}`}
                className="h-56 w-full object-cover sm:h-72"
              />
            )}
            <div className="p-6 sm:p-9">
              <time className="text-xs uppercase tracking-[0.18em] text-muted">
                {formatDate(selected.date)}
              </time>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink">
                {selected.title}
              </h3>
              <div className="mt-5 text-base leading-relaxed text-muted">
                {selected.body ? renderBody(selected.body) : <p>{selected.preview}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
