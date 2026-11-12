/**
 * CONFIGURACIÓN DEL NEGOCIO — Los Árabes
 * Todo lo editable del negocio vive aquí. Cambiar el número de WhatsApp
 * aquí actualiza todos los botones y pedidos del sitio.
 */
export const business = {
  name: "Los Árabes",
  tagline: "Carne Asada · Beduinos · Brochetas",
  description:
    "Auténtica sazón árabe al carbón: beduinos rellenos al momento, brochetas jugosas y cortes a la parrilla. Tradición de Medio Oriente con el sabor de la parrilla mexicana.",

  /**
   * ⚠️ NÚMERO DE WHATSAPP — reemplazar por el número real del negocio.
   * Formato internacional sin "+", espacios ni guiones.
   * Ejemplo México: 52 + lada + 10 dígitos → "5213323456789"
   */
  whatsapp: "5210000000000",

  address: "Av. Ejemplo 123, Col. Centro, Guadalajara, Jal.",
  mapsUrl: "https://maps.google.com/?q=Los+Arabes",
  hours: [
    { days: "Martes a Domingo", time: "1:00 pm – 10:00 pm" },
    { days: "Lunes", time: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com/losarabes",
    facebook: "https://facebook.com/losarabes",
  },
} as const;

export const currency = (n: number) => `$${n.toFixed(0)} MXN`;
