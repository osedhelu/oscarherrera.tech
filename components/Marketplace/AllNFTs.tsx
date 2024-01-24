"use client";

import { $Login } from "@/STORE/Login";
import { useStore } from "@nanostores/react";

export default function AllNFTs() {
  const user = useStore($Login);
  return <div>{user.wallet}</div>;
}
