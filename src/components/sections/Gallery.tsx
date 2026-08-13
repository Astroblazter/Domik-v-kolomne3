import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    []
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section id="gallery" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Галерея"
          title="Кадры со сцены и за кулисами"
          intro="Фотографии с репетиций, показов и закулисья. Нажмите на снимок, чтобы увеличить."
        />

        {/* Masonry via CSS columns */}
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Открыть фото ${i + 1} в полноэкранном режиме`}
              className="group block w-full overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-smooth hover:shadow-lift focus-visible:outline-2"
            >
              <img
                src={src}
                alt={`Фотография из архива театра — кадр ${i + 1}`}
                className="w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Предыдущее фото"
            className="absolute left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Следующее фото"
            className="absolute right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight size={26} />
          </button>

          <figure
            className="max-h-[88vh] max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[active]}
              alt={`Фотография из архива театра — кадр ${active + 1}`}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {active + 1} / {GALLERY.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
