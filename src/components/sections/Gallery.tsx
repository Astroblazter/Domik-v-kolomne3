import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY } from '@/data/loadGallery';
import { SectionHeading } from '@/components/SectionHeading';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, next, prev]);

  return (
    <section id="gallery" className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Галерея"
          title="Кадры со сцены и за кулисами"
          intro="Фотографии с репетиций, показов и закулисья. Нажмите на снимок, чтобы увеличить."
        />
        {/* Uniform grid: every tile has the same height, regardless of the source photo's proportions */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`Открыть фото ${i + 1} в полноэкранном режиме`}
              className="group block h-48 w-full overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-smooth hover:shadow-lift focus-visible:outline-2 sm:h-56 lg:h-64"
            >
              <img
                src={src}
                alt={`Фотография из архива театра — кадр ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.05]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {lightboxIndex !== null && (
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
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущее фото"
            className="absolute left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
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
              src={GALLERY[lightboxIndex]}
              alt={`Фотография из архива театра — кадр ${lightboxIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {lightboxIndex + 1} / {GALLERY.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
