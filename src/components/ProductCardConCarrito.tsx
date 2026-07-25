"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatearPrecio, type Producto } from "@/lib/negocio";
import { useCart } from "@/components/CartProvider";

export default function ProductCardConCarrito({
  producto,
}: {
  producto: Producto;
}) {
  const [agregado, setAgregado] = useState(false);
  const { agregar } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-shadow hover:shadow-xl hover:shadow-black/5">
      <Link
        href={`/catalogo/${producto.slug}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-6">
        <Link href={`/catalogo/${producto.slug}`}>
          <h3 className="font-serif text-xl italic text-ink hover:text-terracotta">
            {producto.nombre}
          </h3>
        </Link>
        <p className="flex-1 text-sm text-muted-2">{producto.resumen}</p>
        <p className="mt-3 text-lg font-semibold text-terracotta">
          {formatearPrecio(producto.precio)}
        </p>

        <button
          type="button"
          onClick={() => {
            agregar(producto.slug, 1);
            setAgregado(true);
          }}
          className="mt-4 w-full rounded-full bg-terracotta px-6 py-2.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Agregar al carrito
        </button>

        {agregado && (
          <p className="mt-2 text-center text-sm text-sage">
            Agregado ·{" "}
            <Link href="/carrito" className="font-semibold underline">
              ver carrito
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
