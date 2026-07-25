import Image from "next/image";
import Link from "next/link";
import { formatearPrecio, type Producto } from "@/lib/negocio";

export default function ProductCard({ producto }: { producto: Producto }) {
  return (
    <Link
      href={`/catalogo/${producto.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-shadow hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-6">
        <h3 className="font-serif text-xl italic text-ink">
          {producto.nombre}
        </h3>
        <p className="flex-1 text-sm text-muted-2">{producto.resumen}</p>
        <p className="mt-3 text-lg font-semibold text-terracotta">
          {formatearPrecio(producto.precio)}
        </p>
      </div>
    </Link>
  );
}
