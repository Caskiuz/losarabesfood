import Image from "next/image";
import { business } from "@/data/business";

const values = [
  {
    icon: "🌿",
    title: "Ingredientes frescos",
    text: "Selección diaria de carnes y vegetales para cada pedido.",
  },
  {
    icon: "🔥",
    title: "Al carbón",
    text: "El aroma y el sellado de la parrilla en cada platillo.",
  },
  {
    icon: "👨‍🍳",
    title: "Receta de familia",
    text: "Sazón árabe heredada, preparada al momento de tu pedido.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/img/plato3.jpg"
              alt="Beduino especial recién sellado"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-olive px-6 py-5 text-cream shadow-xl md:block">
            <p className="font-display text-3xl text-gold-light">100%</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/70">
              Hecho al momento
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="ornament mb-4" />
          <h2 className="font-display text-4xl uppercase tracking-[0.12em] text-olive md:text-5xl">
            Nuestra Historia
          </h2>
          <p className="mt-6 leading-relaxed text-olive/75">
            {business.description} Cada beduino se sella en su pan árabe
            justo al recibir tu pedido: la tortilla de Medio Oriente que se
            volvió tradición de la parrilla.
          </p>

          <div className="mt-10 space-y-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-olive/10">
                  {v.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg text-olive">{v.title}</h3>
                  <p className="mt-0.5 text-sm text-olive/65">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
