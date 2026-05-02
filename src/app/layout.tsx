import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Webs, menús QR y productos personalizados`,
  description:
    "Webs, formularios, menús QR, automatizaciones simples y productos personalizados para negocios, eventos y marcas pequeñas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function () {
      try {
        var saved = localStorage.getItem("theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
        var root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        root.dataset.theme = theme;
      } catch (error) {
        document.documentElement.classList.add("dark");
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return (
    <html lang="es" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
