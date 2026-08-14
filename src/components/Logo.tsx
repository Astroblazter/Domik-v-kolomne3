import { useState } from 'react';

type LogoProps = {
  /** Override the logo source (prepared for future CMS-driven asset URL). */
  src?: string;
  /** Additional classes for the <img> element. */
  className?: string;
  /** Accessible label, surfaced as alt text. */
  alt?: string;
};

/**
 * Reusable theatre logo.
 *
 * Loads the SVG from /logo.svg by default and transparently falls back to
 * /logo.png if the SVG is unavailable. The `src` prop lets a future CMS
 * supply the asset URL without changing the Header component.
 *
 * The image keeps its intrinsic aspect ratio (no cropping/distortion) and
 * is height-constrained via Tailwind classes passed by the consumer.
 */
export function Logo({
  src = '/logo.svg',
  className = '',
  alt = 'Логотип театра «Домик в Коломне»',
}: LogoProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`h-8 w-auto shrink-0 object-contain sm:h-10 lg:h-12 ${className}`}
      onError={() => {
        if (currentSrc !== '/logo.png') setCurrentSrc('/logo.png');
      }}
      draggable={false}
    />
  );
}
