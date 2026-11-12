"use client";

import Image from "next/image";
import { useState } from "react";
import { menu, salsas } from "@/data/menu";
import { useCart } from "./CartProvider";
import AddButton from "./AddButton";

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const { setSalsa, salsa } = useCart();
  const category = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Encabezado */}
        <div className="text-center">
          <p className="ornament mb-4 text-center" />
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-olive md:text-5xl">
            Nuestro Menú
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-olive/70">
            Elaborado al momento, con recetas de tradición árabe y el toque
            de la parrilla. Toca <span className="font-medium text-gold">+</span> para
            armar tu pedido.
          </p>
        </div>

        {/* Pestañas */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2.5 text-sm tracking-wide transition ${
                active === c.id
                  ? "bg-olive text-cream shadow-md shadow-olive/20"
                  : "bg-olive/5 text-olive hover:bg-olive/10"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Subtítulo de categoría */}
        <p className="mt-8 text-center text-sm uppercase tracking-[0.18em] text-gold">
          {category.subtitle}
        </p>

        {/* Tarjetas de platillos */}
        <div
          key={active}
          className="mt-8 grid animate-fade-up gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {category.items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(43,51,35,0.07)] ring-1 ring-olive/10 transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(43,51,35,0.14)]"
            >
              {item.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-coal">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl leading-snug text-olive">
                    {item.name}
                  </h3>
                  <span className="shrink-0 font-display text-lg text-gold">
                    ${item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-olive/65">
                    {item.description}
                  </p>
                )}
                <div className="mt-4">
                  <AddButton
                    item={{ id: item.id, name: item.name, price: item.price }}
                    className="w-full"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Salsas de la casa */}
        <div className="mt-16 rounded-2xl bg-olive px-6 py-8 text-center md:px-10">
          <h3 className="font-display text-2xl uppercase tracking-[0.16em] text-cream">
            Salsas de la casa <span className="text-gold-light">— sin costo</span>
          </h3>
          <p className="mt-2 text-sm text-cream/60">
            Elige la tuya al armar tu pedido
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {salsas.map((s) => (
              <button
                key={s}
                onClick={() => setSalsa(salsa === s ? "" : s)}
                aria-pressed={salsa === s}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${
                  salsa === s
                    ? "border-gold bg-gold text-charcoal"
                    : "border-cream/20 text-cream/85 hover:border-gold-light hover:text-gold-light"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
