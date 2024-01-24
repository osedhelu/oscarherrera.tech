"use client";
import { dataMyInfo } from "@/config/myInfo";
import { useTranslations } from "@/hooks/i18n/utils";
import { usePathname } from "next/navigation";
import { type FC } from "react";
import { TypeAnimation } from "react-type-animation";

interface props {
  children?: React.ReactNode;
}
export const TextAnimation: FC<props> = ({}) => {
  const path = usePathname();
  const t = useTranslations(path);
  return (
    <>
      <span className="mr-4 text-[20px] lg:text-3xl">{t("banner-soy")} </span>
      <TypeAnimation
        sequence={dataMyInfo.job.map((item) =>
          typeof item === "string" ? t(item as any) : item
        )}
        className="text-accent text-[20px] lg:text-3xl"
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </>
  );
};
