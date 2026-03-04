"use client";

import { CHAIN_ID_FST_TESTNET } from "@/config/chains";
import { FSTD_ABI, FSTD_ADDRESS } from "@/contracts/fstBankCenter";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const DECIMALS = 18;

export function FSTDBalance() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [balance, setBalance] = useState<string | null>(null);
  const [symbol, setSymbol] = useState<string>("FSTD");
  const [loading, setLoading] = useState(false);
  const isCorrectChain = chainId === CHAIN_ID_FST_TESTNET;

  useEffect(() => {
    if (!isConnected || !address || !walletProvider || !isCorrectChain) {
      setBalance(null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    (async () => {
      try {
        const provider = new ethers.providers.Web3Provider(
          walletProvider as ethers.providers.ExternalProvider
        );
        const contract = new ethers.Contract(
          FSTD_ADDRESS,
          FSTD_ABI,
          provider
        );
        const [bal, sym] = await Promise.all([
          contract.balanceOf(address),
          contract.symbol().catch(() => "FSTD"),
        ]);
        if (!cancelled) {
          setBalance(ethers.utils.formatUnits(bal, DECIMALS));
          setSymbol(sym);
        }
      } catch {
        if (!cancelled) setBalance(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [address, isConnected, walletProvider, isCorrectChain]);

  if (!isConnected) return null;
  if (!isCorrectChain)
    return (
      <span className="text-sm text-amber-600 dark:text-amber-400">
        Cambia a FST Testnet para ver FSTD
      </span>
    );
  if (loading) return <span className="text-sm text-gray-500">…</span>;
  if (balance === null) return <span className="text-sm text-gray-500">—</span>;

  return (
    <span className="text-sm font-medium tabular-nums">
      {Number(balance).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
      })}{" "}
      {symbol}
    </span>
  );
}
