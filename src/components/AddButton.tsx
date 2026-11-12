"use client";

import { useCart, type CartItem } from "./CartProvider";

export default function AddButton({
  item,
  label = "Agregar",
  className = "",
}: {
  item: Omit<CartItem, "qty">;
  label?: string;
  className?: string;
}) {
  const { add } = useCart();
  return (
    <button
      onClick={() => add(item)}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-gold-light active:scale-95 ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
      {label}
    </button>
  );
}
