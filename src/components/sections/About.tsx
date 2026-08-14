import { IMG, ABOUT_FACTS, ABOUT_PARAGRAPHS, ABOUT_QUOTE } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Team } from '@/components/sections/Team';

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal className="order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={IMG.about}
                alt="Актёры на репетиции в театре"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* secondary, smaller image for depth */}
            <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-canvas shadow-lift sm:block">
              <img
                src={IMG.aboutWide}
                alt="Зрительный зал во время спектакля"
                className="aspect-[3/2] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-2">
          <SectionHeading
            eyebrow="О театре"
            title="Мы прежде всего театр"
          />

          {/* Demo notice */}
          <Reveal delay={80}>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-700">
              Демонстрационный текст — будет заменён на подлинную историю театра
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {ABOUT_PARAGRAPHS.slice(1).map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Quote */}
          <Reveal delay={420}>
            <blockquote className="mt-8 border-l-2 border-accent/40 pl-5 text-lg font-medium italic leading-relaxed text-ink">
              {ABOUT_QUOTE}
            </blockquote>
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4" delay={200}>
            {ABOUT_FACTS.map((fact) => (
              <div key={fact.label} className="border-l border-hairline pl-4">
                <div className="text-xl font-medium text-primary sm:text-2xl">{fact.value}</div>
                <div className="mt-1 text-sm text-muted leading-snug">{fact.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Director + troupe */}
      <div className="container-x">
        <Team />
      </div>
    </section>
  );
}
