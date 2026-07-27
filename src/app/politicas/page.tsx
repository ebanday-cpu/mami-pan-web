import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const TITULO = "Políticas";
const DESCRIPCION =
  "Términos y condiciones, política de privacidad, envíos y cambios/devoluciones de Mami Pan.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: `${SITE_URL}/politicas` },
};

const POLITICAS = [
  {
    href: "/politicas/terminos-y-condiciones",
    titulo: "Términos y condiciones",
    resumen: "Quiénes somos, cómo funciona la compra y qué reglas aplican al usar el sitio.",
  },
  {
    href: "/politicas/privacidad",
    titulo: "Política de privacidad",
    resumen: "Qué datos recopilamos, para qué los usamos y cómo ejercer tus derechos.",
  },
  {
    href: "/politicas/envios",
    titulo: "Política de envíos",
    resumen: "Cobertura, costo, comunas y ventana horaria de despacho.",
  },
  {
    href: "/politicas/cambios-y-devoluciones",
    titulo: "Cambios y devoluciones",
    resumen: "Qué hacer si tu pedido llega dañado, incompleto o distinto a lo pedido.",
  },
];

export default function PoliticasPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        {TITULO}
      </h1>
      <p className="mt-4 text-base text-muted-2">{DESCRIPCION}</p>

      <ul className="mt-12 space-y-8">
        {POLITICAS.map((politica) => (
          <li key={politica.href}>
            <Link
              href={politica.href}
              className="font-serif text-xl italic text-ink hover:text-terracotta"
            >
              {politica.titulo}
            </Link>
            <p className="mt-2 text-base leading-relaxed text-muted-2">
              {politica.resumen}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
