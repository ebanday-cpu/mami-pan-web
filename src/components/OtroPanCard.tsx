"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatearPrecio, type Producto } from "@/lib/negocio";
import { useCart } from "@/components/CartProvider";

export default function OtroPanCard({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const { agregar } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-cream p-4">
      <Link
        href={`/catalogo/${producto.slug}`}
        className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-xl"
      >
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <Link href={`/catalogo/${producto.slug}`}>
          <h3 className="font-serif text-lg italic text-ink hover:text-terracotta">
            {producto.nombre}
          </h3>
        </Link>
        <p className="text-sm font-semibold text-terracotta">
          {formatearPrecio(producto.precio)}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-full border border-tan">
            <button
              type="button"
              aria-label="Restar cantidad"
              onClick={() => {
                setCantidad((c) => Math.max(1, c - 1));
                setAgregado(false);
              }}
              className="flex h-8 w-8 items-center justify-center text-base text-ink hover:text-terracotta"
            >
              −
            </button>
            <span className="w-5 text-center text-sm font-semibold text-ink">
              {cantidad}
            </span>
            <button
              type="button"
              aria-label="Sumar cantidad"
              onClick={() => {
                setCantidad((c) => Math.min(20, c + 1));
                setAgregado(false);
              }}
              className="flex h-8 w-8 items-center justify-center text-base text-ink hover:text-terracotta"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              agregar(producto.slug, cantidad);
              setAgregado(true);
            }}
            className="rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            Agregar al carrito
          </button>
        </div>

        {agregado && (
          <p className="mt-2 text-sm text-sage">
            Agregado · {cantidad} {cantidad === 1 ? "unidad" : "unidades"} ·{" "}
            <Link href="/carrito" className="font-semibold underline">
              ver carrito
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
