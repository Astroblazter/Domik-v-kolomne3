import { Film } from 'lucide-react';
import { VIDEOS } from '@/data/loadVideo';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

export function Video() {
  return (
    <section id="video" className="section-y bg-surface/40 border-y border-hairline">
      <div className="container-x">
        <SectionHeading
          eyebrow="Видео"
          title="Видео спектаклей, моменты репетиций и наших встреч"
          intro="Небольшие видеозарисовки из жизни театра — прямо со сцены и из-за кулис."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.id} delay={(i % 3) * 80}>
              <div className="group relative block w-full overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-lift">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="aspect-video w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lift">
                    <Film size={26} />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="text-lg font-medium text-white">{video.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
