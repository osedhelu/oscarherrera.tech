import { ContractTransactionResponse } from "ethers";
import { OsdToken } from "../typechain-types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

export interface iTokenOsd {
  token: OsdToken & {
    deploymentTransaction(): ContractTransactionResponse;
  };
  owner: HardhatEthersSigner;
  account1: HardhatEthersSigner;
  account2: HardhatEthersSigner;
  account3: HardhatEthersSigner;
}
