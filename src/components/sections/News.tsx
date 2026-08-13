import { NEWS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function News() {
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
                  <a
                    href={`#news-${item.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    Читать далее
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
