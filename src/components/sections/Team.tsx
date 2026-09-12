import { useEffect, useState } from 'react';
import { DIRECTOR } from '@/data/loadDirector';
import { TEAM, type TeamMember } from '@/data/loadTeam';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { X } from 'lucide-react';

export function Team() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const selected = selectedIndex !== null ? TEAM[selectedIndex] : null;

  return (
    <div className="mt-20 sm:mt-28 lg:mt-32">
      {/* Director block */}
      <Reveal>
        <h3 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Режиссёр и художественный руководитель
        </h3>
      </Reveal>

      <Reveal delay={80} className="mt-8">
        <div className="grid items-center gap-8 rounded-2xl border border-hairline bg-surface/50 p-6 shadow-soft sm:gap-12 sm:p-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:p-10">
          {/* Photo */}
          <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl shadow-soft lg:max-w-none">
            <img
              src={DIRECTOR.photo}
              alt={`${DIRECTOR.name} — режиссёр и художественный руководитель театра «Домик в Коломне»`}
              className="aspect-[9/11] w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div>
            <div className="text-lg font-medium text-ink sm:text-xl">{DIRECTOR.name}</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-primary">
              {DIRECTOR.role}
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted">
              {DIRECTOR.shortBio}
            </p>

            <div className="mt-5 border-l-2 border-accent/40 pl-4">
              <p className="text-sm leading-relaxed text-muted">
                {DIRECTOR.theatreRoles}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Troupe heading */}
      <div className="mt-20 sm:mt-24">
        <SectionHeading
          eyebrow="Труппа"
          title="Труппа театра"
          intro="За каждым спектаклем стоят люди — актёры, режиссёр, участники репетиций и создатели спектаклей. Мы хотим познакомить вас с теми, кто выходит на сцену и вместе создаёт историю нашего театра."
        />
      </div>

      {/* Actor cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((member, i) => (
          <Reveal key={i} delay={(i % 4) * 70}>
            <ActorCard member={member} onOpen={() => setSelectedIndex(i)} />
          </Reveal>
        ))}
      </div>

      {/* Full bio modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Закрыть"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-canvas shadow-lift animate-scale-in sm:grid sm:grid-cols-[minmax(0,16rem)_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="shrink-0">
              <img
                src={selected.photo}
                alt={`${selected.name} — участник труппы театра «Домик в Коломне»`}
                className="h-56 w-full object-cover sm:h-full"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-medium tracking-tight text-ink">{selected.name}</h3>
              <div className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-primary">
                {selected.role}
              </div>
              <p className="mt-5 text-base leading-relaxed text-muted">{selected.shortBio}</p>
              <div className="mt-5 border-l-2 border-accent/40 pl-4">
                <p className="text-sm leading-relaxed text-muted">{selected.theatreRoles}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActorCard({ member, onOpen }: { member: TeamMember; onOpen: () => void }) {
  const alt = `${member.name} — участник труппы театра «Домик в Коломне»`;
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 text-left shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="overflow-hidden">
        <img
          src={member.photo}
          alt={alt}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-medium text-ink">{member.name}</h4>
        <div className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-primary">
          {member.role}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
          {member.shortBio}
        </p>
        <span className="mt-4 border-t border-hairline pt-3 text-xs font-medium text-primary">
          Читать полностью →
        </span>
      </div>
    </button>
  );
}
