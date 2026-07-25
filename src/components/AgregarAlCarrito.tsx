"use client";

import { useState } from "react";
import Link from "next/link";
import { formatearPrecio, type Producto } from "@/lib/negocio";
import { useCart } from "@/components/CartProvider";

export default function AgregarAlCarrito({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);
  const { agregar } = useCart();

  const handleAgregar = () => {
    agregar(producto.slug, cantidad);
    setAgregado(true);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-tan">
          <button
            type="button"
            aria-label="Restar cantidad"
            onClick={() => {
              setCantidad((c) => Math.max(1, c - 1));
              setAgregado(false);
            }}
            className="flex h-10 w-10 items-center justify-center text-lg text-ink hover:text-terracotta"
          >
            −
          </button>
          <span className="w-6 text-center text-sm font-semibold text-ink">
            {cantidad}
          </span>
          <button
            type="button"
            aria-label="Sumar cantidad"
            onClick={() => {
              setCantidad((c) => Math.min(20, c + 1));
              setAgregado(false);
            }}
            className="flex h-10 w-10 items-center justify-center text-lg text-ink hover:text-terracotta"
          >
            +
          </button>
        </div>
        <span className="text-sm text-muted-2">
          Subtotal: {formatearPrecio(producto.precio * cantidad)}
        </span>
      </div>

      <button
        type="button"
        onClick={handleAgregar}
        className="mt-4 w-full rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
      >
        Agregar al carrito
      </button>

      {agregado && (
        <p className="mt-3 text-center text-sm text-sage">
          Agregado al carrito ·{" "}
          <Link href="/carrito" className="font-semibold underline">
            ver carrito
          </Link>
        </p>
      )}
    </div>
  );
}
