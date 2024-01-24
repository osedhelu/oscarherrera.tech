import { atom } from "nanostores";

export const $NavStore = atom<boolean>(true);

export function setSidebar() {
  $NavStore.set(!$NavStore.get());
}
