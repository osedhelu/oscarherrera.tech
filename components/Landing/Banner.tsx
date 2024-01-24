import { dataMyInfo } from "@/config/myInfo";
import { useTranslations } from "@/hooks/i18n/utils";
import { Iconsjsx } from "../Logo/Icons";
import { ImgBanner } from "./Banner/ImgBanner";
import { TextAnimation } from "./Banner/TextAnimation";
import { TitleBanner } from "./TitleBanner";
import Link from "next/link";

export default function Banner({ path }: { path: string }) {
  const t = useTranslations(path);
  return (
    <section id="home" className="section flex items-center">
      <div className="container mx-auto mt-[100px] lg:mt-0">
        <div className="flex flex-col lg:flex-row grap-y-8 lg:items-center lg:grap-x-12">
          <div className="flex-1 text-center lg:text-left font-secondary">
            <TitleBanner className=" text-[55px] font-bold leading-[0.8] lg:text-[90px] overflow-hidden">
              {t("banner.hello")} {t(dataMyInfo.name)}{" "}
              <span>{t(dataMyInfo.lastName)}</span>
            </TitleBanner>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secundary font-semibold uppercase leading-[1.2] overflow-hidden">
              <TextAnimation />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              {t(dataMyInfo.description)}
            </p>
            <div className="flex gap-4 lg:mx-0 max-w-max items-center mb-12 mx-auto">
              <a
                className="btn btn-lg flex items-center"
                href="https://api.whatsapp.com/send?phone=573017982676"
                target="_blank"
              >
                {t("banner.contact")}
              </a>
              <Link href="/marketplace" className="text-gradient btn-link">
                {t("banner.marketplace")}
              </Link>
            </div>
            <div className="flex gap-x-6 max-w-max mx-auto lg:mx-0">
              {dataMyInfo.socials.map((social, index) => (
                <a key={index} href={social.href} target="_blank">
                  <Iconsjsx icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <ImgBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
