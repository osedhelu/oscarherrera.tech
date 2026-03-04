"use client";

import React, { useState } from "react";

import MarketplaceNavbar from "@/components/Marketplace/Navbar";
import { ButtonPayment } from "@/components/Web3/ButtonPayment";
import { CHAIN_ID_FST_TESTNET } from "@/config/chains";
import {
  PRODUCT_CERTIFICATE_NFT_ABI,
  PRODUCT_CERTIFICATE_NFT_ADDRESS,
} from "@/contracts/productCertificateNFT";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";

type NFTCategory =
  | "art"
  | "music"
  | "gaming"
  | "collectible"
  | "utility"
  | "other";

interface CreateNFTForm {
  name: string;
  description: string;
  priceFSTD: string;
  category: NFTCategory;
  royalties: string;
}

export default function CreateNFTPage() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [form, setForm] = useState<CreateNFTForm>({
    name: "",
    description: "",
    priceFSTD: "",
    category: "art",
    royalties: "5",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isFstTestnet = chainId === CHAIN_ID_FST_TESTNET;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImagePreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        setImagePreview(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isConnected || !walletProvider || !address) {
      setError("Conecta tu wallet para crear el NFT.");
      return;
    }

    if (!PRODUCT_CERTIFICATE_NFT_ADDRESS) {
      setError("Contrato NFT no configurado (PRODUCT_CERTIFICATE_NFT_ADDRESS).");
      return;
    }

    if (!isFstTestnet) {
      try {
        const web3Provider = new ethers.providers.Web3Provider(
          walletProvider as ethers.providers.ExternalProvider
        );
        const hexChainId = "0x" + CHAIN_ID_FST_TESTNET.toString(16);
        await web3Provider.provider?.request?.({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: hexChainId }],
        });
      } catch (e: any) {
        setError(
          e?.message || "No se pudo cambiar a FST Smart Chain Testnet."
        );
        return;
      }
    }

    setIsSubmitting(true);
    setError(null);
    setTxHash(null);

    try {
      const web3Provider = new ethers.providers.Web3Provider(
        walletProvider as ethers.providers.ExternalProvider
      );
      const signer = await web3Provider.getSigner();

      const contract = new ethers.Contract(
        PRODUCT_CERTIFICATE_NFT_ADDRESS,
        PRODUCT_CERTIFICATE_NFT_ABI,
        signer
      );

      // Para este flujo de demo usamos el nombre como productId "libre".
      // IMPORTANTE: para integrarlo con el catálogo real, debería usarse un id de producto válido.
      const productId = form.name.trim() || "custom-product";
      const sixMonthsInSeconds = 60 * 60 * 24 * 30 * 6;
      const expiresAt = Math.floor(Date.now() / 1000) + sixMonthsInSeconds;

      const tx = await contract.mint(address, productId, expiresAt);
      setTxHash(tx.hash);
      await tx.wait();

      setLastSavedAt(new Date());
      // eslint-disable-next-line no-console
      console.log("[CreateNFT] NFT minteado con éxito", {
        to: address,
        productId,
        expiresAt,
        txHash: tx.hash,
      });
    } catch (e: any) {
      const message: string =
        e?.reason ||
        e?.error?.message ||
        e?.message ||
        "Error al mintear el NFT";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-8 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row">
          {/* Columna izquierda: vista previa del NFT */}
          <section className="w-full md:w-2/5">
            <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Vista previa del NFT
            </h1>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="relative h-64 w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                {imagePreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imagePreview}
                    alt="Vista previa del NFT"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
                    <span className="text-sm font-medium text-white/80">
                      Aún no has subido una imagen
                    </span>
                    <span className="text-xs text-white/70">
                      La vista previa aparecerá aquí
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3 p-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    Nombre
                  </p>
                  <p className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                    {form.name || "NFT sin título"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    Descripción
                  </p>
                  <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
                    {form.description ||
                      "Agrega una descripción para que los coleccionistas entiendan el valor de tu NFT."}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      Precio
                    </p>
                    <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {form.priceFSTD ? `${form.priceFSTD} FSTD` : "0 FSTD"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      Categoría
                    </p>
                    <p className="text-sm font-medium capitalize text-gray-800 dark:text-gray-200">
                      {form.category === "art"
                        ? "Arte"
                        : form.category === "music"
                          ? "Música"
                          : form.category === "gaming"
                            ? "Gaming"
                            : form.category === "collectible"
                              ? "Coleccionable"
                              : form.category === "utility"
                                ? "Utilidad"
                                : "Otro"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">
                      Regalías
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {form.royalties || "0"}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                Pago de prueba en FSTD
              </h2>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                Antes de publicar tu NFT, puedes probar la integración de pagos
                en el marketplace usando FSTD.
              </p>
              <ButtonPayment />
            </div>
          </section>

          {/* Columna derecha: formulario de creación */}
          <section className="w-full md:w-3/5">
            <header className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crear un nuevo NFT
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Completa los datos básicos de tu NFT. Más adelante podrás
                conectar esta pantalla con tu contrato inteligente en la FST
                Smart Chain.
              </p>
            </header>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Nombre del NFT
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ej. FST Genesis #001"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="description"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe la historia, utilidad o rareza de tu NFT."
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="priceFSTD"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Precio en FSTD
                  </label>
                  <div className="relative mt-1">
                    <input
                      id="priceFSTD"
                      name="priceFSTD"
                      type="number"
                      min="0"
                      step="0.0001"
                      value={form.priceFSTD}
                      onChange={handleChange}
                      placeholder="Ej. 10"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 pr-14 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                      FSTD
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="art">Arte</option>
                    <option value="music">Música</option>
                    <option value="gaming">Gaming</option>
                    <option value="collectible">Coleccionable</option>
                    <option value="utility">Utilidad</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="royalties"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Regalías para el creador (%)
                  </label>
                  <input
                    id="royalties"
                    name="royalties"
                    type="number"
                    min="0"
                    max="50"
                    step="0.5"
                    value={form.royalties}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="image"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Imagen del NFT
                  </label>
                  <div className="flex flex-col items-start gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    <input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-sm text-gray-900 file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700 dark:text-gray-100"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Formatos soportados: PNG, JPG, GIF, WEBP. Tamaño máximo
                      recomendado: 10MB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-gray-200 pt-4 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Al crear este NFT se llamará al contrato
                    ProductCertificateNFT en la FST Smart Chain Testnet.
                  </p>
                  {lastSavedAt && (
                    <p className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                      NFT creado (on-chain) a las{" "}
                      {lastSavedAt.toLocaleTimeString()}
                    </p>
                  )}
                  {txHash && (
                    <p className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                      Tx: {txHash.slice(0, 10)}…
                    </p>
                  )}
                  {error && (
                    <p className="text-xs font-medium text-red-500 dark:text-red-400">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Creando NFT…" : "Crear NFT on-chain"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

