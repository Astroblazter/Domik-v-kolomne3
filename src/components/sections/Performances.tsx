import { PERFORMANCES } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ArrowUpRight, Clock } from 'lucide-react';

export function Performances() {
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
                      as="a"
                      href="#schedule"
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
    </section>
  );
}
