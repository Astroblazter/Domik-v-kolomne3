import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl font-medium transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  // Terracotta
  primary:
    'bg-accent text-white shadow-soft hover:bg-accent-600 hover:shadow-lift active:scale-[0.98]',
  // White
  secondary:
    'bg-surface text-ink border border-hairline hover:border-primary/40 hover:shadow-soft active:scale-[0.98]',
  ghost: 'bg-transparent text-primary hover:text-primary-700 hover:bg-primary/5',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type AnchorProps = ButtonBaseProps & {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
};

export function Button({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonProps | AnchorProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ((rest as AnchorProps).as === 'a') {
    const { href, target, rel } = rest as AnchorProps;
    const external = href?.startsWith('http');
    return (
      <a className={cls} href={href} target={target} rel={rel ?? (external ? 'noopener noreferrer' : undefined)}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonProps;
  void _as;
  return (
    <button className={cls} {...buttonProps}>
      {children}
    </button>
  );
}
