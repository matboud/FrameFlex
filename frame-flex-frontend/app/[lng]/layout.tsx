import React from "react";
import { dir } from "i18next";
import { Providers } from "@/lib/providers";

/* Instruments */
import "../styles/globals.css";
import "react-multi-carousel/lib/styles.css";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {  
  title: "FrameFlex",
  description: "Search for movies and TV shows",
  keywords: "home, page, movies, FrameFlex, tv, shows, tv shows, movies, tv shows, movies, tv shows, movie",
}

function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: any };
}) {
  const { lng } = params;

  return (
    <Providers>
      <html lang={lng} dir={dir(lng)}>
        <body>{children}</body>
      </html>
    </Providers>
  );
}

export default RootLayout;

