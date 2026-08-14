import { CONTACTS, NAV_ITEMS } from '@/data/content';
import { Logo } from '@/components/Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface/60">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <div className="text-base font-semibold tracking-tight text-ink">
                  Домик в Коломне
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted">
                  Инклюзивный театр · Санкт-Петербург
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Независимый инклюзивный театр, где каждый может стать частью истории.
            </p>

            {/* Socials */}
            <div className="mt-5 flex flex-wrap gap-2">
              {CONTACTS.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center rounded-full border border-hairline bg-canvas px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Навигация в подвале" className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Инклюзивный театр «Домик в Коломне»</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#privacy" className="transition-colors hover:text-primary">
              Политика конфиденциальности
            </a>
            <a href="#personal-data" className="transition-colors hover:text-primary">
              Политика обработки персональных данных
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
