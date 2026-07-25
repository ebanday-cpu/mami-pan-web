"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { ENVIO, formatearPrecio, getProductoPorSlug } from "@/lib/negocio";

export default function CarritoPage() {
  const { items, actualizarCantidad, quitar, subtotal, costoEnvio, total } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <h1 className="font-serif text-3xl italic text-ink sm:text-4xl">
          Tu carrito está vacío
        </h1>
        <p className="mt-4 text-muted-2">
          Todavía no has agregado pan a tu carrito.
        </p>
        <Link
          href="/catalogo"
          className="mt-8 inline-block rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Ver nuestro pan
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="font-serif text-4xl italic text-ink sm:text-5xl">
        Tu carrito
      </h1>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => {
          const producto = getProductoPorSlug(item.slug);
          if (!producto) return null;
          return (
            <div key={item.slug} className="flex items-center gap-4 py-6">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="font-serif text-lg italic text-ink">
                  {producto.nombre}
                </p>
                <p className="text-sm text-muted-2">
                  {formatearPrecio(producto.precio)} c/u
                </p>
              </div>

              <div className="flex items-center rounded-full border border-tan">
                <button
                  type="button"
                  aria-label={`Restar cantidad de ${producto.nombre}`}
                  onClick={() =>
                    actualizarCantidad(item.slug, item.cantidad - 1)
                  }
                  className="flex h-9 w-9 items-center justify-center text-ink hover:text-terracotta"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-semibold text-ink">
                  {item.cantidad}
                </span>
                <button
                  type="button"
                  aria-label={`Sumar cantidad de ${producto.nombre}`}
                  onClick={() =>
                    actualizarCantidad(item.slug, item.cantidad + 1)
                  }
                  className="flex h-9 w-9 items-center justify-center text-ink hover:text-terracotta"
                >
                  +
                </button>
              </div>

              <p className="w-24 text-right text-sm font-semibold text-ink">
                {formatearPrecio(producto.precio * item.cantidad)}
              </p>

              <button
                type="button"
                aria-label={`Quitar ${producto.nombre} del carrito`}
                onClick={() => quitar(item.slug)}
                className="text-muted hover:text-terracotta"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      <div className="ml-auto mt-8 max-w-sm space-y-2">
        <div className="flex justify-between text-sm text-muted-2">
          <span>Subtotal</span>
          <span>{formatearPrecio(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm text-muted-2">
          <span>Envío</span>
          <span className={costoEnvio === 0 ? "font-semibold text-sage" : ""}>
            {costoEnvio === 0 ? "Gratis" : formatearPrecio(costoEnvio)}
          </span>
        </div>
        {costoEnvio > 0 && (
          <p className="text-xs text-muted">
            Envío gratis desde {ENVIO.gratisDesdeUnidades} panes.
          </p>
        )}
        <div className="flex justify-between border-t border-line pt-2 text-base font-semibold text-ink">
          <span>Total</span>
          <span className="font-serif text-xl italic">
            {formatearPrecio(total)}
          </span>
        </div>

        <Link
          href="/checkout"
          className="mt-4 block w-full rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          Ir a pagar
        </Link>
      </div>
    </div>
  );
}
