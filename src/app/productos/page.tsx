import type { Metadata } from "next";
import { ProductsPage } from "@/components/service-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Productos físicos | ${siteConfig.brandName}`,
  description:
    "Productos físicos y personalizados: camisetas, llaveros, packs, diseños por encargo y productos para eventos o negocios.",
};

export default function Productos() {
  return <ProductsPage />;
}
