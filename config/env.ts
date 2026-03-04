export const Env = {
  URL_BACKEND: process.env.NEXT_PUBLIC_ANALYTICS_ID || "",
  // ID de proyecto de WalletConnect / Web3Modal
  WEB3_API_ID:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
    process.env.NEXT_PUBLIC_PRIVATE_WEB3 ||
    "",
  SMART_CONTRACT: process.env.NEXT_PUBLIC_SMART_CONTRACT || "",
  // FST Smart Chain Testnet (chainId 8932)
  FST_TESTNET_RPC:
    process.env.NEXT_PUBLIC_FST_TESTNET_RPC ||
    "https://node-1-testnet.up.railway.app",
  // Contrato FSTD (FSTBankCenter) desplegado en testnet
  FSTD_CONTRACT_ADDRESS:
    process.env.NEXT_PUBLIC_FSTD_CONTRACT_ADDRESS ||
    "0x5b258595578e3890f6f9f50a65342d64a67b8cac",
  // Dirección que recibe los pagos en FSTD (merchant)
  MERCHANT_WALLET: process.env.NEXT_PUBLIC_MERCHANT_WALLET || "",
  // Contrato NFT certificado de compra (ProductCertificateNFT)
  PRODUCT_CERTIFICATE_NFT_ADDRESS:
    process.env.NEXT_PUBLIC_PRODUCT_CERTIFICATE_NFT_ADDRESS || "",
};
