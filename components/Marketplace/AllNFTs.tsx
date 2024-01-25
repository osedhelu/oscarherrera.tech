"use client";

import { $Login } from "@/STORE/Login";
import { useStore } from "@nanostores/react";
import { ButtonPayment } from "../Web3/ButtonPayment";

export default function AllNFTs() {
  const user = useStore($Login);
  return (
    <div>
      <ButtonPayment />
    </div>
  );
}
