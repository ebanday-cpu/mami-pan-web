"use client";

import { useState } from "react";
import { formatearPrecio, whatsappUrlCompra, type Producto } from "@/lib/negocio";

export default function ComprarPorWhatsapp({ producto }: { producto: Producto }) {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-tan">
          <button
            type="button"
            aria-label="Restar cantidad"
            onClick={() => setCantidad((c) => Math.max(1, c - 1))}
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
            onClick={() => setCantidad((c) => Math.min(20, c + 1))}
            className="flex h-10 w-10 items-center justify-center text-lg text-ink hover:text-terracotta"
          >
            +
          </button>
        </div>
        <span className="text-sm text-muted-2">
          Subtotal: {formatearPrecio(producto.precio * cantidad)}
        </span>
      </div>

      <a
        href={whatsappUrlCompra(producto, cantidad)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-center text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
