"use client";
import { type FC } from "react";
import { Iconsjsx } from "../Logo/Icons";
import style from "./ThemeToggle.module.css";
import { useDarkSide } from "./useDarkSide";

interface props {
  children?: React.ReactNode;
}

export const ThemeTogglejsx: FC<props> = ({}) => {
  const [colorTheme, setTheme] = useDarkSide();
  const UpdateTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button
        aria-pressed={colorTheme === "dark"}
        className={style.button}
        onClick={() => UpdateTheme()}
      >
        <span
          className={`${colorTheme === "dark" && style.light}  ${style.icon}`}
        >
          <Iconsjsx icon={"sun"} className={`${style.svg} `} />
        </span>
        <span
          className={`${colorTheme === "light" && style.light} ${style.icon}`}
        >
          <Iconsjsx icon={"moon-stars"} className={`${style.svg} `} />
        </span>
      </button>
    </>
  );
};
