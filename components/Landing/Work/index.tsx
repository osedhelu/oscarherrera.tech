"use client";
import { usePathname } from "next/navigation";
import { WorkContainer } from "../word/WorkContainer";
import { useTranslations } from "@/hooks/i18n/utils";
import { CardWord } from "../word/CardWord";
import {
  skills_backend,
  skills_frontend,
  skills_languages,
} from "@/components/Landing/About/logos";

export default function WorkSection() {
  const path = usePathname();
  const t = useTranslations(path);
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="w-full grid justify-items-center">
          <h2 className="text-[20px] lg:h2 text-accent mb-6">
            {t("works.title")}
          </h2>
          <h3 className="text-[9px] lg:h3 max-w-[455px] mb-16">
            {t("works.description")}
          </h3>
        </div>

        <WorkContainer>
          <CardWord
            title="Api Pagomovil Sincronizar Datos"
            href="#"
            img="/img_app2.jpeg"
            titleState=""
          >
            <skills_backend.django className="w-10 h-10" />
            <skills_backend.djangorestframework className="w-10 h-10 bg-white rounded-full" />
            <skills_backend.swagger className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10 fill-black dark:fill-white" />
          </CardWord>
          <CardWord
            title="Pagomovil Banco de Venezuela"
            href="#"
            img="/img_app1.jpeg"
            titleState="privado"
          >
            <skills_languages.kotlin className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.jetpack className="w-10 h-10" />
          </CardWord>
          <CardWord
            title="Pagomovil Bancaribe"
            href="#"
            img="/app03.jpeg"
            titleState="privado"
          >
            <skills_languages.kotlin className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.jetpack className="w-10 h-10" />
          </CardWord>
          <CardWord
            title="Pagomovil banplus"
            href="#"
            img="/img_app4.jpeg"
            titleState="privado"
          >
            <skills_languages.kotlin className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.jetpack className="w-10 h-10" />
          </CardWord>
          <CardWord
            title="Pagina Disglobal"
            href="https://disglobal-page-git-osedhelu-devdg.vercel.app/"
            img="/page_disglonal.jpeg"
            titleState="privado"
          >
            <skills_languages.typescript className="w-10 h-10" />
            <skills_backend.strapi className="w-10 h-10" />
            <skills_frontend.nextjs className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.react className="w-10 h-10" />
          </CardWord>
          <CardWord
            title="Pagomovil Banco Fondo Comun"
            href="#"
            img="/bfc.jpeg"
            titleState="privado"
          >
            <skills_languages.kotlin className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.jetpack className="w-10 h-10" />
          </CardWord>
          <CardWord
            title="Pagomovil Banco Exterior"
            href="#"
            img="/banexterior.jpeg"
            titleState="privado"
          >
            <skills_languages.kotlin className="w-10 h-10" />
            <skills_backend.socketio className="w-10 h-10  fill-black dark:fill-white" />
            <skills_frontend.jetpack className="w-10 h-10" />
          </CardWord>
        </WorkContainer>
      </div>
    </section>
  );
}
