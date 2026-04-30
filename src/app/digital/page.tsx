import type { Metadata } from "next";
import { DigitalPage } from "@/components/service-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Digital | ${siteConfig.brandName}`,
  description:
    "Servicios digitales de IdeaForma Studio: webs, automatizaciones, formularios, reservas, pedidos, dashboards, menús QR y sistemas simples.",
};

export default function Digital() {
  return <DigitalPage />;
}
