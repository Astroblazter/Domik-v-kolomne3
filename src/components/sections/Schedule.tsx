import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { SCHEDULE, formatEventDate, formatEventTime, isPastEvent } from '@/data/loadSchedule';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

export function Schedule() {
  if (SCHEDULE.length === 0) {
    return (
      <section id="schedule" className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Афиша" title="Ближайшие показы" align="center" />
          <Reveal className="mx-auto mt-12 max-w-xl rounded-2xl border border-hairline bg-surface px-8 py-12 text-center shadow-soft">
            <p className="text-lg text-ink">Сейчас мы готовим новые показы.</p>
            <p className="mt-3 text-muted">
              Афиша на ближайший сезон появится позже. Следите за новостями, чтобы узнать о билетах первыми.
            </p>
            <div className="mt-7">
              <Button as="a" href="#news" variant="secondary" size="md">
                Следить за новостями
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // Index of the first past event, so we can drop in an "История" divider right above it.
  const firstPastIndex = SCHEDULE.findIndex((ev) => isPastEvent(ev.date));
  const hasUpcoming = firstPastIndex !== 0;
  const hasPast = firstPastIndex !== -1;

  return (
    <section id="schedule" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Афиша"
          title="Ближайшие показы"
          intro="Даты и площадки ближайших спектаклей. Ниже — архив прошедших показов."
        />
        <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
          {SCHEDULE.map((ev, i) => (
            <li key={ev.id}>
              {hasUpcoming && hasPast && i === firstPastIndex && (
                <div className="flex items-center gap-4 pt-10 pb-2">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    История показов
                  </span>
                  <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
                </div>
              )}
              <Reveal delay={Math.min(i, 6) * 60}>
                <div
                  className={`group flex flex-col gap-6 py-6 transition-colors hover:bg-surface/60 sm:flex-row sm:items-center sm:gap-8 sm:px-4 sm:-mx-4 sm:rounded-2xl ${
                    isPastEvent(ev.date) ? 'opacity-70' : ''
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-4 sm:w-56">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                      <CalendarDays size={24} />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-ink">{formatEventDate(ev.date)}</div>
                      <div className="text-muted">{formatEventTime(ev.date)}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-ink">{ev.performance}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" /> {ev.venue}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" /> {formatEventTime(ev.date)}
                      </span>
                    </div>
                  </div>
                  {!isPastEvent(ev.date) && (
                    <div className="shrink-0">
                      <Button as="a" href="#contacts" variant="secondary" size="md">
                        Записаться
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
