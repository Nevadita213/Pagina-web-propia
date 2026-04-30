import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | Soluciones digitales y productos personalizados`,
  description:
    "Web corporativa para presentar servicios digitales, automatizaciones y productos personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
