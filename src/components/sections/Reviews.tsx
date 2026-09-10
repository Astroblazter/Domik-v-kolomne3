import { useEffect, useState } from 'react';
import { Quote, X } from 'lucide-react';
import { REVIEWS } from '@/data/loadReviews';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Reviews() {
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

  const selected = REVIEWS.find((r) => r.id === selectedId) ?? null;

  return (
    <section id="reviews" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Отзывы"
          title="О наших спектаклях"
          intro="Что говорят зрители о спектаклях театра «Домик в Коломне»."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setSelectedId(r.id)}
                className="flex h-full w-full flex-col rounded-2xl border border-hairline bg-surface p-7 text-left shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift"
              >
                <Quote size={28} className="shrink-0 text-accent/40" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  {r.keyPhrase}
                </blockquote>
                <div className="mt-6 border-t border-hairline pt-4">
                  <div className="text-sm font-medium text-ink">{r.author}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-muted">
                    {r.source}
                  </div>
                </div>
                <span className="mt-4 text-sm font-medium text-primary">Читать полностью →</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full review modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Полный текст отзыва"
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
            className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-canvas p-7 shadow-lift animate-scale-in sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <Quote size={32} className="shrink-0 text-accent/40" />
            <blockquote className="mt-5 text-lg leading-relaxed text-ink">
              {selected.fullText}
            </blockquote>
            <div className="mt-7 border-t border-hairline pt-5">
              <div className="text-sm font-medium text-ink">{selected.author}</div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-muted">
                {selected.source}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
