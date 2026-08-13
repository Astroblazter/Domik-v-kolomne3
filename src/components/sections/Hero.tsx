import { ArrowDown } from 'lucide-react';
import { IMG } from '@/data/content';
import { Button } from '@/components/Button';

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Главный экран"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <img
        src={IMG.hero}
        alt="Освещённая театральная сцена перед началом спектакля"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* 40% dark overlay for readable text */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-container px-6 text-center text-white sm:px-8 lg:px-12">
        <p
          className="eyebrow !text-white/80 mb-6 animate-fade-in"
          style={{ animationDelay: '120ms' }}
        >
          Санкт-Петербург
        </p>
        <h1
          className="text-4xl font-medium leading-[1.1] tracking-tight animate-fade-up sm:text-5xl lg:text-7xl"
          style={{ animationDelay: '200ms' }}
        >
          Инклюзивный театр
          <br />
          <span className="italic">«Домик в Коломне»</span>
        </h1>
        <p
          className="mx-auto mt-7 max-w-xl text-lg text-white/90 animate-fade-up sm:text-xl"
          style={{ animationDelay: '360ms' }}
        >
          Театр, в котором каждый человек может стать частью истории.
        </p>
        <p
          className="mx-auto mt-4 max-w-2xl text-sm text-white/75 animate-fade-up sm:text-base"
          style={{ animationDelay: '440ms' }}
        >
          Мы создаём спектакли вместе — актёры, режиссёр, семьи и зрители. Здесь важны не ограничения, а возможность быть услышанным, увидеть другого и рассказать свою историю.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 animate-fade-up sm:flex-row sm:gap-4"
          style={{ animationDelay: '520ms' }}
        >
          <Button as="a" href="#schedule" variant="primary" size="lg">
            Ближайшие спектакли
          </Button>
          <Button
            as="a"
            href="#about"
            variant="secondary"
            size="lg"
            className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!border-white/50"
          >
            О театре
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Прокрутить вниз"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <span className="sr-only">Прокрутить к разделу «О театре»</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-scroll-hint" />
        </span>
        <ArrowDown size={14} className="mx-auto mt-2 opacity-60" />
      </a>
    </section>
  );
}
