"use client";
import { dataMyInfo } from "@/config/myInfo";
import { motion } from "framer-motion";
import { type FC } from "react";
import { useInView } from "react-intersection-observer";
import style from "./About.module.css";
import {
  skills_DevOps,
  skills_backend,
  skills_frontend,
  skills_languages,
} from "./logos";
import { useTranslations } from "@/hooks/i18n/utils";
import { usePathname } from "next/navigation";
import { fadeIn } from "@/config/FadeIn";
import CountUp from "../CountUp";
interface props {
  children?: React.ReactNode;
}

export const Abouts: FC<props> = ({}) => {
  const path = usePathname();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const t = useTranslations(path);
  return (
    <section className="section" id="about">
      <div className="container mx-auto mt-[80px] lg:mt-[0px]" ref={ref}>
        <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen overflow-hidden">
          <motion.div
            variants={fadeIn("right", 0.03)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.03 }}
            className={`flex-1 ${style.img_border} bg-about bg-contain bg-no-repeat h-[10px] lg:h-[400px] bg-top  `}
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="text-[20px] lg:h2 text-accent">
              {t(dataMyInfo.titleAbout)}
            </h2>
            <h3 className="text-[15px] lg:h3 mb-4">{t("about.description")}</h3>
            <p>{t(dataMyInfo.description2)}</p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              {dataMyInfo.experience.map((item) => (
                <div key={item.title}>
                  <div className="mt-3 text-5xl lg:text-[40px]  font-tertiary text-gradient mb2">
                    {inView && <CountUp end={item.ano} start={0} />}
                  </div>
                  <div
                    className="font-primary text-sm tracking-[2px]"
                    dangerouslySetInnerHTML={{ __html: t(item.title) }}
                  />
                </div>
              ))}
            </div>
            <p>{t("about.title.1")}</p>
            <div className="flex gap-x-4 mb-[10px] ">
              {Object.values(skills_languages).map((IconSvg, index) => (
                <IconSvg key={`32${index}`} className="w-8 h-8" />
              ))}
            </div>
            <p>{t("about.title.2")}</p>
            <div className="flex gap-x-4 mb-[10px] ">
              {Object.values(skills_backend).map((IconSvg, index) => (
                <IconSvg key={`12${index}`} className="w-8 h-8" />
              ))}
            </div>
            <p>{t("about.title.3")}</p>
            <div className="flex gap-x-4">
              {Object.values(skills_frontend).map((IconSvg, index) => (
                <IconSvg
                  key={`22${index}`}
                  className="w-8 h-8 dark:fill-white "
                />
              ))}
            </div>
            <p>{t("about.title.4")}</p>
            <div className="flex gap-x-4 mb-[80px] ">
              {Object.values(skills_DevOps).map((IconSvg, index) => (
                <IconSvg
                  key={`22${index}`}
                  className="w-8 h-8 dark:fill-white "
                />
              ))}
            </div>
            <div className="flex gap-x-8  items-center">
              <a
                className="btn btn-lg flex justify-center items-center"
                href="https://api.whatsapp.com/send?phone=573017982676"
                target="_blank"
              >
                <p>{t("banner.contact")}</p>
              </a>
              <a
                className="text-gradient btn-link"
                href="https://docs.google.com/document/d/17EmXALv6Fqyhs2D85J12lCpqfA26vmkGpSGMlaiFlDs/edit#heading=h.gjdgxs"
                target="_blank"
              >
                {t("banner.portfolio")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
