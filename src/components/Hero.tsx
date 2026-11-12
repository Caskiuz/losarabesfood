import Image from "next/image";
import { business } from "@/data/business";
import { whatsappContactUrl } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-charcoal pattern-arabesque"
    >
      {/* Foto derecha que se funde con el fondo negro */}
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src="/img/plato6.jpg"
          alt="Brocheta al carbón de Los Árabes"
          fill
          priority
          className="object-cover object-center photo-fade"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
      </div>
      {/* Halo dorado decorativo */}
      <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 py-28 md:px-6">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-gold-light">
            <span className="h-px w-10 bg-gold/70" />
            Sabor del Medio Oriente
          </p>

          <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
            Los <span className="text-gold-light">Árabes</span>
          </h1>

          <p className="mt-5 font-display text-lg uppercase tracking-[0.22em] text-cream/80 md:text-xl">
            Carne asada · Beduinos · Brochetas
          </p>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-cream/60 md:text-lg">
            Pan árabe relleno al momento, brochetas al carbón y cortes
            jugosos a la parrilla. Pide en línea y recibe el sabor de
            casa en minutos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-gold px-8 py-3.5 font-medium tracking-wide text-charcoal transition hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Ver el menú
            </a>
            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-cream transition hover:border-gold hover:text-gold-light"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.23 5.11 4.52.71.31 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.86-9.9 9.86Zm8.42-18.28A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4Z" />
              </svg>
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-cream/50">
            <span>🔥 Al carbón todos los días</span>
            <span>⭐ Ingredientes frescos</span>
            <span>🛵 Entrega y para llevar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
