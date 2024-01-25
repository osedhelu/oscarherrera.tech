import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import React from "react";

const USDTAddress = "0x...";

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const USDTAbi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

export const Components = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function getBalance() {
    if (!isConnected) throw Error("User disconnected");

    const ethersProvider = new ethers.providers.Web3Provider(
      walletProvider as any
    );
    const signer = await ethersProvider.getSigner();
    // The Contract object
    const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer);
    const USDTBalance = await USDTContract.balanceOf(address);

    console.log(ethers.utils.formatUnits(USDTBalance, 18));
  }

  return <button onClick={getBalance}>Get User Balance</button>;
};
