import { useEffect, useState } from 'react';
import { PERFORMANCES } from '@/data/loadPerformances';
import { SCHEDULE } from '@/data/loadSchedule';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ArrowUpRight, Clock, X, MapPin, CalendarDays } from 'lucide-react';

export function Performances() {
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

  const selected = PERFORMANCES.find((p) => p.id === selectedId) ?? null;
  const selectedDates = selected
    ? SCHEDULE.filter((e) => e.performance === selected.title)
    : [];

  return (
    <section id="performances" className="section-y bg-surface/40 border-y border-hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Спектакли"
          title="Текущий репертуар"
          intro="Четыре постановки в демонстрационном репертуаре. Когда спектакли будут готовы, здесь появится настоящее описание каждого из них."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PERFORMANCES.map((perf, i) => (
            <Reveal key={perf.id} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-2xl bg-surface shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={perf.image}
                    alt={`Спектакль «${perf.title}»`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                    {perf.age}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {perf.status}
                  </span>
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-medium tracking-tight text-ink">{perf.title}</h3>
                  <p className="mt-1 text-sm text-muted">{perf.author}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-primary" /> {perf.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-4">
                    {perf.description}
                  </p>
                  <div className="mt-6 pt-2">
                    <Button
                      as="button"
                      type="button"
                      onClick={() => setSelectedId(perf.id)}
                      variant="ghost"
                      size="md"
                      className="!px-0 hover:!bg-transparent !text-primary"
                    >
                      Подробнее
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full performance modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Информация о спектакле «${selected.title}»`}
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
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-canvas shadow-lift animate-scale-in sm:grid sm:grid-cols-[minmax(0,16rem)_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative shrink-0">
              <img
                src={selected.image}
                alt={`Спектакль «${selected.title}»`}
                className="h-56 w-full object-cover sm:h-full"
              />
              <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                {selected.age}
              </span>
              <span className="absolute right-16 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:right-4">
                {selected.status}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-medium tracking-tight text-ink">{selected.title}</h3>
              <p className="mt-1 text-sm text-muted">{selected.author}</p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-primary" /> {selected.duration}
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted">
                {selected.description}
              </p>

              {selectedDates.length > 0 && (
                <div className="mt-7 border-t border-hairline pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    Ближайшие показы
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {selectedDates.map((ev) => (
                      <li key={ev.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} className="text-primary" />
                          {ev.date}, {ev.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted">
                          <MapPin size={14} className="text-primary" />
                          {ev.venue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-7">
                <Button as="a" href="#contacts" variant="primary" size="md">
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
