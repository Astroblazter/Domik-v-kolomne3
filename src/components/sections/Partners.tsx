import { PARTNERS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Partners() {
  return (
    <section id="partners" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Партнёры"
          title="Нам помогают"
          intro="Театры, фонды и культурные площадки, вместе с которыми появляются наши проекты."
          align="center"
        />

        <Reveal className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((name) => (
            <div
              key={name}
              className="group flex h-32 items-center justify-center bg-canvas px-6 text-center transition-colors duration-300 hover:bg-surface"
            >
              <span className="text-sm font-medium leading-snug text-muted transition-colors duration-300 group-hover:text-primary sm:text-base">
                {name}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
