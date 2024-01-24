import { atom } from "nanostores";

const user = {
  wallet: "",
  amount: 0,
};
export const $Login = atom<typeof user>(user);

export function setLogin(user: { wallet: string; amount: number }) {
  $Login.set({ wallet: user.wallet, amount: user.amount });
}
