"use client";
import { useEffect, useState } from "react";
export const useDarkSide = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  console.log("TCL: theme, setTheme] ");
  const [theme, setTheme] = useState<string>(localStorage.theme); // error corregir
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
