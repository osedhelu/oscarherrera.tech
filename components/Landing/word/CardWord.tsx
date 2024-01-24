"use client";
import { useTranslations } from "@/hooks/i18n/utils";
import { usePathname } from "next/navigation";
import { type FC } from "react";

interface props {
  title: string;
  children?: React.ReactNode;
  href: string;
  img: string;
  titleState: string;
}

export const CardWord: FC<props> = ({
  children = (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  ),
  title,
  href,
  img,
  titleState,
}) => {
  const path = usePathname();
  const t = useTranslations(path);
  return (
    <div className="relative dark:bg-black  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-2xl">
      <a
        className={`relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl`}
        astro-data-history="replace"
        href={href}
      >
        <div
          className={`object-cover bg-contain bg-center no-repeat`}
          style={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${img})`,
          }}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full  px-2 text-center text-sm font-medium bg-red-300">
          {titleState}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5 ">
        <a href="#">
          <h5 className="text-xl tracking-tight ">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">{children}</div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium  hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="mr-2 h-6 w-6 stroke-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="style=stroke">
                <g id="eye-open">
                  <path
                    id="vector (Stroke)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 9.75C10.755 9.75 9.75 10.755 9.75 12C9.75 13.245 10.755 14.25 12 14.25C13.245 14.25 14.25 13.245 14.25 12C14.25 10.755 13.245 9.75 12 9.75ZM8.25 12C8.25 9.92657 9.92657 8.25 12 8.25C14.0734 8.25 15.75 9.92657 15.75 12C15.75 14.0734 14.0734 15.75 12 15.75C9.92657 15.75 8.25 14.0734 8.25 12Z"
                    fill="#000000"
                  ></path>
                  <path
                    id="vector (Stroke)_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.28282 9.27342C4.69299 5.94267 8.19618 3.96997 12.0001 3.96997C15.8042 3.96997 19.3075 5.94286 21.7177 9.27392C22.2793 10.0479 22.5351 11.0421 22.5351 11.995C22.5351 12.948 22.2792 13.9424 21.7174 14.7165C19.3072 18.0473 15.804 20.02 12.0001 20.02C8.19599 20.02 4.69264 18.0471 2.28246 14.716C1.7209 13.942 1.46509 12.9478 1.46509 11.995C1.46509 11.0419 1.721 10.0475 2.28282 9.27342ZM12.0001 5.46997C8.74418 5.46997 5.66753 7.15436 3.49771 10.1532L3.497 10.1542C3.15906 10.6197 2.96509 11.2866 2.96509 11.995C2.96509 12.7033 3.15906 13.3703 3.497 13.8357L3.49771 13.8367C5.66753 16.8356 8.74418 18.52 12.0001 18.52C15.256 18.52 18.3326 16.8356 20.5025 13.8367L20.5032 13.8357C20.8411 13.3703 21.0351 12.7033 21.0351 11.995C21.0351 11.2866 20.8411 10.6197 20.5032 10.1542L20.5025 10.1532C18.3326 7.15436 15.256 5.46997 12.0001 5.46997Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>

          {t("works.view_project")}
        </a>
      </div>
    </div>
  );
};
