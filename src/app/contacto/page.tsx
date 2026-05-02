import type { Metadata } from "next";
import { ContactPage } from "@/components/service-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.brandName}`,
  description:
    "Contacta con JellySolutions para pedir información, enviar una consulta, solicitar presupuesto o proponer una colaboración.",
};

export default function Contacto() {
  return <ContactPage />;
}
