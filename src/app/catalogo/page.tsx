import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { ENVIO, PRODUCTOS, TEXTO_GLUTEN } from "@/lib/negocio";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nuestro pan",
  description:
    "Pan blanco, integral y con semillas, de masa madre, hecho con fermentación lenta.",
  alternates: { canonical: `${SITE_URL}/catalogo` },
};

export default function CatalogoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
          Nuestro pan
        </h1>
        <p className="mt-4 text-base text-muted-2">
          Tres panes de masa madre, todos hechos con la misma fermentación
          lenta de casi 48 horas. Envío gratis desde{" "}
          {ENVIO.gratisDesdeUnidades} panes, solo en {ENVIO.region}.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {PRODUCTOS.map((producto) => (
          <ProductCard key={producto.slug} producto={producto} />
        ))}
      </div>

      <p className="mt-12 max-w-2xl text-sm text-muted">
        {TEXTO_GLUTEN} No es apto para personas celíacas.
      </p>
    </div>
  );
}
