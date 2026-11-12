import { business } from "@/data/business";
import { whatsappContactUrl } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contacto" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="ornament mb-4" />
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-olive md:text-5xl">
            Visítanos o Pide a Domicilio
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Horario */}
          <div className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-olive/10">
            <span className="text-3xl">🕒</span>
            <h3 className="mt-3 font-display text-xl text-olive">Horario</h3>
            <ul className="mt-4 space-y-2 text-sm text-olive/70">
              {business.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="font-medium text-olive-deep">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ubicación */}
          <div className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-olive/10">
            <span className="text-3xl">📍</span>
            <h3 className="mt-3 font-display text-xl text-olive">Ubicación</h3>
            <p className="mt-4 text-sm leading-relaxed text-olive/70">
              {business.address}
            </p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full border border-olive/25 px-5 py-2 text-sm text-olive transition hover:border-gold hover:text-gold"
            >
              Abrir en Google Maps
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl bg-olive p-7 text-center shadow-sm">
            <span className="text-3xl">💬</span>
            <h3 className="mt-3 font-display text-xl text-cream">
              Pedidos por WhatsApp
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Atención directa y rápida. Arma tu pedido en línea o escríbenos
              y te atendemos personalmente.
            </p>
            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-medium text-white transition hover:brightness-95"
            >
              Chatear ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
