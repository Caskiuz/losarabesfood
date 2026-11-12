"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { salsas } from "@/data/menu";

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, setQty, remove, clear, salsa, setSalsa } =
    useCart();
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"recoger" | "domicilio">("recoger");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState<"cart" | "checkout">("cart");

  const canSend =
    items.length > 0 &&
    name.trim().length >= 2 &&
    (mode === "recoger" || address.trim().length >= 5);

  const send = () => {
    if (!canSend) return;
    const url = buildWhatsAppUrl({
      items,
      total,
      customer: { name, mode, address, notes, salsa },
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      <aside
        role="dialog"
        aria-label="Tu pedido"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-olive/10 px-5 py-4">
          <h2 className="font-display text-xl tracking-wide text-olive">
            {step === "cart" ? "Tu pedido" : "Datos de entrega"}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Cerrar pedido"
            className="rounded-full p-2 text-olive hover:bg-olive/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <span className="text-4xl">🍢</span>
            <p className="font-display text-lg text-olive">Tu pedido está vacío</p>
            <p className="text-sm text-olive/70">
              Explora el menú y agrega tus platillos favoritos.
            </p>
            <a
              href="#menu"
              onClick={closeCart}
              className="mt-2 rounded-full bg-olive px-6 py-2.5 text-sm tracking-wide text-cream transition hover:bg-olive-deep"
            >
              Ver el menú
            </a>
          </div>
        ) : step === "cart" ? (
          <>
            <ul className="flex-1 divide-y divide-olive/10 overflow-y-auto px-5">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 py-4">
                  <div className="flex-1">
                    <p className="font-medium text-olive-deep">{i.name}</p>
                    <p className="text-sm text-olive/70">
                      ${(i.price * i.qty).toFixed(0)} MXN
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        aria-label={`Quitar una unidad de ${i.name}`}
                        className="h-8 w-8 rounded-full border border-olive/20 text-olive hover:bg-olive/10"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm font-medium">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        aria-label={`Agregar una unidad de ${i.name}`}
                        className="h-8 w-8 rounded-full border border-olive/20 text-olive hover:bg-olive/10"
                      >
                        +
                      </button>
                      <button
                        onClick={() => remove(i.id)}
                        className="ml-auto text-xs uppercase tracking-wider text-red-700/80 hover:text-red-700"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-olive/10 px-5 py-4">
              <label
                htmlFor="pedido-salsa"
                className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-olive/70"
              >
                Salsa de la casa (a elección)
              </label>
              <select
                id="pedido-salsa"
                value={salsa}
                onChange={(e) => setSalsa(e.target.value)}
                className="w-full rounded-lg border border-olive/20 bg-white/60 px-3 py-2 text-sm text-olive-deep"
              >
                <option value="">Sin salsa / con todo</option>
                {salsas.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <div className="mt-3 flex items-center justify-between font-display text-lg text-olive">
                <span>Total</span>
                <span>${total.toFixed(0)} MXN</span>
              </div>
              <button
                onClick={() => setStep("checkout")}
                className="mt-3 w-full rounded-full bg-gold py-3 font-medium tracking-wide text-charcoal transition hover:bg-gold-light"
              >
                Continuar →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              <div>
                <label
                  htmlFor="pedido-nombre"
                  className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-olive/70"
                >
                  Tu nombre *
                </label>
                <input
                  id="pedido-nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. María González"
                  className="w-full rounded-lg border border-olive/20 bg-white/60 px-3 py-2.5 text-sm text-olive-deep placeholder:text-olive/40"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-olive/70">
                  Entrega
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(["recoger", "domicilio"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`rounded-lg border px-3 py-2.5 text-sm transition ${
                        mode === m
                          ? "border-gold bg-gold/15 font-medium text-olive-deep"
                          : "border-olive/20 text-olive/80 hover:border-olive/40"
                      }`}
                    >
                      {m === "recoger" ? "🏪 Recoger" : "🛵 Domicilio"}
                    </button>
                  ))}
                </div>
              </div>

              {mode === "domicilio" && (
                <div>
                  <label
                    htmlFor="pedido-direccion"
                    className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-olive/70"
                  >
                    Dirección *
                  </label>
                  <input
                    id="pedido-direccion"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Calle, número, colonia y referencias"
                    className="w-full rounded-lg border border-olive/20 bg-white/60 px-3 py-2.5 text-sm text-olive-deep placeholder:text-olive/40"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="pedido-notas"
                  className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-olive/70"
                >
                  Notas (opcional)
                </label>
                <textarea
                  id="pedido-notas"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Sin cebolla, salsa aparte, hora de entrega…"
                  className="w-full rounded-lg border border-olive/20 bg-white/60 px-3 py-2.5 text-sm text-olive-deep placeholder:text-olive/40"
                />
              </div>

              <div className="rounded-lg bg-olive/5 p-3 text-xs leading-relaxed text-olive/75">
                Al enviar, tu pedido se abrirá en WhatsApp listo para confirmar
                con el equipo de Los Árabes. El pago y la entrega se coordinan
                directamente por chat.
              </div>
            </div>

            <div className="border-t border-olive/10 px-5 py-4">
              <div className="mb-3 flex items-center justify-between font-display text-lg text-olive">
                <span>Total</span>
                <span>${total.toFixed(0)} MXN</span>
              </div>
              <button
                onClick={send}
                disabled={!canSend}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-medium tracking-wide text-white transition enabled:hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.23 5.11 4.52.71.31 1.27.5 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.86-9.9 9.86Zm8.42-18.28A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4Z" />
                </svg>
                Enviar pedido por WhatsApp
              </button>
              <button
                onClick={() => setStep("cart")}
                className="mt-2 w-full text-center text-sm text-olive/70 underline underline-offset-2 hover:text-olive"
              >
                ← Volver al pedido
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
