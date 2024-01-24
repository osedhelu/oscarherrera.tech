import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: any = "/") {
  const [, lang] = url.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(path: string = "/") {
  const lang = getLangFromUrl(path) as keyof typeof ui;
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
