import { REVIEWS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Quote } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Отзывы"
          title="О наших спектаклях"
          intro="Демонстрационные отзывы. Когда появятся настоящие рецензии и отклики зрителей, они займут это место."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.id} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-7 shadow-soft">
                <Quote size={28} className="shrink-0 text-accent/40" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                  {review.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-4">
                  <div className="text-sm font-medium text-ink">{review.author}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-muted">
                    {review.source}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
