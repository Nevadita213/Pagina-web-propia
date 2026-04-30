import type { Metadata } from "next";
import { CollaboratePage } from "@/components/service-pages";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: `Colabora | ${siteConfig.brandName}`,
  description:
    "Colabora con JellySolutions: vende productos personalizados, trae ideas, aporta diseños o propón colaboraciones.",
};

export default function Colabora() {
  return <CollaboratePage />;
}
