import { Metadata } from "next";

export const getMetadata = ({
  description,
  title,
  urlBase = "https://oscarherrera.tech",
}: {
  title: string;
  description: string;
  urlBase?: string;
}): Metadata => ({
  openGraph: {
    title,
    description,
    url: urlBase,
    siteName: "Oscar Herrera Lugo",
    images: [
      {
        url: `${urlBase}/favicon.svg`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: `${urlBase}/favicon.svg`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: description,
      },
    ],
    locale: "es-ES",
    type: "website",
  },
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", urlBase),
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.ico",
      },
    ],
  },
  twitter: {
    card: "app",
    title,
    description,
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: `${urlBase}/favicon.ico`,
      alt: "osedhelu Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent",
    startupImage: [
      "/favicon.ico",
      {
        url: "/favicon.ico",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  alternates: {
    canonical: urlBase,
    languages: {
      "en-US": "https://nextjs.org/en-US",
      "de-DE": "https://nextjs.org/de-DE",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
    types: {
      "application/rss+xml": "https://nextjs.org/rss",
    },
  },
  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://nextjs.org/web",
      should_fallback: true,
    },
  },
});
