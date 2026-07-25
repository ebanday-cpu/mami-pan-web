"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import {
  COMUNAS_COBERTURA,
  ENVIO,
  formatearPrecio,
  getProductoPorSlug,
} from "@/lib/negocio";

export default function CheckoutPage() {
  const { items, subtotal, costoEnvio, total } = useCart();
  const [comuna, setComuna] = useState("");

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <h1 className="font-serif text-3xl italic text-ink sm:text-4xl">
          Tu carrito está vacío
        </h1>
        <p className="mt-4 text-muted-2">
          Agrega pan a tu carrito antes de ir a pagar.
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
    <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 sm:px-10 sm:py-24 md:grid-cols-2 md:items-start">
      <div>
        <h1 className="font-serif text-3xl italic text-ink sm:text-4xl">
          ¿A dónde te llevamos el pan?
        </h1>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="nombre"
              className="mb-1 block text-sm font-semibold text-ink"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full rounded-lg border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="mb-1 block text-sm font-semibold text-ink"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full rounded-lg border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label
              htmlFor="direccion"
              className="mb-1 block text-sm font-semibold text-ink"
            >
              Calle y número
            </label>
            <input
              id="direccion"
              name="direccion"
              type="text"
              required
              className="w-full rounded-lg border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label
              htmlFor="comuna"
              className="mb-1 block text-sm font-semibold text-ink"
            >
              Comuna
            </label>
            <select
              id="comuna"
              name="comuna"
              required
              value={comuna}
              onChange={(e) => setComuna(e.target.value)}
              className="w-full rounded-lg border border-tan bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-terracotta"
            >
              <option value="" disabled>
                Selecciona tu comuna
              </option>
              {COMUNAS_COBERTURA.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-muted">
              Solo despachamos en {ENVIO.region}, {ENVIO.dias.toLowerCase()},{" "}
              {ENVIO.ventana}.
            </p>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-line bg-cream-2 p-8">
        <h2 className="font-serif text-xl italic text-ink">Tu pedido</h2>
        <div className="mt-5 space-y-4">
          {items.map((item) => {
            const producto = getProductoPorSlug(item.slug);
            if (!producto) return null;
            return (
              <div key={item.slug} className="flex justify-between text-sm">
                <span className="text-muted-2">
                  {producto.nombre} ×{item.cantidad}
                </span>
                <span className="font-semibold text-ink">
                  {formatearPrecio(producto.precio * item.cantidad)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-5 space-y-1 border-t border-dashed border-tan pt-4 text-sm">
          <div className="flex justify-between text-muted-2">
            <span>Subtotal</span>
            <span>{formatearPrecio(subtotal)}</span>
          </div>
          <div className="flex justify-between text-muted-2">
            <span>Envío</span>
            <span className={costoEnvio === 0 ? "font-semibold text-sage" : ""}>
              {costoEnvio === 0 ? "Gratis" : formatearPrecio(costoEnvio)}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between border-t border-tan pt-4">
          <span className="text-base font-semibold text-ink">Total</span>
          <span className="font-serif text-2xl italic text-ink">
            {formatearPrecio(total)}
          </span>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-ink">Método de pago</h3>
          <div className="mt-3 flex items-center justify-between rounded-lg border border-tan bg-cream px-4 py-3 opacity-60">
            <span className="text-sm text-ink">Tarjeta de crédito o débito</span>
            <span className="text-xs font-semibold text-muted">Próximamente</span>
          </div>

          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-full bg-tan px-6 py-3 text-center text-sm font-semibold text-muted-2"
          >
            Pago en línea próximamente
          </button>
          <p className="mt-2 text-xs text-muted">
            Estamos configurando nuestra pasarela de pago. Muy pronto vas a
            poder completar tu pedido y pagarlo aquí mismo.
          </p>
        </div>
      </div>
    </div>
  );
}
