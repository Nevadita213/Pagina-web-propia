"use client";

import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  Handshake,
  KeyRound,
  Lightbulb,
  Mail,
  Menu,
  Moon,
  MessagesSquare,
  MonitorSmartphone,
  PackageCheck,
  PenTool,
  QrCode,
  Send,
  Settings2,
  Shirt,
  Sparkles,
  Store,
  Sun,
  UsersRound,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  benefits,
  audiences,
  customProducts,
  heroContent,
  homeLines,
  navLinks,
  packages,
  processSteps,
  projectExamples,
  requestItems,
  siteConfig,
  techServices,
  whatWeDo,
} from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  Blocks,
  BadgeCheck,
  CalendarDays,
  ChartNoAxesCombined,
  Globe2,
  Handshake,
  KeyRound,
  Lightbulb,
  Mail,
  MessagesSquare,
  MonitorSmartphone,
  PackageCheck,
  PenTool,
  QrCode,
  Settings2,
  Shirt,
  Sparkles,
  Store,
  UsersRound,
  Workflow,
};

const accentClasses = {
  aqua: "from-aqua/18 via-aqua/8 to-transparent text-aqua border-aqua/30",
  coral: "from-coral/18 via-coral/8 to-transparent text-coral border-coral/30",
  lime: "from-lime/16 via-lime/7 to-transparent text-lime border-lime/25",
};

const fadeUp = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MotionSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={`section-pad ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          tone === "dark" ? "text-paper" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            tone === "dark" ? "text-paper/78" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function IconBadge({ icon, className = "" }: { icon: string; className?: string }) {
  const Icon = icons[icon] ?? Sparkles;
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line/18 bg-ink text-paper shadow-lift dark:border-white/12 dark:bg-elevated dark:text-paper ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

export function ProductIconVisual({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  if (icon === "PackageCheck") {
    const miniIcons = [Shirt, KeyRound, PenTool];

    return (
      <div
        className={`inline-flex h-14 items-center gap-1 rounded-full border border-white/18 bg-paper/94 px-3 text-ink shadow-lift ${className}`}
        aria-hidden
      >
        {miniIcons.map((MiniIcon, index) => (
          <span key={index} className="inline-flex items-center gap-1">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-paper">
              <MiniIcon className="h-4 w-4" />
            </span>
            {index < miniIcons.length - 1 ? (
              <span className="text-sm font-black text-coral">+</span>
            ) : null}
          </span>
        ))}
      </div>
    );
  }

  const Icon = icons[icon] ?? Sparkles;
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-paper text-ink shadow-lift ${className}`}
      aria-hidden
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}

type Theme = "light" | "dark";

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    if (rootTheme === "light" || rootTheme === "dark") {
      setTheme(rootTheme);
    }
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line/20 bg-paper text-sm font-semibold text-ink shadow-lift backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-elevated dark:border-white/18 dark:bg-elevated dark:text-paper ${
        compact ? "w-10 px-0" : "px-3"
      }`}
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      title={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
    >
      {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      {compact ? null : <span>{theme === "dark" ? "Oscuro" : "Claro"}</span>}
    </button>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const classes =
    variant === "primary"
      ? "bg-paper text-ink hover:-translate-y-1 hover:bg-aqua"
      : variant === "light"
        ? "bg-ink text-paper hover:-translate-y-1 hover:bg-coral"
        : "border border-paper/24 bg-paper/8 text-paper hover:-translate-y-1 hover:bg-paper/14";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold shadow-lift transition ${classes}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-line/16 bg-panel/86 px-3 py-3 text-text shadow-lift backdrop-blur-xl sm:px-4">
        <a href="/" className="group flex min-w-fit shrink-0 items-center gap-2 sm:gap-3">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[42%] border border-white/28 bg-ink shadow-glow ring-1 ring-aqua/20 sm:h-11 sm:w-11">
            <span className="absolute inset-0 bg-gradient-to-br from-aqua/20 via-violet/16 to-coral/20" />
            <Image
              src="/jelly-logo.png"
              alt=""
              fill
              priority
              sizes="44px"
              className="relative scale-[2.15] translate-y-[18%] object-cover"
              aria-hidden
            />
          </span>
          <span className="whitespace-nowrap bg-gradient-to-r from-text via-aqua to-coral bg-clip-text text-[clamp(0.78rem,3.2vw,1.125rem)] font-black tracking-normal text-transparent drop-shadow-sm">
            {siteConfig.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-elevated hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={siteConfig.whatsappUrl}
            className="rounded-full bg-aqua px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-lime"
          >
            Pedir presupuesto
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle compact />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-elevated dark:bg-elevated dark:text-paper dark:hover:bg-line/10"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-line/18 bg-panel/94 p-3 text-text shadow-lift backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-elevated hover:text-text"
            >
              {link.label}
              <ChevronRight className="h-4 w-4" />
            </a>
          ))}
          <div className="mt-2 flex justify-center">
            <ThemeToggle />
          </div>
          <a
            href={siteConfig.whatsappUrl}
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-aqua px-4 py-3 text-sm font-semibold text-ink"
          >
            Pedir presupuesto
            <Send className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </header>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/20 bg-white/8 p-5 shadow-glow backdrop-blur-md sm:min-h-[520px]">
      <div className="noise-overlay" />
      <motion.div
        className="absolute left-[8%] top-[10%] h-28 w-28 rounded-[2rem] bg-aqua/80 blur-[1px]"
        animate={reduceMotion ? {} : { y: [0, 18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[9%] top-[16%] h-20 w-20 rounded-full bg-coral"
        animate={reduceMotion ? {} : { y: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[14%] left-[12%] h-24 w-24 rounded-full bg-lime/90"
        animate={reduceMotion ? {} : { x: [0, 14, 0], y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[9%] right-[14%] h-36 w-36 rounded-[2.2rem] bg-violet/80"
        animate={reduceMotion ? {} : { rotate: [0, -10, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-[1.5rem] border border-white/18 bg-ink/72 p-5 text-paper shadow-lift backdrop-blur-xl sm:inset-x-10 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-paper/70">Tu idea organizada</p>
            <h3 className="mt-2 text-xl font-semibold">Web, diseño y producto</h3>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-aqua text-ink">
            <Sparkles className="h-5 w-5" />
          </span>
        </div>
        <div className="grid gap-3">
          {["Idea", "Diseño", "Entrega"].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/8 p-3"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-xs font-bold text-ink">
                0{index + 1}
              </span>
              <span className="text-sm text-paper/82">{item}</span>
              <span className="ml-auto h-2 w-20 rounded-full bg-gradient-to-r from-aqua via-lime to-coral" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 pb-12 pt-24 text-paper sm:px-6 lg:px-8">
      <div className="noise-overlay" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-aqua/18 to-transparent" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-coral/18 blur-3xl" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-lime/12 blur-3xl" />

      <div className="relative mx-auto grid min-h-[80svh] max-w-7xl items-center gap-10 py-6 lg:grid-cols-[1.02fr_0.98fr] lg:py-8">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-aqua sm:text-xs">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-balance text-[clamp(1.9rem,8vw,2.75rem)] font-semibold leading-[1.08] sm:text-[clamp(2.55rem,5vw,3.3rem)] lg:text-[clamp(3rem,3.55vw,4rem)]">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/82 sm:text-xl">
            {heroContent.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={siteConfig.whatsappUrl}>{heroContent.primaryCta}</PrimaryButton>
            <PrimaryButton href="#ejemplos" variant="secondary">
              {heroContent.secondaryCta}
            </PrimaryButton>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {homeLines.map((line) => (
              <a
                key={line.href}
                href={line.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-3 py-2 text-sm font-semibold text-paper/78 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-paper"
              >
                {line.title}
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {heroContent.highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-4 py-2 text-sm text-paper/82"
              >
                <Check className="h-4 w-4 text-lime" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Tres bloques para entender rápido qué puedes pedir."
          description="Agrupamos la oferta para que no tengas que descifrar una lista de servicios. Primero presencia digital, después automatización simple y, como complemento, productos personalizados."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {whatWeDo.map((group) => (
            <motion.a
              key={group.title}
              href={group.href}
              className={`group relative overflow-hidden rounded-[28px] border bg-panel bg-gradient-to-br p-6 shadow-lift transition hover:-translate-y-1 hover:bg-elevated sm:p-8 ${
                accentClasses[group.accent as keyof typeof accentClasses]
              }`}
              whileHover={{ y: -6 }}
            >
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-current opacity-10 blur-3xl" />
              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-start">
                <IconBadge icon={group.icon} />
                <div>
                  <h3 className="text-2xl font-semibold text-text">{group.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line/16 bg-elevated/72 px-3 py-1 text-sm text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text">
                    Ver opciones
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function HomeLines() {
  return (
    <MotionSection className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeading
            eyebrow="Tres formas de trabajar con nosotros"
            title="Elige por dónde empezar."
            description="La línea digital es el punto principal: webs, menús QR y sistemas de contacto. Los productos físicos completan la marca cuando necesitas algo para eventos, regalos o promociones."
          />
          <p className="max-w-2xl text-sm leading-7 text-muted lg:justify-self-end">
            Puedes entrar por una línea concreta o combinar varias cuando tenga sentido. La idea
            es empezar por lo útil y dejar claro el siguiente paso.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {homeLines.map((line, index) => (
            <motion.a
              key={line.href}
              href={line.href}
              className={`group relative min-h-[330px] overflow-hidden rounded-[30px] border bg-panel bg-gradient-to-br p-6 shadow-lift transition hover:-translate-y-1 hover:bg-elevated sm:p-7 ${
                accentClasses[line.accent as keyof typeof accentClasses]
              }`}
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-current opacity-[0.12] blur-3xl transition group-hover:opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/[0.06] to-transparent opacity-60" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <IconBadge icon={line.icon} />
                  <span className="rounded-full border border-line/16 bg-elevated/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {line.eyebrow}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-text">{line.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{line.description}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-text">
                  {line.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Audiences() {
  return (
    <MotionSection id="para-quien" className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Para quién trabajamos"
            title="Para proyectos que necesitan verse mejor y convertir el interés en contacto."
            description="Ayudamos a negocios locales, pequeños proyectos, eventos y marcas personales que necesitan verse más profesionales, captar mejor la atención y facilitar el contacto."
          />
          <div className="grid gap-4">
            {audiences.map((audience, index) => (
              <motion.article
                key={audience.title}
                className="group relative overflow-hidden rounded-[24px] border border-line/16 bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift sm:p-6"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-aqua/10 blur-2xl transition group-hover:bg-coral/14" />
                <div className="relative flex gap-4">
                  <IconBadge icon={audience.icon} className="h-11 w-11" />
                  <div>
                    <h3 className="text-xl font-semibold text-text">{audience.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{audience.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function RequestIdeas() {
  return (
    <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionHeading
            eyebrow="Qué puedes pedirnos"
            title="Ideas concretas para empezar sin perderte en opciones."
            description="Si tienes una necesidad clara, la convertimos en una propuesta sencilla. Si solo tienes una idea, te ayudamos a darle forma."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {requestItems.map((item, index) => (
              <motion.div
                key={item}
                className="group flex min-h-20 items-start gap-3 rounded-[20px] border border-line/16 bg-panel p-4 shadow-card transition hover:-translate-y-1 hover:border-aqua/35 hover:bg-elevated hover:shadow-lift"
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.035 }}
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua/18 text-aqua transition group-hover:bg-aqua group-hover:text-ink">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-sm leading-6 text-muted group-hover:text-text">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function TechServices() {
  return (
    <MotionSection id="servicios" className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios tecnológicos"
          title="Herramientas digitales pensadas para vender, organizar y ahorrar tiempo."
          description="Cada servicio empieza con una pregunta simple: qué necesita hacer mejor tu negocio desde hoy."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {techServices.map((service, index) => (
            <motion.article
              key={service.title}
              className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift sm:p-7"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <IconBadge icon={service.icon} />
                <span className="rounded-full bg-aqua/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Digital
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-text">{service.title}</h3>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Packages() {
  return (
    <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Paquetes orientativos"
          title="Tres formas sencillas de pedir algo concreto."
          description="No son precios cerrados universales: sirven para entender alcance, preparar una propuesta clara y evitar presupuestos ambiguos."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((pack, index) => (
            <motion.article
              key={pack.title}
              className="group rounded-[28px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift sm:p-7"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <IconBadge icon={pack.icon} />
                <span className="rounded-full border border-line/16 bg-elevated/72 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {pack.note}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-text">{pack.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{pack.description}</p>
              <div className="mt-6 grid gap-3">
                {pack.includes.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua/18 text-aqua">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Products() {
  return (
    <MotionSection id="productos" className="bg-ink px-4 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Productos personalizados"
            title="Piezas físicas para regalar, vender, celebrar o reforzar tu marca."
            description="Trabajamos diseños a medida para que cada producto tenga una intención clara y un acabado coherente."
            tone="dark"
          />
          <div className="rounded-[28px] border border-white/18 bg-white/8 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-lime" />
              <p className="text-sm leading-6 text-paper/72">
                Ideales para eventos, negocios, grupos, promociones y detalles de marca personal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customProducts.map((product, index) => (
            <motion.article
              key={product.title}
              className="group overflow-hidden rounded-[28px] border border-white/20 bg-white/8 text-paper shadow-lift backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="h-36 bg-[radial-gradient(circle_at_20%_20%,rgba(21,200,200,0.55),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,107,94,0.52),transparent_34%),linear-gradient(135deg,#111318,#7758D1)] p-5">
                <ProductIconVisual icon={product.icon} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-3 text-sm leading-6 text-paper/78">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.useCases.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs font-medium text-paper/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Benefits() {
  return (
    <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Cuidamos la idea, el diseño y la utilidad sin complicarte el proceso."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[24px] border border-line/16 bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
            >
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-lime/25 text-text">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-text">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function Process() {
  return (
    <MotionSection id="proceso" className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proceso"
          title="De una idea suelta a una entrega clara en cuatro pasos."
          description="Un flujo sencillo para que sepas qué pasa en cada momento, tanto si necesitas una web como un producto personalizado."
        />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-aqua via-lime to-coral lg:block" />
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative rounded-[24px] border border-line/16 bg-panel p-6 shadow-card"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
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
  );
}

function Projects() {
  return (
    <MotionSection id="ejemplos" className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Ideas aplicadas"
          title="Ejemplos de lo que podemos crear."
          description="Algunas ideas que podemos preparar para negocios, eventos y marcas pequeñas."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectExamples.map((project, index) => (
            <article
              key={project.title}
              className="group min-h-[260px] overflow-hidden rounded-[28px] border border-line/16 bg-panel shadow-card transition hover:-translate-y-1 hover:bg-elevated hover:shadow-lift"
            >
              <div
                className={`h-28 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(135deg,#15C8C8,#B8E986)]"
                    : "bg-[linear-gradient(135deg,#FF6B5E,#F4C95D)]"
                }`}
              />
              <div className="p-5">
                <span className="rounded-full bg-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {project.type}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-text">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function FinalCta() {
  return (
    <section id="contacto" className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-ink p-7 text-paper shadow-glow sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
              Hablemos
            </p>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Cuéntanos qué necesitas y te proponemos una solución simple, con precio cerrado y próximos pasos claros.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-paper/80">
              Puede ser una web, un menú QR, una automatización, un producto personalizado o
              un pack completo. Te orientamos sin complicarte el proceso.
            </p>
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

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/20 pt-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-xl font-semibold">{siteConfig.brandName}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-paper/62">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Servicios</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href="/digital">Páginas web</a>
            <a href="/digital">Automatizaciones</a>
            <a href="/digital">Sistemas simples</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Productos</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href="/productos">Camisetas</a>
            <a href="/productos">Llaveros</a>
            <a href="/productos">Packs personalizados</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Contacto</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href={siteConfig.whatsappUrl}>WhatsApp</a>
            <a href="/contacto">Formulario/contacto</a>
            {siteConfig.socialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/20 pt-6 text-xs text-paper/44 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#">Aviso legal</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeLines />
        <WhatWeDo />
        <Audiences />
        <RequestIdeas />
        <TechServices />
        <Packages />
        <Products />
        <Benefits />
        <Process />
        <Projects />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}


