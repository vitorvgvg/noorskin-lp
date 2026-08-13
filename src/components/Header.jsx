import { useState } from "react";

const NAV_ITEMS = ["Produtos", "Nossa Essência", "Blog", "Contato", "Prescritor"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-noor-brown text-noor-cream">
      <div className="flex items-center justify-between px-6 py-5 md:h-[60px] md:w-1/2 md:justify-between md:py-0 md:pl-[max(2.5rem,calc((100vw-1360px)/2))] md:pr-0">
        <button
          type="button"
          className="cursor-pointer md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>

        <a
          href="#topo"
          className="cursor-pointer font-display text-2xl tracking-[5px] md:order-first"
        >
          noorskin
        </a>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8 text-base">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="cursor-pointer transition-colors duration-200 hover:text-noor-terracotta"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="w-6 md:hidden" aria-hidden="true" />
      </div>

      <nav
        id="mobile-nav"
        aria-label="Navegação mobile"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block cursor-pointer py-2 text-base transition-colors duration-200 hover:text-noor-terracotta"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
