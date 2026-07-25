"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartIcon() {
  const { cantidadTotal } = useCart();

  return (
    <Link
      href="/carrito"
      aria-label={`Carrito, ${cantidadTotal} ${cantidadTotal === 1 ? "producto" : "productos"}`}
      className="relative flex h-9 w-9 items-center justify-center text-ink hover:text-terracotta"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth={1.5}>
        <path
          d="M3 4h2l1.6 10.6A2 2 0 0 0 8.57 16.4h8.86a2 2 0 0 0 1.97-1.7L20.5 8H6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="17" cy="20" r="1.4" />
      </svg>
      {cantidadTotal > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-bold text-cream">
          {cantidadTotal}
        </span>
      )}
    </Link>
  );
}
