import { DIRECTOR } from '@/data/loadDirector'; 
import { TEAM, type TeamMember } from '@/data/loadTeam';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Team() {
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

            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-700">
              Демонстрационный текст — будет заменён реальной информацией
            </p>
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
            <ActorCard member={member} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ActorCard({ member }: { member: TeamMember }) {
  const alt = `${member.name} — участник труппы театра «Домик в Коломне»`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/50 shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
      {/* Photo ~60% of card height */}
      <div className="overflow-hidden">
        <img
          src={member.photo}
          alt={alt}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-medium text-ink">{member.name}</h4>
        <div className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-primary">
          {member.role}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {member.shortBio}
        </p>
        <p className="mt-4 border-t border-hairline pt-3 text-xs leading-relaxed text-muted">
          {member.theatreRoles}
        </p>
      </div>
    </article>
  );
}
