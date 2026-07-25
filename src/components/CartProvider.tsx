"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ENVIO, getProductoPorSlug } from "@/lib/negocio";

type ItemCarrito = { slug: string; cantidad: number };

type Carrito = {
  items: ItemCarrito[];
  agregar: (slug: string, cantidad?: number) => void;
  quitar: (slug: string) => void;
  actualizarCantidad: (slug: string, cantidad: number) => void;
  vaciar: () => void;
  cantidadTotal: number;
  subtotal: number;
  costoEnvio: number;
  total: number;
};

const CartContext = createContext<Carrito | null>(null);

const STORAGE_KEY = "mami-pan-carrito";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    // Lectura única de localStorage al montar — debe ir en un efecto (no en
    // el initializer de useState) para que el primer render coincida con
    // el del servidor y evite un mismatch de hidratación.
    try {
      const guardado = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (guardado) setItems(JSON.parse(guardado));
    } catch {
      // localStorage no disponible o corrupto: seguimos con carrito vacío.
    }
    setCargado(true);
  }, []);

  useEffect(() => {
    if (!cargado) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, cargado]);

  const agregar = (slug: string, cantidad = 1) => {
    setItems((prev) => {
      const existente = prev.find((i) => i.slug === slug);
      if (existente) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, cantidad: i.cantidad + cantidad } : i,
        );
      }
      return [...prev, { slug, cantidad }];
    });
  };

  const quitar = (slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const actualizarCantidad = (slug: string, cantidad: number) => {
    if (cantidad < 1) return quitar(slug);
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, cantidad } : i)),
    );
  };

  const vaciar = () => setItems([]);

  const { cantidadTotal, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const producto = getProductoPorSlug(item.slug);
        if (!producto) return acc;
        return {
          cantidadTotal: acc.cantidadTotal + item.cantidad,
          subtotal: acc.subtotal + producto.precio * item.cantidad,
        };
      },
      { cantidadTotal: 0, subtotal: 0 },
    );
  }, [items]);

  const costoEnvio =
    cantidadTotal === 0 || cantidadTotal >= ENVIO.gratisDesdeUnidades
      ? 0
      : ENVIO.costoBase;
  const total = subtotal + costoEnvio;

  return (
    <CartContext.Provider
      value={{
        items,
        agregar,
        quitar,
        actualizarCantidad,
        vaciar,
        cantidadTotal,
        subtotal,
        costoEnvio,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): Carrito {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
