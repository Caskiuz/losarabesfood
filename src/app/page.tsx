import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Packages from "@/components/Packages";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <Packages />
        <About />
        <Gallery />

        {/* Carta física */}
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <p className="ornament mb-4" />
            <h2 className="font-display text-3xl uppercase tracking-[0.12em] text-olive md:text-4xl">
              Nuestra Carta
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-olive/70">
              Consulta el menú completo tal como lo conoces en el local.
            </p>
            <a
              href="/img/menu.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block overflow-hidden rounded-2xl shadow-xl ring-1 ring-olive/15 transition hover:shadow-2xl"
            >
              <Image
                src="/img/menu.jpg"
                alt="Carta completa de Los Árabes"
                width={1204}
                height={1600}
                className="mx-auto max-w-lg w-full transition duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </>
  );
}
