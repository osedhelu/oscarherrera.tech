"use client";

import { CHAIN_ID_FST_TESTNET } from "@/config/chains";
import { Env } from "@/config/env";
import { FSTD_ABI, FSTD_ADDRESS } from "@/contracts/fstBankCenter";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import React, { useState } from "react";
import { FSTDBalance } from "../Marketplace/FSTDBalance";

const DECIMALS = 18;

export function ButtonPayment() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isFstTestnet = chainId === CHAIN_ID_FST_TESTNET;
  const merchant = Env.MERCHANT_WALLET;

  const switchToFstTestnet = async () => {
    if (!walletProvider) return;
    const provider = new ethers.providers.Web3Provider(
      walletProvider as ethers.providers.ExternalProvider
    );
    const hexChainId = "0x" + CHAIN_ID_FST_TESTNET.toString(16);
    try {
      await provider.provider?.request?.({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: hexChainId }],
      });
    } catch (e: any) {
      if (e?.code === 4902) {
        await provider.provider?.request?.({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: hexChainId,
              chainName: "FST Smart Chain Testnet",
              nativeCurrency: { name: "FST", symbol: "FST", decimals: 18 },
              rpcUrls: [Env.FST_TESTNET_RPC],
              blockExplorerUrls: [
                "https://backend-testnet.up.railway.app",
              ],
            },
          ],
        });
      } else throw e;
    }
  };

  const payWithFSTD = async (amountFSTD: string) => {
    if (!isConnected || !walletProvider || !merchant) {
      setError("Conecta tu wallet y configura MERCHANT_WALLET.");
      return;
    }
    if (!isFstTestnet) {
      await switchToFstTestnet();
      return;
    }
    setError(null);
    setTxHash(null);
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(
        walletProvider as ethers.providers.ExternalProvider
      );
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(FSTD_ADDRESS, FSTD_ABI, signer);

      // Verificar balance antes de intentar estimar gas / enviar
      const fromAddress = await signer.getAddress();
      const balance: ethers.BigNumber = await contract.balanceOf(fromAddress);
      const amountWei = ethers.utils.parseUnits(amountFSTD, DECIMALS);

      if (balance.lt(amountWei)) {
        setError(
          `No tienes suficiente balance FSTD para enviar ${amountFSTD}.`
        );
        return;
      }

      const tx = await contract.transfer(merchant, amountWei);
      setTxHash(tx.hash);
      await tx.wait();
    } catch (e: any) {
      // Errores típicos: UNPREDICTABLE_GAS_LIMIT / Execution reverted
      const message: string =
        e?.reason ||
        e?.error?.message ||
        e?.message ||
        "Error al enviar FSTD";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Conecta tu wallet para ver tu balance FSTD y pagar en el marketplace.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Balance FSTD:
        </span>
        <FSTDBalance />
        {!isFstTestnet && (
          <button
            type="button"
            onClick={switchToFstTestnet}
            className="rounded bg-indigo-600 px-3 py-1 text-sm text-white hover:bg-indigo-700"
          >
            Cambiar a FST Testnet
          </button>
        )}
      </div>
      {merchant && isFstTestnet && (
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => payWithFSTD("1")}
            disabled={loading}
            className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Enviando…" : "Pagar 1 FSTD (demo)"}
          </button>
          {txHash && (
            <p className="text-xs text-green-600 dark:text-green-400">
              Tx: {txHash.slice(0, 10)}…
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
      )}
      {!merchant && (
        <p className="text-xs text-amber-600 dark:text-amber-400">
          Configura NEXT_PUBLIC_MERCHANT_WALLET para habilitar pagos con FSTD.
        </p>
      )}
    </div>
  );
}
