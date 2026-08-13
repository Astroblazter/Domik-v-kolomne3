import { SCHEDULE } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

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

  return (
    <section id="schedule" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Афиша"
          title="Ближайшие показы"
          intro="Демонстрационная афиша. Когда расписание будет составлено, здесь появятся настоящие даты, площадки и время."
        />

        <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
          {SCHEDULE.map((event, i) => (
            <Reveal as="li" key={event.id} delay={i * 60}>
              <div className="group flex flex-col gap-6 py-6 transition-colors hover:bg-surface/60 sm:flex-row sm:items-center sm:gap-8 sm:px-4 sm:-mx-4 sm:rounded-2xl">
                {/* Date block */}
                <div className="flex shrink-0 items-center gap-4 sm:w-56">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
                    <CalendarDays size={24} />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-ink">{event.date}</div>
                    <div className="text-muted">{event.time}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-ink">{event.performance}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" /> {event.venue}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={14} className="text-primary" /> {event.time}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="shrink-0">
                  <Button as="a" href="#contacts" variant="secondary" size="md">
                    Записаться
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
