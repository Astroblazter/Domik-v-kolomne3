import { useState } from 'react';

type LogoProps = {
  /** Override the logo source (CMS-driven asset URL). */
  src?: string;
  /** Additional classes for the logo element. */
  className?: string;
  /** Accessible label. */
  alt?: string;
};

/**
 * Reusable theatre logo.
 *
 * Rendered as a solid silhouette (CSS mask) filled with `currentColor`,
 * so it always matches the surrounding text color and changes in sync
 * with it — including the header's white → dark transition on scroll.
 *
 * Loads the image from /logo.svg by default and transparently falls back
 * to /logo.png if it's unavailable. Works with any single-shape SVG or
 * PNG logo, regardless of its original color.
 */
export function Logo({
  src = '/logo.svg',
  className = '',
  alt = 'Логотип театра «Домик в Коломне»',
}: LogoProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <span
      className={`relative inline-block h-8 shrink-0 sm:h-10 lg:h-12 ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Invisible image: only used to size the box to the logo's natural proportions
          and to detect load failures (falls back to /logo.png). */}
      <img
        src={currentSrc}
        alt=""
        aria-hidden="true"
        className="h-full w-auto object-contain opacity-0"
        onError={() => {
          if (currentSrc !== '/logo.png') setCurrentSrc('/logo.png');
        }}
        draggable={false}
      />
      {/* Visible silhouette, filled with the current text color */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundColor: 'currentColor',
          WebkitMaskImage: `url(${currentSrc})`,
          maskImage: `url(${currentSrc})`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      />
    </span>
  );
}
