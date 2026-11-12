"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur shadow-[0_1px_0_rgba(60,69,48,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/img/brading.jpg"
            alt="Los Árabes"
            width={44}
            height={44}
            className="rounded-full object-cover ring-1 ring-gold/40"
          />
          <span
            className={`font-display text-lg md:text-xl tracking-[0.18em] uppercase transition-colors ${
              scrolled ? "text-olive" : "text-cream"
            }`}
          >
            Los Árabes
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-[0.14em] uppercase transition-colors hover:text-gold ${
                scrolled ? "text-olive-deep" : "text-cream/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            aria-label="Ver mi pedido"
            className="relative flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium tracking-wide text-charcoal transition hover:bg-gold-light"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline">Mi pedido</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-olive" : "text-cream"}`}
            aria-label="Abrir menú de navegación"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-cream/95 backdrop-blur border-t border-olive/10 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-[0.14em] uppercase text-olive-deep border-b border-olive/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
