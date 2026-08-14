import type { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? '!text-accent-200' : ''} ${isCenter ? 'mb-4' : 'mb-5'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-medium tracking-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-muted'}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
