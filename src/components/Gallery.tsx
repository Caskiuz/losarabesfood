import Image from "next/image";

const photos = [
  { src: "/img/plato5.jpg", alt: "Brochetas de puerco al carbón" },
  { src: "/img/plato2.jpg", alt: "Paquete familiar de la parrilla" },
  { src: "/img/plato4.jpg", alt: "Orden de sirloin con salchicha asada" },
  { src: "/img/plato1.jpg", alt: "Beduino clásico con ensalada y jocoque" },
];

export default function Gallery() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          <p className="ornament mb-4" />
          <h2 className="font-display text-3xl uppercase tracking-[0.12em] text-cream md:text-4xl">
            Directo de la Parrilla
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((p) => (
            <div
              key={p.src}
              className="group relative aspect-square overflow-hidden rounded-xl bg-coal"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
