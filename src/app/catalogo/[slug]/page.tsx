import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  BENEFICIOS,
  ENVIO,
  PRODUCTOS,
  TEXTO_GLUTEN,
  NO_APTO_CELIACOS,
  formatearPrecio,
  getProductoPorSlug,
} from "@/lib/negocio";
import AgregarAlCarrito from "@/components/AgregarAlCarrito";

export function generateStaticParams() {
  return PRODUCTOS.map((producto) => ({ slug: producto.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const producto = getProductoPorSlug(slug);
  if (!producto) return {};
  return {
    title: producto.nombre,
    description: producto.descripcion,
    openGraph: {
      title: producto.nombre,
      description: producto.descripcion,
      images: [{ url: producto.imagen, width: 1200, height: 1200 }],
    },
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const producto = getProductoPorSlug(slug);
  if (!producto) notFound();

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-2 md:items-start">
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="font-serif text-4xl italic text-ink">
          {producto.nombre}
        </h1>
        <p className="mt-3 text-2xl font-semibold text-terracotta">
          {formatearPrecio(producto.precio)}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-2">
          {producto.descripcion}
        </p>

        <ul className="mt-8 space-y-2 text-sm text-muted-2">
          {BENEFICIOS.map((beneficio) => (
            <li key={beneficio} className="flex gap-2">
              <span className="text-sage">•</span>
              {beneficio}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted">
          {TEXTO_GLUTEN} {NO_APTO_CELIACOS}
        </p>

        <div className="mt-8 border-t border-line pt-8">
          <AgregarAlCarrito producto={producto} />
        </div>

        <p className="mt-6 text-xs text-muted">
          Envío gratis desde {ENVIO.gratisDesdeUnidades} panes · Despacho en{" "}
          {ENVIO.region}, {ENVIO.dias.toLowerCase()}, {ENVIO.ventana}.
        </p>
      </div>
    </div>
  );
}
