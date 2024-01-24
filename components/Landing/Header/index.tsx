import { OscarLogo } from "@/components/OscarLogo";
import { ThemeTogglejsx } from "@/components/ThemeToggle/ThemeToggle";
import { dataMyInfo } from "@/config/myInfo";
import { getLangFromUrl, useTranslations } from "@/hooks/i18n/utils";
import Link from "next/link";

export default function LandingHeader({ path }: { path: string }) {
  const lang = getLangFromUrl(path);
  const t = useTranslations(path);
  return (
    <header className="fixed w-full z-50 top-0 bg-pink-300/20 dark:bg-pink-300/9 backdrop-blur-md py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/" data-astro-reload>
            <OscarLogo />
          </a>
          <div className="flex gap-4 items-center">
            <div>
              {lang === "en" ? (
                <Link
                  href="/"
                  data-astro-history="replace"
                  className="text-3xl text-center pt-2 items-center flex"
                >
                  🇪🇸
                </Link>
              ) : (
                <Link
                  href="/en"
                  data-astro-history="replace"
                  className="text-3xl text-center pt-2 items-center flex"
                >
                  🇬🇧
                </Link>
              )}
            </div>

            <a
              className="btn btn-sm h-8 text-center items-center flex"
              href={dataMyInfo.cv}
              target="_blank"
            >
              {t("nav.cv")}
            </a>

            <ThemeTogglejsx />
          </div>
        </div>
      </div>
    </header>
  );
}
