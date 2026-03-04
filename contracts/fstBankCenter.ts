/**
 * Contrato FSTD (FSTBankCenter) en FST Smart Chain Testnet.
 * ABI mínimo para balance, transfer y metadata.
 */
import { Env } from "@/config/env";

export const FSTD_ADDRESS = Env.FSTD_CONTRACT_ADDRESS;

export const FSTD_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
] as const;
