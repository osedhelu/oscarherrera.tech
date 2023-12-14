/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich'
    },
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3'
      },
      backgroundImage: {
        site: "url('/assets/site-bg.jpg')",
        sitelight: "url('/assets/bg-main-light-800w.jpg')",
        about: "url('/favicon.svg')",
        services: "url('/assets/services.png')"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
