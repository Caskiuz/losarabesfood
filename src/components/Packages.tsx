import Image from "next/image";
import { paquetes } from "@/data/menu";
import AddButton from "./AddButton";

export default function Packages() {
  return (
    <section id="paquetes" className="bg-coal py-20 pattern-arabesque md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="ornament mb-4" />
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-cream md:text-5xl">
            Paquetes para <span className="text-gold-light">Compartir</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            Ideales para reuniones familiares y con amigos, listos para
            armar tus tacos a la parrilla.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {paquetes.map((p, idx) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden rounded-2xl bg-coal-soft ring-1 ring-gold/20 transition hover:ring-gold/50 ${
                idx === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.image!}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal-soft via-transparent to-transparent" />
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6 pt-2">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-cream">{p.name}</h3>
                  <span className="font-display text-2xl text-gold-light">
                    ${p.price}
                  </span>
                </div>
                <p className="mt-2 min-h-[3.5rem] text-sm leading-relaxed text-cream/60">
                  {p.description}
                </p>
                <AddButton
                  item={{ id: p.id, name: p.name, price: p.price }}
                  className="mt-2 w-full !bg-gold !text-charcoal hover:!bg-gold-light"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
