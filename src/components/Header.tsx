import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/content';
import { Logo } from '@/components/Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        solid ? 'bg-canvas/95 backdrop-blur-md border-b border-hairline/70' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        {/* Logo / wordmark */}
        <a
          href="#top"
          aria-label="Домик в Коломне — на главную"
          className={`flex items-center gap-3 transition-colors duration-300 ${
            solid ? 'text-ink' : 'text-white'
          }`}
        >
          <Logo />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">Домик в Коломне</span>
            <span
              className={`text-[11px] font-medium uppercase tracking-[0.18em] ${
                solid ? 'text-muted' : 'text-white/70'
              }`}
            >
              Инклюзивный театр
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Основная навигация"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                solid ? 'text-ink' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-2xl transition-colors ${
            solid ? 'text-ink hover:bg-primary/5' : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-smooth ${
          menuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          aria-label="Мобильная навигация"
          className="container-x flex flex-col gap-1 py-4"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-primary/5 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
