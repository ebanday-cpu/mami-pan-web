// Fuente única de datos reales del negocio dentro del código.
// Todo lo de aquí sale de docs/00-datos-negocio-actual.md — si ese
// documento cambia, actualiza también estas constantes.

export type Producto = {
  slug: string;
  nombre: string;
  precio: number;
  imagen: string;
  resumen: string;
  descripcion: string;
};

export const PRODUCTOS: Producto[] = [
  {
    slug: "pan-blanco",
    nombre: "Pan Blanco",
    precio: 3200,
    imagen: "/productos/pan-blanco.jpg",
    resumen: "Miga suave, corteza crocante, fermentación lenta.",
    descripcion:
      "Nuestro clásico: masa madre 100% natural, fermentada lentamente para lograr una miga suave y una corteza dorada y crocante. Sin levadura comercial, sin atajos.",
  },
  {
    slug: "pan-integral",
    nombre: "Pan Integral",
    precio: 3200,
    imagen: "/productos/pan-integral.jpg",
    resumen: "Harina integral, sabor profundo, textura rústica.",
    descripcion:
      "Hecho con harina integral y la misma fermentación lenta de masa madre. Sabor más profundo y rústico, ideal para quienes buscan un pan con más cuerpo.",
  },
  {
    slug: "pan-con-semillas",
    nombre: "Pan con Semillas",
    precio: 3400,
    imagen: "/productos/pan-semillas.jpg",
    resumen: "Mezcla de semillas, crocante en cada corte.",
    descripcion:
      "Nuestra masa madre con una mezcla de semillas por dentro y por fuera. Textura crocante y un extra de sabor en cada rebanada.",
  },
];

export function getProductoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}

export const BENEFICIOS = [
  "Ideal para personas con problemas digestivos.",
  "Apto para personas con diabetes (consulta igual con tu médico; esto no es consejo médico).",
  "Ayuda a aliviar la hinchazón y la acidez.",
] as const;

export const TEXTO_GLUTEN =
  "Sí, este pan contiene gluten. Posee un nivel reducido, pero sí tiene.";

export const NO_APTO_CELIACOS = "No es apto para personas celíacas.";

export const ENVIO = {
  costoBase: 1500,
  gratisDesdeUnidades: 4,
  ventana: "16:00 a 22:00 hrs",
  dias: "Lunes a viernes",
  region: "Región Metropolitana",
} as const;

// Única fuente de comunas con cobertura — mismo listado que usa el bot
// (mami-pan-bot/docs/12-comunas-cobertura.md). No se debe mantener una
// segunda lista en ningún otro lugar de este proyecto.
export const COMUNAS_COBERTURA = [
  "Cerrillos",
  "Cerro Navia",
  "Colina",
  "Conchalí",
  "El Bosque",
  "Estación Central",
  "Huechuraba",
  "Independencia",
  "La Cisterna",
  "La Florida",
  "La Granja",
  "La Pintana",
  "La Reina",
  "Las Condes",
  "Lo Barnechea",
  "Lo Espejo",
  "Lo Prado",
  "Macul",
  "Maipú",
  "Ñuñoa",
  "Padre Hurtado",
  "Pedro Aguirre Cerda",
  "Peñalolén",
  "Providencia",
  "Pudahuel",
  "Puente Alto",
  "Quilicura",
  "Quinta Normal",
  "Recoleta",
  "Renca",
  "San Bernardo",
  "San Joaquín",
  "San Miguel",
  "San Ramón",
  "Santiago (Centro)",
  "Vitacura",
] as const;

export const MARCA = {
  nombre: "Mami Pan",
  instagramUrl: "https://www.instagram.com/mamipan_cl",
  instagramHandle: "@mamipan_cl",
} as const;

export function formatearPrecio(valor: number): string {
  return valor.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  });
}
