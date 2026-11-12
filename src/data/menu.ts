export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  /** Etiqueta corta opcional (ej. "Para 2 personas") */
  badge?: string;
  image?: string;
  /** No se puede pedir (lista informativa) */
  infoOnly?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  items: MenuItem[];
};

/**
 * MENÚ — Los Árabes
 * Los precios y platillos provienen de la carta oficial.
 * Para agregar o editar platillos, modifica/deriva entradas aquí.
 */
export const menu: MenuCategory[] = [
  {
    id: "beduinos",
    title: "Beduinos",
    subtitle: "Pan árabe relleno al momento, sellado a la plancha",
    items: [
      {
        id: "beduino-clasico",
        name: "Beduino Clásico",
        description:
          "Pan árabe, sirloin, cebolla, queso, jocoque y ensalada",
        price: 150,
        image: "/img/plato1.jpg",
        badge: "Orden",
      },
      {
        id: "beduino-clasico-media",
        name: "Beduino Clásico — 1/2 orden",
        description: "La mitad de porción, mismo sabor",
        price: 110,
        image: "/img/plato1.jpg",
        badge: "1/2 orden",
      },
      {
        id: "beduino-especial",
        name: "Beduino Especial",
        description:
          "Pan árabe, arrachera, cebolla, queso, jocoque y ensalada",
        price: 150,
        image: "/img/plato3.jpg",
        badge: "Orden",
      },
      {
        id: "beduino-especial-media",
        name: "Beduino Especial — 1/2 orden",
        description: "La mitad de porción, mismo sabor",
        price: 110,
        image: "/img/plato3.jpg",
        badge: "1/2 orden",
      },
    ],
  },
  {
    id: "brochetas",
    title: "Brochetas",
    subtitle: "Al carbón, individuales, con salsa de la casa",
    items: [
      {
        id: "brocheta-puerco",
        name: "Brocheta de Puerco",
        price: 100,
        image: "/img/plato5.jpg",
        badge: "Individual",
      },
      {
        id: "brocheta-camaron",
        name: "Brocheta de Camarón",
        price: 100,
        image: "/img/plato6.jpg",
        badge: "Individual",
      },
      {
        id: "brocheta-mar-tierra",
        name: "Brocheta Mar y Tierra",
        description: "Camarón y puerco en una sola brocheta",
        price: 100,
        image: "/img/plato5.jpg",
        badge: "Individual",
      },
    ],
  },
  {
    id: "infantiles",
    title: "Beduinos Infantiles",
    subtitle: "Pan árabe mini — para los peques de la casa",
    items: [
      {
        id: "beduinito-clasico",
        name: "Beduinito Clásico",
        description:
          "Pan árabe mini, sirloin, cebolla, queso, jocoque y ensalada",
        price: 70,
        image: "/img/plato1.jpg",
      },
      {
        id: "beduinito-especial",
        name: "Beduinito Especial",
        description:
          "Pan árabe mini, arrachera, cebolla, queso, jocoque y ensalada",
        price: 70,
        image: "/img/plato3.jpg",
      },
    ],
  },
  {
    id: "parrilla",
    title: "De la Parrilla",
    subtitle:
      "Con ensalada, tortillas, cebolla asada y salchicha asada",
    items: [
      {
        id: "orden-costilla",
        name: "Orden de Costilla",
        description:
          "250 g de costilla acompañada de ensalada, tortillas, cebolla asada y salchicha asada",
        price: 160,
        image: "/img/plato2.jpg",
      },
      {
        id: "orden-sirloin",
        name: "Orden de Sirloin",
        description:
          "250 g de sirloin acompañado de ensalada, tortillas, cebolla asada y salchicha asada",
        price: 230,
        image: "/img/plato4.jpg",
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    subtitle: "Para acompañar y compartir",
    items: [
      {
        id: "pan-ajo",
        name: "Orden de Pan con Ajo",
        description: "5 piezas",
        price: 50,
      },
      {
        id: "pan-arabe",
        name: "Orden de Pan Árabe",
        description: "4 mitades y jocoque",
        price: 25,
      },
      {
        id: "quesadillas-arabes",
        name: "Orden de Quesadillas Árabes",
        description: "2 mitades y jocoque",
        price: 35,
      },
    ],
  },
];

/** Paquetes para compartir — sección destacada */
export const paquetes: MenuItem[] = [
  {
    id: "paquete-cedro",
    name: "Paquete Cedro",
    description:
      "1/2 kilo de sirloin acompañado de ensalada, tortillas, cebolla asada y salchicha asada",
    price: 300,
    image: "/img/plato4.jpg",
    badge: "Para 2",
  },
  {
    id: "paquete-sultan",
    name: "Paquete Sultán",
    description:
      "750 g de sirloin premium y 250 g de costilla premium, acompañados de ensalada, tortillas, cebolla asada, salchichas asadas y quesadillas",
    price: 450,
    image: "/img/plato2.jpg",
    badge: "Familiar",
  },
];

/** Salsas de la casa — sin costo adicional, a elección */
export const salsas = [
  "BBQ",
  "Búfalo",
  "Salsa Macha",
  "Salsa Verde",
  "Pinchazo Árabe",
  "Lemon Pepper",
  "Crazy Parmesano",
];

export const allItems: MenuItem[] = [
  ...menu.flatMap((c) => c.items),
  ...paquetes,
];
