export const Env = {
  URL_BACKEND: process.env.NEXT_PUBLIC_ANALYTICS_ID || "",
  // ID de proyecto de WalletConnect / Web3Modal
  WEB3_API_ID:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
    process.env.NEXT_PUBLIC_PRIVATE_WEB3 ||
    "",
  SMART_CONTRACT: process.env.NEXT_PUBLIC_SMART_CONTRACT || "",
};
