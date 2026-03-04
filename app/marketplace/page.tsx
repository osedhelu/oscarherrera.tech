import AllNFTs from "@/components/Marketplace/AllNFTs";

export default function page() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-6">
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Marketplace conectado a <strong>FST Smart Chain Testnet</strong> (chainId 8932). 
          Conecta tu wallet para ver tu balance de FSTD y pagar con el token.
        </p>
        <AllNFTs />
      </section>
    </>
  );
}
