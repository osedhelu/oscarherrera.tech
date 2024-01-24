"use client";
import { useEffect, useState } from "react";
export const useDarkSide = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  let themeStore: any = "light";
  if (typeof window !== "undefined") {
    themeStore = localStorage.theme || "light";
  }
  const [theme, setTheme] = useState<string>(themeStore); // error corregir
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
