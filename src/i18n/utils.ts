import { ui, defaultLang } from './ui'

export function getLangFromUrl (url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

interface Props {
  url?: unknown
  state?: 'react' | 'astro'
}
export function useTranslations ({ state = 'astro', url = null }: Props) {
  const lang = getLangFromUrl(
    state === 'astro' ? (url as URL) : new URL(window.location.href)
  ) as keyof typeof ui
  return function t (key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
