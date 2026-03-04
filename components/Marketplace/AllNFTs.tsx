"use client";

import Image from "next/image";
import Link from "next/link";

import { $Login } from "@/STORE/Login";
import { PRODUCTS } from "@/data/products";
import { useStore } from "@nanostores/react";

import { ButtonPayment } from "../Web3/ButtonPayment";

export default function AllNFTs() {
  const user = useStore($Login);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Balance y pagos con FSTD
        </h2>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
          Conecta tu wallet para ver tu balance FSTD y probar el flujo de pago
          en el marketplace. Los productos de abajo se pagan en FSTD y al
          comprar se emite un certificado NFT.
        </p>
        <ButtonPayment />
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          NFTs a la venta
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative h-40 w-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    {product.category && (
                      <p className="text-xs text-indigo-500 dark:text-indigo-400">
                        {product.category}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {product.priceFSTD} FSTD
                  </p>
                </div>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Certificado NFT emitido al completar el pago.
                  </span>
                  <Link
                    href="/marketplace/create"
                    className="inline-flex items-center rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700"
                  >
                    Comprar NFT
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

