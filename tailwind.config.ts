import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        secondary: "#6448a5",
        "blue-50": "#F5F3FF",
        "blue-100": "#EDE9FE",
        "blue-200": "#DDD6FE",
        "blue-300": "#C4B5FD",
        "blue-400": "#A78BFA",
        "blue-500": "#8B5CF6",
        "blue-600": "#7C3AED",
        "blue-700": "#6D28D9",
        "blue-800": "#5B22D0",
        "blue-900": "#4C1DAB",
      },
      backgroundImage: {
        site: "url('/assets/site-bg.svg')",
        sidelight: "url('/assets/site-bg-light.svg')",
        about: "url('/assets/about.png')",
        services: "url('/assets/services.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
