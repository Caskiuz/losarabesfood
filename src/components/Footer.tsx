import { business } from "@/data/business";
import { whatsappContactUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-olive-deep py-14 text-center">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="font-display text-2xl uppercase tracking-[0.2em] text-gold-light">
          {business.name}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-cream/50">
          {business.tagline}
        </p>

        <div className="mx-auto my-7 flex max-w-xs items-center gap-3 text-gold/60">
          <span className="h-px flex-1 bg-gold/40" />
          <span className="text-sm">❖</span>
          <span className="h-px flex-1 bg-gold/40" />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream/70">
          <a href="#menu" className="hover:text-gold-light">Menú</a>
          <a href="#paquetes" className="hover:text-gold-light">Paquetes</a>
          <a href="#nosotros" className="hover:text-gold-light">Nosotros</a>
          <a
            href={whatsappContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light"
          >
            WhatsApp
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light"
          >
            Instagram
          </a>
        </nav>

        <p className="mt-8 text-xs text-cream/35">
          © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
