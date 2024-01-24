/* eslint-disable @next/next/no-img-element */
"use client";
import { type FC } from "react";
import style from "./ImgBanner.module.css";

interface props {
  children?: React.ReactNode;
}

export const ImgBanner: FC<props> = () => {
  return (
    <img
      className={`rounded-full w-[400px] ${style.img_border}`}
      src="/assets/portrait.jpeg"
      id="img-border"
      alt=""
    />
  );
};
