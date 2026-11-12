import { business } from "@/data/business";

type OrderPayload = {
  items: { name: string; qty: number; price: number }[];
  total: number;
  customer: {
    name: string;
    mode: "recoger" | "domicilio";
    address?: string;
    notes?: string;
    salsa?: string;
  };
};

/** Construye el mensaje de pedido para WhatsApp con saltos de línea seguros. */
export function buildWhatsAppUrl({ items, total, customer }: OrderPayload) {
  const lines: string[] = [
    "*Nuevo pedido — Los Árabes*",
    "",
    ...items.map(
      (i) => `• ${i.qty} × ${i.name} — $${(i.qty * i.price).toFixed(0)}`,
    ),
    "",
    `*Total: $${total.toFixed(0)} MXN*`,
    "",
    `Nombre: ${customer.name}`,
    `Entrega: ${customer.mode === "recoger" ? "Recoger en sucursal" : "Domicilio"}`,
  ];
  if (customer.mode === "domicilio" && customer.address) {
    lines.push(`Dirección: ${customer.address}`);
  }
  if (customer.salsa) lines.push(`Salsa: ${customer.salsa}`);
  if (customer.notes) lines.push(`Notas: ${customer.notes}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${business.whatsapp}?text=${text}`;
}

/** Enlace directo simple (botón flotante / contacto). */
export const whatsappContactUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  "¡Hola Los Árabes! Quiero hacer un pedido 🍢",
)}`;
