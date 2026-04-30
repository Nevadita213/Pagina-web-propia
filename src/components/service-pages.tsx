"use client";

import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import {
  collaborationOptions,
  customProducts,
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
  primaryLabel = "Hablar por WhatsApp",
  secondaryLabel = "Pedir presupuesto",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-paper sm:px-6 lg:px-8">
      <div className="noise-overlay" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-aqua/18 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-coral/14 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
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
            <PrimaryButton href={siteConfig.whatsappUrl}>{primaryLabel}</PrimaryButton>
            <PrimaryButton href={siteConfig.contactUrl} variant="secondary">
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
            <PrimaryButton href={siteConfig.whatsappUrl}>Hablar por WhatsApp</PrimaryButton>
            <a
              href={siteConfig.contactUrl}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 text-sm font-semibold text-paper transition hover:-translate-y-1 hover:bg-white/14"
            >
              <Mail className="h-4 w-4" />
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DigitalPage() {
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
            description="Cada bloque se puede pedir por separado o combinar dentro de un mismo sistema."
          />
          <FounderPricingNotice />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techServices.map((service, index) => (
              <motion.article
                key={service.title}
                className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
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
                    <strong className="text-text">Qué es: </strong>
                    {service.what}
                  </p>
                  <p>
                    <strong className="text-text">Para quién: </strong>
                    {service.forWho}
                  </p>
                  <p>
                    <strong className="text-text">Beneficio: </strong>
                    {service.benefit}
                  </p>
                  <p>
                    <strong className="text-text">Ejemplo: </strong>
                    {service.example}
                  </p>
                </div>
                <FounderPriceBlock price={service.price} />
              </motion.article>
            ))}
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
            title="Detalles visuales que ayudan a recordar tu marca, evento o idea."
            description="Presentamos cada producto con referencias visuales cuidadas para que se entienda el tipo de acabado, uso y cliente ideal."
          />
          <ProductPricingNotice />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {customProducts.map((product, index) => (
              <motion.article
                key={product.title}
                className="group overflow-hidden rounded-[28px] border border-line/18 bg-panel text-text shadow-lift transition hover:-translate-y-1 hover:bg-elevated"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <div
                  className={`h-40 p-5 ${
                    index % 2 === 0
                      ? "bg-[radial-gradient(circle_at_20%_20%,rgba(21,200,200,0.55),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(244,201,93,0.42),transparent_34%),linear-gradient(135deg,#111318,#263547)]"
                      : "bg-[radial-gradient(circle_at_18%_18%,rgba(255,107,94,0.52),transparent_34%),radial-gradient(circle_at_82%_0%,rgba(119,88,209,0.52),transparent_34%),linear-gradient(135deg,#111318,#2A2037)]"
                  }`}
                >
                  <ProductIconVisual icon={product.icon} />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.useCases.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-elevated px-3 py-1 text-xs font-medium text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-6 text-muted">
                    <strong className="text-text">Tipo de cliente: </strong>
                    {product.clientType}
                  </p>
                  <ProductPriceBlock price={product.price} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <CtaBand text="Dinos qué producto tienes en mente, para quién es y cuándo lo necesitas. Te orientamos con una propuesta sencilla." />
    </PageShell>
  );
}

export function CollaboratePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Colabora"
        title="Vende con nosotros, trae ideas o propón una colaboración."
        description="Si tienes una idea, contactos, diseños o quieres vender productos personalizados con nosotros, podemos hablar y ver cómo colaborar."
        secondaryLabel="Enviar propuesta"
      />

      <MotionSection className="bg-surface px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Vías de colaboración"
            title="Formas sencillas de empezar a hablar."
            description="No hace falta traerlo todo cerrado. Con una idea clara, un contacto o una necesidad concreta ya podemos valorar el siguiente paso."
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

      <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-line/16 bg-panel p-7 shadow-lift sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
                Cuéntanos tu idea
              </p>
              <h2 className="text-balance text-3xl font-semibold text-text sm:text-4xl">
                Podemos valorar productos, diseños, contactos o una forma de vender juntos.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
                Escríbenos con lo que tienes en mente y lo revisamos con calma, sin promesas raras ni procesos pesados.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryButton href={siteConfig.whatsappUrl} variant="light">
                Hablar por WhatsApp
              </PrimaryButton>
              <a
                href={siteConfig.contactUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line/18 bg-elevated px-5 text-sm font-semibold text-text transition hover:-translate-y-1 hover:bg-aqua hover:text-ink"
              >
                <Send className="h-4 w-4" />
                Enviar propuesta
              </a>
              <a
                href={siteConfig.contactUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line/18 bg-elevated px-5 text-sm font-semibold text-text transition hover:-translate-y-1 hover:bg-coral hover:text-paper"
              >
                Contarnos tu idea
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu web, producto personalizado o colaboración."
        description="Puedes escribirnos por WhatsApp, enviar una propuesta por email o seguirnos en redes mientras preparamos los enlaces definitivos."
      />

      <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <a
            href={siteConfig.whatsappUrl}
            className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
          >
            <IconBadge icon="MessagesSquare" />
            <h2 className="mt-6 text-xl font-semibold text-text">WhatsApp</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              La forma más directa para pedir información, presupuesto o contar una idea rápida.
            </p>
          </a>
          <a
            href={siteConfig.contactUrl}
            className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
          >
            <IconBadge icon="Mail" />
            <h2 className="mt-6 text-xl font-semibold text-text">Formulario/contacto</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Para propuestas, colaboraciones o proyectos que necesitan algo más de detalle.
            </p>
          </a>
          <div className="rounded-[28px] border border-line/16 bg-panel p-6 shadow-card">
            <IconBadge icon="Sparkles" />
            <h2 className="mt-6 text-xl font-semibold text-text">Redes</h2>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              {siteConfig.socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-text">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>
    </PageShell>
  );
}


