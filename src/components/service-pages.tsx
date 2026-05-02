"use client";

import { Check, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { AmbientJellyfish } from "@/components/ambient-jellyfish";
import { InteractiveJellyfish } from "@/components/interactive-jellyfish";
import {
  collaborationRequestTypes,
  collaborationSteps,
  collaborationOptions,
  contactBudgetOptions,
  contactRequestTypes,
  contactTimelineOptions,
  customProducts,
  digitalServiceGroups,
  productGroups,
  siteConfig,
  techServices,
} from "@/lib/site-data";
import {
  Footer,
  FounderPriceBlock,
  FounderPricingNotice,
  Header,
  IconBadge,
  MotionSection,
  PrimaryButton,
  ProductPriceBlock,
  ProductPricingNotice,
  ProductIconVisual,
  SectionHeading,
} from "@/components/landing-page";

const fadeUp = {
  hidden: { opacity: 1, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type MailtoFallback = {
  subject: string;
  intro: string;
  fields: string[];
  formType: "contacto" | "colaboracion";
  originPage: "/contacto" | "/colabora";
};

type NamedFormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const internalStatusField = "Estado interno";
const initialInternalStatus = "nuevo";
const honeypotField = "Empresa";
const web3FormsEndpoint = "https://api.web3forms.com/submit";
const systemFields = ["Tipo de formulario", "Fecha de envío", "Origen de página", internalStatusField];

const formStatusMessages: Record<Exclude<FormStatus, "idle">, string> = {
  submitting: "Enviando mensaje...",
  success: "Mensaje enviado correctamente. Te responderemos lo antes posible.",
  error:
    "No se ha podido enviar el mensaje. Puedes escribir directamente a jellysolutions.es@gmail.com.",
};

function getFormValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function buildSubmissionData(form: HTMLFormElement, fallback: MailtoFallback) {
  const formData = new FormData(form);

  formData.set("Tipo de formulario", fallback.formType);
  formData.set("Fecha de envío", new Date().toISOString());
  formData.set("Origen de página", fallback.originPage);
  formData.set(internalStatusField, initialInternalStatus);

  return formData;
}

function buildMailtoUrl(formData: FormData, fallback: MailtoFallback) {
  const body = [
    fallback.intro,
    ...fallback.fields.flatMap((field) => [field + ":", getFormValue(formData, field)]),
    ...systemFields.flatMap((field) => [field + ":", getFormValue(formData, field)]),
    "---",
    "Enviado desde la web de JellySolutions",
  ].join("\n\n");

  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    fallback.subject,
  )}&body=${encodeURIComponent(body)}`;
}

function useFormSubmission(endpoint: string, fallback: MailtoFallback) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = buildSubmissionData(form, fallback);

    if (getFormValue(formData, honeypotField)) {
      form.reset();
      setStatus("success");
      return;
    }

    formData.delete(honeypotField);
    formData.set("subject", fallback.subject);
    formData.set("from_name", "JellySolutions");

    if (endpoint === web3FormsEndpoint) {
      const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

      if (!web3FormsAccessKey) {
        setStatusMessage(
          process.env.NODE_ENV === "development"
            ? "Falta configurar NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en .env.local y reiniciar el servidor."
            : "El envío del formulario no está configurado todavía. Puedes escribir directamente a jellysolutions.es@gmail.com.",
        );
        setStatus("error");
        return;
      }

      formData.set("access_key", web3FormsAccessKey);
    }

    if (!endpoint) {
      window.location.href = buildMailtoUrl(formData, fallback);
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      // Web3Forms Free usa integración client-side oficial. El body conserva los campos
      // visibles y los metadatos internos: tipo, fecha, origen y estado.
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message ?? "Form submission failed");
      }

      form.reset();
      setStatusMessage(result.message ?? "");
      setStatus("success");
    } catch (error) {
      setStatusMessage(
        error instanceof Error && error.message !== "Form submission failed" ? error.message : "",
      );
      setStatus("error");
    }
  }

  return {
    handleSubmit,
    isSubmitting: status === "submitting",
    statusMessage,
    status,
  };
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Enviar consulta",
  primaryHref = siteConfig.primaryContactHref,
  secondaryLabel = "Escribir por email",
  secondaryHref = siteConfig.contactUrl,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-paper sm:px-6 lg:px-8">
      <AmbientJellyfish />
      <div className="noise-overlay" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-aqua/18 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-coral/14 blur-3xl" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
            {eyebrow}
          </p>
          <h1 className="text-balance text-[clamp(2.15rem,8.5vw,3rem)] font-semibold leading-[1.08] sm:text-[clamp(2.7rem,5.5vw,3.8rem)] lg:text-[clamp(3.25rem,4.2vw,4.4rem)]">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-paper/82">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
            <PrimaryButton href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[30px] border border-white/18 bg-white/8 p-5 shadow-glow backdrop-blur"
          initial={{ opacity: 1, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="grid gap-3">
            {["Idea clara", "Diseño coherente", "Contacto fácil"].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/8 p-3"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-xs font-bold text-ink">
                  0{index + 1}
                </span>
                <span className="text-sm text-paper/82">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CtaBand({
  title = "Cuéntanos qué necesitas y te proponemos una solución simple, con precio cerrado y próximos pasos claros.",
  text = "Puede ser una web, un menú QR, una automatización, un producto personalizado o un pack completo. Te orientamos sin complicarte el proceso.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-ink p-7 text-paper shadow-glow sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
              Siguiente paso
            </p>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-paper/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <PrimaryButton href={siteConfig.primaryContactHref}>Enviar consulta</PrimaryButton>
            <a
              href={siteConfig.contactUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 text-sm font-semibold text-paper transition hover:-translate-y-1 hover:bg-white/14"
            >
              <Mail className="h-4 w-4" />
              Escribir por email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function getProductGridClass(count: number) {
  if (count === 4) {
    return "grid gap-5 sm:grid-cols-2 xl:grid-cols-4";
  }

  if (count === 2) {
    return "grid max-w-4xl gap-5 md:grid-cols-2";
  }

  return "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";
}

export function DigitalPage() {
  const servicesById = new Map(techServices.map((service) => [service.id, service]));

  return (
    <PageShell>
      <PageHero
        eyebrow="Productos digitales"
        title="Herramientas simples para vender mejor, ordenar solicitudes y ahorrar tiempo."
        description="Creamos webs, formularios, menús QR, automatizaciones y sistemas sencillos para que un negocio pequeño pueda trabajar con más claridad sin depender de herramientas enormes."
      />

      <MotionSection className="bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Qué podemos crear"
            title="Digital útil, fácil de entender y preparado para crecer."
            description="No todos los proyectos digitales necesitan lo mismo. Puedes empezar por presencia online, contacto, QR, organización interna o una herramienta sencilla a medida."
          />
          <FounderPricingNotice />
          <div className="mt-12 grid gap-10">
            {digitalServiceGroups.map((group, groupIndex) => {
              const services = group.serviceIds
                .map((serviceId) => servicesById.get(serviceId))
                .filter((service): service is (typeof techServices)[number] => Boolean(service));

              return (
                <section key={group.title} className="grid gap-5">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                      {group.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted">{group.description}</p>
                  </div>
                  <div
                    className={`grid gap-5 md:grid-cols-2 ${
                      services.length >= 3 ? "xl:grid-cols-3" : ""
                    }`}
                  >
                    {services.map((service, index) => (
                      <motion.article
                        key={service.id}
                        className="group flex h-full flex-col rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: (groupIndex + index) * 0.04 }}
                      >
                        <div className="mb-6 flex items-center justify-between gap-4">
                          <IconBadge icon={service.icon} />
                          <span className="rounded-full bg-aqua/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                            Digital
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-text">{service.title}</h2>
                        <div className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                          <p>
                            <strong className="text-text">Problema: </strong>
                            {service.problem}
                          </p>
                          <p>
                            <strong className="text-text">Resultado: </strong>
                            {service.result}
                          </p>
                        </div>
                        <div className="mt-6 rounded-[22px] border border-line/16 bg-elevated/58 p-4">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-coral">
                            Incluye
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
                            {service.includes.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua/16 text-aqua">
                                  <Check className="h-3 w-3" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto">
                          <FounderPriceBlock price={service.price} />
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <CtaBand text="Cuéntanos qué proceso quieres mejorar y te proponemos una solución digital sencilla, clara y fácil de mantener." />
    </PageShell>
  );
}

export function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Productos físicos"
        title="Productos personalizados con una imagen cuidada para marcas, eventos y regalos."
        description="Diseñamos camisetas, llaveros, packs y piezas por encargo para que una idea también pueda verse y sentirse fuera de la pantalla."
      />

      <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Línea física"
            title="Catálogo completo organizado por intención de uso."
            description="Mantenemos todos los productos, pero agrupados para distinguir rápido si buscas algo para un evento, una marca o un pack a medida."
          />
          <ProductPricingNotice />
          <div className="mt-12 grid gap-10">
            {productGroups.map((group, groupIndex) => {
              const products = customProducts.filter((product) =>
                group.products.includes(product.title),
              );

              return (
                <section key={group.title} className="grid gap-5">
                  <div className="grid gap-3 md:grid-cols-[0.42fr_0.58fr] md:items-end">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                        {group.title}
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-text">
                        {group.description}
                      </h2>
                    </div>
                  </div>
                  <div className={getProductGridClass(products.length)}>
                    {products.map((product, index) => (
                      <motion.article
                        key={product.title}
                        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-line/18 bg-panel text-text shadow-lift transition hover:-translate-y-1 hover:bg-elevated"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: (groupIndex + index) * 0.035 }}
                      >
                        <div
                          className={`h-36 p-5 ${
                            (groupIndex + index) % 2 === 0
                              ? "bg-[radial-gradient(circle_at_20%_20%,rgba(21,200,200,0.55),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(244,201,93,0.42),transparent_34%),linear-gradient(135deg,#111318,#263547)]"
                              : "bg-[radial-gradient(circle_at_18%_18%,rgba(255,107,94,0.52),transparent_34%),radial-gradient(circle_at_82%_0%,rgba(119,88,209,0.52),transparent_34%),linear-gradient(135deg,#111318,#2A2037)]"
                          }`}
                        >
                          <ProductIconVisual icon={product.icon} />
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-xl font-semibold">{product.title}</h3>
                          <p className="mt-3 text-sm leading-6 text-muted">
                            <strong className="text-text">Uso principal: </strong>
                            {product.description}
                          </p>
                          <p className="mt-4 text-sm leading-6 text-muted">
                            <strong className="text-text">Tipo de cliente: </strong>
                            {product.clientType}
                          </p>
                          <div className="mt-auto">
                            <ProductPriceBlock price={product.price} />
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <CtaBand text="Dinos qué producto tienes en mente, para quién es y cuándo lo necesitas. Te orientamos con una propuesta sencilla." />
    </PageShell>
  );
}

const collaborationValues = [
  "Ideas concretas, no frases vagas.",
  "Que cada parte aporte algo claro.",
  "Propuestas pequeñas para probar primero.",
  "Diseños, contactos, negocios o productos con sentido comercial.",
  "Colaboraciones realistas, no promesas de dinero rápido.",
];

const collaborationMailtoFallback: MailtoFallback = {
  subject: "Nueva propuesta de colaboración desde JellySolutions",
  intro: "Nueva propuesta recibida desde el formulario de Colaborar - JellySolutions",
  formType: "colaboracion",
  originPage: "/colabora",
  fields: [
    "Nombre",
    "Email o forma de contacto",
    "Tipo de colaboración",
    "Explicación de la idea",
    "Presupuesto aproximado",
    "Urgencia o plazo",
    "Qué necesitarías de JellySolutions",
    "Qué aportarías tú",
    "Enlaces o ejemplos",
  ],
};

export function CollaboratePage() {
  const formEndpoint = siteConfig.forms.collaborationFormEndpoint;
  const formAction = formEndpoint || siteConfig.contactUrl;
  const form = useFormSubmission(formEndpoint, collaborationMailtoFallback);

  return (
    <PageShell>
      <PageHero
        eyebrow="Colabora"
        title="Trae una idea, un negocio o una propuesta conjunta y vemos cómo aterrizarla."
        description="Colaboramos con personas y negocios que quieren crear un producto, digitalizar una idea, lanzar una marca o probar una propuesta compartida. Lo valoramos con realismo, sin prometer resultados automáticos."
        primaryLabel="Enviar propuesta"
        primaryHref="#propuesta-colaboracion"
        secondaryLabel="Contacto general"
        secondaryHref="/contacto"
      />

      <MotionSection className="bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Vías de colaboración"
            title="Formas claras de empezar una conversación útil."
            description="No hace falta traerlo todo cerrado. Puede ser una idea de producto, un negocio que quiere digitalizarse, un producto físico, una marca en lanzamiento o una propuesta conjunta."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collaborationOptions.map((option, index) => (
              <motion.article
                key={option.title}
                className="group relative overflow-hidden rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-coral/10 blur-2xl transition group-hover:bg-aqua/12" />
                <div className="relative">
                  <IconBadge icon={option.icon} />
                  <h2 className="mt-6 text-xl font-semibold text-text">{option.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{option.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Probamos de forma simple antes de hacer algo grande."
            description="La colaboración tiene que ser clara para ambas partes. Por eso empezamos acotando alcance, expectativas y siguiente acción."
          />
          <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-aqua via-lime to-coral lg:block" />
            {collaborationSteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="relative rounded-[24px] border border-line/16 bg-panel p-6 shadow-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-aqua text-sm font-bold text-ink shadow-lift">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section id="propuesta-colaboracion" className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
              Propuesta de colaboración
            </p>
            <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Cuéntanos tu propuesta de colaboración
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Cuéntanos qué quieres crear, qué punto de partida tienes y qué esperas de
              JellySolutions. Valoramos ideas de producto, negocios que quieren digitalizarse,
              productos físicos, marcas en lanzamiento y propuestas conjuntas. Primero revisamos si
              tiene sentido, si es viable y cuál sería una prueba razonable.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.38fr] lg:items-start">
            <form
              action={formAction}
              method="post"
              encType={formEndpoint ? "multipart/form-data" : "text/plain"}
              onSubmit={form.handleSubmit}
              className="min-w-0 rounded-[30px] border border-line/16 bg-panel p-6 shadow-lift sm:p-8"
            >
              <label className="sr-only" aria-hidden="true">
                Empresa
                <input name={honeypotField} tabIndex={-1} autoComplete="off" />
              </label>
              {formEndpoint ? (
                <>
                  <input
                    type="hidden"
                    name="Origen"
                    value="Formulario de Colaborar - JellySolutions"
                  />
                  <input type="hidden" name="Origen de página" value="/colabora" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva propuesta de colaboración desde JellySolutions"
                  />
                </>
              ) : null}
              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                  Nombre
                  <input
                    name="Nombre"
                    required
                    autoComplete="name"
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                  Email o forma de contacto
                  <input
                    name="Email o forma de contacto"
                    required
                    autoComplete="email"
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                  Tipo de colaboración
                  <select
                    name="Tipo de colaboración"
                    required
                    defaultValue=""
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {collaborationRequestTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                  Explicación de la idea
                  <textarea
                    name="Explicación de la idea"
                    required
                    minLength={20}
                    rows={7}
                    placeholder="Describe qué quieres crear, para quién sería, qué problema resuelve y qué parte está más clara ahora mismo."
                    className="w-full min-w-0 resize-y rounded-2xl border border-line/16 bg-elevated px-4 py-3 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                  <span>
                    Presupuesto aproximado <span className="font-medium text-muted">(si aplica)</span>
                  </span>
                  <select
                    name="Presupuesto aproximado"
                    defaultValue=""
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  >
                    <option value="">No lo tengo claro</option>
                    {contactBudgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                  <span>
                    Urgencia o plazo <span className="font-medium text-muted">(si aplica)</span>
                  </span>
                  <select
                    name="Urgencia o plazo"
                    defaultValue=""
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  >
                    <option value="">Sin fecha definida</option>
                    {contactTimelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                  <span>
                    Qué necesitarías de JellySolutions{" "}
                    <span className="font-medium text-muted">(opcional)</span>
                  </span>
                  <textarea
                    name="Qué necesitarías de JellySolutions"
                    rows={4}
                    placeholder="Diseño, producción, web, automatización, estructura de venta, materiales, validación o acompañamiento."
                    className="w-full min-w-0 resize-y rounded-2xl border border-line/16 bg-elevated px-4 py-3 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                  Qué aportarías tú
                  <textarea
                    name="Qué aportarías tú"
                    rows={4}
                    placeholder="Idea, experiencia, producto, marca, contactos, audiencia, local, presupuesto, tiempo o capacidad de venta."
                    className="w-full min-w-0 resize-y rounded-2xl border border-line/16 bg-elevated px-4 py-3 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                  <span>
                    Enlaces o ejemplos <span className="font-medium text-muted">(opcional)</span>
                  </span>
                  <input
                    name="Enlaces o ejemplos"
                    placeholder="Instagram, portfolio, web, fotos, referencias, moodboard o ejemplos."
                    className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                  />
                </label>
              </div>

              <p className="mt-6 rounded-2xl border border-aqua/20 bg-aqua/[0.07] px-4 py-3 text-sm leading-6 text-muted">
                {form.status === "idle"
                  ? formEndpoint
                    ? "Envíanos tu propuesta y revisaremos si encaja, qué alcance tendría y cuál sería el siguiente paso."
                    : "Al enviar se abrirá tu aplicación de correo con la propuesta preparada para enviarla."
                  : form.statusMessage || formStatusMessages[form.status]}
              </p>

              <button
                type="submit"
                disabled={form.isSubmitting}
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-aqua px-5 text-sm font-semibold text-ink shadow-lift transition hover:-translate-y-1 hover:bg-lime sm:w-auto"
              >
                {form.isSubmitting ? "Enviando mensaje..." : "Enviar propuesta de colaboración"}
                <Send className="h-4 w-4" />
              </button>
            </form>

            <aside className="grid gap-5">
              <div className="rounded-[28px] border border-line/16 bg-panel p-6 shadow-card">
                <IconBadge icon="BadgeCheck" />
                <h3 className="mt-6 text-xl font-semibold text-text">Qué valoramos</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                  {collaborationValues.map((value) => (
                    <li key={value} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={siteConfig.contactUrl}
                className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
              >
                <IconBadge icon="MessagesSquare" />
                <h3 className="mt-6 text-xl font-semibold text-text">¿Prefieres escribir primero?</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Puedes enviar un email si necesitas aclarar una idea antes de preparar una
                  propuesta completa.
                </p>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const contactResponseItems = [
  "Si encaja con lo que hacemos.",
  "Una idea de precio o rango.",
  "El siguiente paso recomendado.",
  "Si conviene empezar con algo pequeño.",
];

const contactRequiredFields = ["Nombre", "Email", "Tipo de consulta", "Asunto", "Mensaje"];

const contactMailtoFallback: MailtoFallback = {
  subject: "Nuevo contacto desde JellySolutions",
  intro: "Nuevo mensaje recibido desde el formulario de Contacto - JellySolutions",
  formType: "contacto",
  originPage: "/contacto",
  fields: ["Nombre", "Email", "Tipo de consulta", "Asunto", "Mensaje"],
};

export function ContactPage() {
  const visibleSocialLinks = siteConfig.socialLinks.filter((link) => link.href);
  const formEndpoint = siteConfig.forms.contactFormEndpoint;
  const formAction = formEndpoint || siteConfig.contactUrl;
  const form = useFormSubmission(formEndpoint, contactMailtoFallback);
  const [focusedField, setFocusedField] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const [completedFields, setCompletedFields] = useState(0);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [submittedOnce, setSubmittedOnce] = useState(false);

  function syncContactProgress(formElement: HTMLFormElement) {
    const formData = new FormData(formElement);
    const completed = contactRequiredFields.filter((field) => getFormValue(formData, field)).length;

    setCompletedFields(completed);
    if (formElement.checkValidity()) {
      setHasValidationError(false);
    }
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    syncContactProgress(event.currentTarget);
    if (!event.currentTarget.checkValidity()) {
      setSubmittedOnce(false);
      setHasValidationError(true);
      return;
    }

    setSubmittedOnce(true);
    setHasValidationError(false);
    form.handleSubmit(event);
  }

  function updateFocusedField(target: EventTarget) {
    const control = target as unknown as NamedFormControl;
    if (control.name) {
      setFocusedField(control.name);
    }
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de lo que necesitas crear."
        description="Escríbenos para pedir información, resolver una duda, valorar una web, consultar productos personalizados o explicar una idea que quieras poner en marcha."
      />

      <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.42fr]">
          <form
            action={formAction}
            method="post"
            encType={formEndpoint ? "multipart/form-data" : "text/plain"}
            onSubmit={handleContactSubmit}
            onChange={(event) => {
              setHasTyped(true);
              syncContactProgress(event.currentTarget);
            }}
            onFocus={(event) => {
              updateFocusedField(event.target);
            }}
            onInvalidCapture={(event) => {
              setHasValidationError(true);
              updateFocusedField(event.target);
            }}
            className="min-w-0 rounded-[30px] border border-line/16 bg-panel p-6 shadow-lift sm:p-8"
          >
            <label className="sr-only" aria-hidden="true">
              Empresa
              <input name={honeypotField} tabIndex={-1} autoComplete="off" />
            </label>
            {formEndpoint ? (
              <>
                <input
                  type="hidden"
                  name="Origen"
                  value="Formulario de Contacto - JellySolutions"
                />
                <input type="hidden" name="Origen de página" value="/contacto" />
                <input type="hidden" name="_subject" value="Nuevo contacto desde JellySolutions" />
              </>
            ) : null}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                Contacto general
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-text">
                Envíanos tu mensaje
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Cuéntanos el contexto, qué necesitas y cómo prefieres que te respondamos. Si la
                consulta requiere presupuesto, te pediremos los detalles concretos después.
              </p>
            </div>

            <div className="mt-8 grid min-w-0 gap-5 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                Nombre
                <input
                  name="Nombre"
                  required
                  autoComplete="name"
                  className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                />
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-text">
                Email
                <input
                  name="Email"
                  type="email"
                  required
                  autoComplete="email"
                  className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                />
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                Tipo de consulta
                <select
                  name="Tipo de consulta"
                  required
                  defaultValue=""
                  className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {contactRequestTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                Asunto
                <input
                  name="Asunto"
                  required
                  placeholder="Ejemplo: web para mi negocio, productos para un evento, duda general..."
                  className="min-h-12 w-full min-w-0 rounded-2xl border border-line/16 bg-elevated px-4 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                />
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-semibold text-text sm:col-span-2">
                Mensaje
                <textarea
                  name="Mensaje"
                  required
                  minLength={10}
                  rows={7}
                  placeholder="Cuéntanos qué necesitas, para qué negocio, marca o idea sería y qué respuesta esperas recibir."
                  className="w-full min-w-0 resize-y rounded-2xl border border-line/16 bg-elevated px-4 py-3 text-sm font-medium text-text outline-none transition placeholder:text-muted/70 focus:border-aqua focus:ring-2 focus:ring-aqua/20"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={form.isSubmitting}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-aqua px-5 text-sm font-semibold text-ink shadow-lift transition hover:-translate-y-1 hover:bg-lime sm:w-auto"
            >
              {form.isSubmitting ? "Enviando mensaje..." : "Enviar solicitud"}
              <Send className="h-4 w-4" />
            </button>

            <p className="mt-4 text-xs leading-5 text-muted">
              {form.status === "idle"
                ? formEndpoint
                  ? "Envíanos tu solicitud y revisaremos si encaja, qué alcance tendría y cuál sería el siguiente paso."
                  : "Al enviar se abrirá tu aplicación de correo con la solicitud preparada para enviarla."
                : form.statusMessage || formStatusMessages[form.status]}
            </p>
          </form>

          <aside className="grid gap-5">
            <div className="rounded-[28px] border border-line/16 bg-panel p-4 shadow-card sm:p-5">
              <InteractiveJellyfish
                focusedField={focusedField}
                hasTyped={hasTyped}
                completedFields={completedFields}
                hasValidationError={hasValidationError}
                isSubmitting={form.isSubmitting}
                isSubmitted={form.status === "success" || submittedOnce}
              />
              <p className="mt-4 text-sm leading-6 text-muted">
                Detalle interactivo: una muestra de cómo podemos añadir personalidad a una web sin
                perder claridad.
              </p>
            </div>
            <div className="rounded-[28px] border border-line/16 bg-panel p-6 shadow-card">
              <IconBadge icon="BadgeCheck" />
              <h2 className="mt-6 text-xl font-semibold text-text">Qué recibirás</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                {contactResponseItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift">
              <IconBadge icon="Mail" />
              <h2 className="mt-6 text-xl font-semibold text-text">Email</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                <a href={siteConfig.contactUrl}>{siteConfig.contactEmail}</a>
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Escribir por WhatsApp
                </a>
              </p>
            </div>
            {visibleSocialLinks.length > 0 ? (
              <div className="rounded-[28px] border border-line/16 bg-panel p-6 shadow-card">
                <IconBadge icon="Sparkles" />
                <h2 className="mt-6 text-xl font-semibold text-text">Redes sociales</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  También puedes ver ejemplos, novedades y trabajos recientes en nuestras redes.
                </p>
                <div className="mt-4 grid gap-2 text-sm text-muted">
                  {visibleSocialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-text"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </MotionSection>
    </PageShell>
  );
}


