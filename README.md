# Los Árabes — Sitio web con pedidos por WhatsApp

Web profesional para el negocio de comida árabe **Los Árabes** (carne asada, beduinos y brochetas). Todo en un solo deploy Next.js: frontend + servidor juntos.

## ✨ Qué incluye

- **Landing informativa** con la identidad de la marca (logo, colores y carta reales).
- **Menú interactivo** por categorías: Beduinos, Brochetas, Infantiles, Parrilla, Extras y Paquetes — con los precios de la carta oficial.
- **Armar pedido con carrito**: el cliente agrega platillos, elige salsa, datos de entrega y **envía el pedido directo por WhatsApp** con el mensaje ya formateado (platillos, cantidades, total, dirección y notas).
- **Carrito persistente** (localStorage): si el cliente recarga la página no pierde su pedido.
- **Diseño responsive**: se ve perfecto en celular, tablet y escritorio.
- **Carta física** visible como imagen + sección de historia, galería, horarios y ubicación.

## 🚀 Cómo correr

```bash
npm install
npm run dev        # desarrollo → http://localhost:3000
npm run build      # build de producción
npm run start      # servir producción → http://localhost:3000
```

## ⚠️ Configurar antes de publicar (1 minuto)

Todo lo editable del negocio está en **`src/data/business.ts`**:

| Campo | Qué es |
|---|---|
| `whatsapp` | **Reemplazar** `5210000000000` por el número real (formato internacional sin espacios, ej. `5213323456789`) |
| `address` / `mapsUrl` | Dirección y enlace de Google Maps |
| `hours` | Horarios |
| `social` | Instagram / Facebook |

El menú y precios se editan en **`src/data/menu.ts`** (agregar/quitar platillos, cambiar precios o fotos).

## ☁️ Deploy en un solo paso

El proyecto está listo para deploy en cualquier plataforma que soporte Next.js (recomendado: **Vercel** — gratis):

```bash
npx vercel
```

O conectar el repositorio en [vercel.com/new](https://vercel.com/new). No requiere base de datos ni variables de entorno.

## 🧱 Estructura

```
src/
  data/business.ts   ← configuración del negocio (WhatsApp, dirección, horarios)
  data/menu.ts       ← menú, precios, paquetes y salsas
  lib/whatsapp.ts    ← generador del mensaje de pedido
  components/        ← secciones de la landing + carrito (drawer)
  app/               ← layout, página principal y estilos de marca
public/img/          ← fotos y logo
```

## 🔮 Siguiente fase (futuro)

Cuando el negocio crezca, este mismo proyecto puede evolucionar a: panel de administración para el dueño (editar menú sin tocar código), base de datos de pedidos, reportes de ventas y más sucursales — sin rehacer el sitio.
