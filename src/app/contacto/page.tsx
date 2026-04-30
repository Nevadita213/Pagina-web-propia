import type { Metadata } from "next";
import { ContactPage } from "@/components/service-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.brandName}`,
  description:
    "Contacta con IdeaForma Studio para pedir presupuesto, hablar por WhatsApp o proponer una colaboración.",
};

export default function Contacto() {
  return <ContactPage />;
}
