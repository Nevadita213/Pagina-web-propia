"use client";

import {
  ArrowRight,
  BadgeCheck,
  Badge,
  Blocks,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Coffee,
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
  ShoppingBag,
  Sparkles,
  Sticker,
  Store,
  Sun,
  UsersRound,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AmbientJellyfish } from "@/components/ambient-jellyfish";
import {
  heroContent,
  homeAudienceExamples,
  homeLines,
  homeProblems,
  navLinks,
  processSteps,
  siteConfig,
} from "@/lib/site-data";

const icons: Record<string, LucideIcon> = {
  Blocks,
  Badge,
  BadgeCheck,
  CalendarDays,
  ChartNoAxesCombined,
  Coffee,
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
  ShoppingBag,
  Sparkles,
  Sticker,
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

type FounderPrice = {
  standard: string;
  founder: string;
  discount: string;
};

export function FounderPriceBlock({ price }: { price: FounderPrice }) {
  return (
    <div className="mt-6 rounded-[22px] border border-aqua/24 bg-aqua/[0.07] p-4 shadow-sm transition group-hover:border-aqua/35 group-hover:bg-aqua/[0.1]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full border border-aqua/24 bg-aqua/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-aqua">
          Primeros 2 clientes
        </span>
        <span className="text-xs font-semibold text-muted">Precio limitado de lanzamiento</span>
      </div>
      <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
          Precio estándar{" "}
          <span className="text-sm normal-case tracking-normal text-muted line-through decoration-coral/70">
            {price.standard}
          </span>
        </p>
        <p className="text-sm font-semibold text-text">
          Precio fundador{" "}
          <span className="text-2xl font-black text-aqua sm:text-[1.7rem]">
            {price.founder}
          </span>
        </p>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted">Ahorro aproximado del {price.discount}.</p>
    </div>
  );
}

export function FounderPricingNotice() {
  return (
    <div className="mt-8 rounded-[26px] border border-aqua/22 bg-aqua/[0.07] p-5 text-sm leading-7 text-muted shadow-card sm:p-6">
      <div className="mb-3 inline-flex rounded-full border border-aqua/24 bg-aqua/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-aqua">
        Oferta fundador
      </div>
      <p>
        Precios de lanzamiento para los primeros 2 clientes. A cambio del descuento,
        buscamos proyectos reales para portfolio, feedback y mejora del servicio.
        Después, los precios volverán progresivamente a tarifa estándar.
      </p>
    </div>
  );
}

type ProductPrice = {
  label: string;
  note: string;
};

export function ProductPriceBlock({
  price,
  tone = "panel",
}: {
  price: ProductPrice;
  tone?: "panel" | "dark";
}) {
  const textClass = tone === "dark" ? "text-paper" : "text-text";
  const mutedClass = tone === "dark" ? "text-paper/72" : "text-muted";

  return (
    <div className="mt-5 rounded-[20px] border border-coral/24 bg-coral/[0.08] p-4 transition group-hover:border-coral/38 group-hover:bg-coral/[0.11]">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-coral">
        Precio
      </p>
      <p className={`mt-2 text-2xl font-black ${textClass}`}>{price.label}</p>
      <p className={`mt-1 text-xs leading-5 ${mutedClass}`}>{price.note}</p>
    </div>
  );
}

export function ProductPricingNotice({ tone = "panel" }: { tone?: "panel" | "dark" }) {
  const textClass = tone === "dark" ? "text-paper/74" : "text-muted";

  return (
    <div
      className={`mt-8 rounded-[26px] border border-coral/22 bg-coral/[0.07] p-5 text-sm leading-7 shadow-card sm:p-6 ${textClass}`}
    >
      <div className="mb-3 inline-flex rounded-full border border-coral/24 bg-coral/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-coral">
        Precios desde
      </div>
      <p>
        Precios desde para personalizaciones sencillas. Personalización simple incluida.
        El precio final puede variar según producto, cantidad, diseño y disponibilidad.
        Envío no incluido.
      </p>
    </div>
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
  const pathname = usePathname();

  function isActivePath(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-hidden rounded-full border border-white/14 bg-panel/82 px-3 py-3 text-text shadow-lift ring-1 ring-aqua/10 backdrop-blur-2xl before:absolute before:inset-0 before:rounded-full before:bg-[linear-gradient(120deg,rgba(21,200,200,0.13),transparent_32%,rgba(255,107,94,0.1)_68%,transparent)] before:opacity-80 sm:px-4">
        <AmbientJellyfish density="nav" />
        <a href="/" className="group relative z-10 flex min-w-fit shrink-0 items-center gap-2 sm:gap-3">
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[42%] border border-white/28 bg-ink shadow-glow ring-1 ring-aqua/20 transition duration-300 group-hover:shadow-[0_0_34px_rgba(21,200,200,0.42)] group-hover:ring-aqua/45 sm:h-11 sm:w-11">
            <span className="absolute inset-0 bg-gradient-to-br from-aqua/20 via-violet/16 to-coral/20" />
            <Image
              src="/jelly-logo-icon.png"
              alt=""
              fill
              priority
              sizes="44px"
              className="relative object-cover"
              aria-hidden
            />
          </span>
          <span className="whitespace-nowrap bg-gradient-to-r from-text via-aqua to-coral bg-clip-text text-[clamp(0.78rem,3.2vw,1.125rem)] font-black tracking-normal text-transparent drop-shadow-sm">
            {siteConfig.brandName}
          </span>
        </a>

        <nav className="relative z-10 hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const active = isActivePath(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
                  active
                    ? "bg-aqua/10 text-text shadow-[inset_0_0_0_1px_rgba(21,200,200,0.16)]"
                    : "text-muted hover:bg-elevated/72 hover:text-text"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute bottom-1.5 left-4 right-4 h-px origin-left rounded-full bg-gradient-to-r from-aqua via-lime to-coral transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="relative z-10 hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={siteConfig.primaryContactHref}
            className="rounded-full bg-aqua px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-lime"
          >
            Pedir presupuesto
          </a>
        </div>

        <div className="relative z-10 flex items-center gap-2 lg:hidden">
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
        <div className="relative mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-white/14 bg-panel/94 p-3 text-text shadow-lift ring-1 ring-aqua/10 backdrop-blur-xl lg:hidden">
          <AmbientJellyfish density="nav" />
          <div className="relative z-10">
            {navLinks.map((link) => {
              const active = isActivePath(link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`group relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    active ? "bg-aqua/10 text-text" : "text-muted hover:bg-elevated hover:text-text"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <ChevronRight className="relative z-10 h-4 w-4" />
                  <span
                    className={`absolute bottom-2 left-4 right-12 h-px origin-left rounded-full bg-gradient-to-r from-aqua via-lime to-coral transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
            <div className="mt-2 flex justify-center">
              <ThemeToggle />
            </div>
            <a
              href={siteConfig.primaryContactHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-aqua px-4 py-3 text-sm font-semibold text-ink"
            >
              Pedir presupuesto
              <Send className="h-4 w-4" />
            </a>
          </div>
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
      <AmbientJellyfish />
      <div className="noise-overlay" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-aqua/18 to-transparent" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-coral/18 blur-3xl" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-lime/12 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[80svh] max-w-7xl items-center gap-10 py-6 lg:grid-cols-[1.02fr_0.98fr] lg:py-8">
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
            <PrimaryButton href="/digital">{heroContent.primaryCta}</PrimaryButton>
            <PrimaryButton href="/productos" variant="secondary">
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

function Audience() {
  return (
    <MotionSection className="bg-mist px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
          <SectionHeading
            eyebrow="Para quién es"
            title="Pensado para proyectos pequeños que necesitan verse claros."
            description="Podemos ayudarte si tienes un negocio, un evento, una marca pequeña o una idea que necesita estructura antes de enseñarse."
          />
          <div className="rounded-[28px] border border-line/16 bg-panel p-6 shadow-card sm:p-7">
            <IconBadge icon="UsersRound" />
            <div className="mt-6 flex flex-wrap gap-2">
              {homeAudienceExamples.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line/16 bg-elevated px-3 py-2 text-sm font-semibold text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function Problems() {
  return (
    <MotionSection className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Problemas que resolvemos"
          title="Cuando lo que haces existe, pero cuesta explicarlo bien."
          description="Ordenamos presencia, contacto, presentación y piezas personalizadas para que la gente entienda antes qué ofreces y cómo avanzar."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {homeProblems.map((problem, index) => (
            <motion.article
              key={problem}
              className="flex items-start gap-4 rounded-[24px] border border-line/16 bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:bg-elevated"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-aqua/16 text-aqua">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-base leading-7 text-muted">{problem}</p>
            </motion.article>
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
            eyebrow="Qué hacemos"
            title="Tres caminos claros según lo que necesitas."
            description="El Inicio sirve para orientarte. Si quieres detalle, cada apartado explica su parte sin mezclarlo todo en la misma página."
          />
          <p className="max-w-2xl text-sm leading-7 text-muted lg:justify-self-end">
            Trabajamos con soluciones digitales, productos físicos personalizados y propuestas de
            colaboración. Puedes entrar por una línea concreta o combinar varias cuando tenga
            sentido.
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

function Process() {
  return (
    <MotionSection id="proceso" className="bg-surface px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proceso"
          title="Un proceso simple para pasar de idea a resultado usable."
          description="Trabajamos con pasos concretos para que sepas qué se decide, qué se crea y cuándo puedes revisar."
        />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-5">
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

function FinalCta() {
  const startLinks = [
    { label: "Digital", href: "/digital", icon: "MonitorSmartphone" },
    { label: "Productos físicos", href: "/productos", icon: "Shirt" },
    { label: "Colabora", href: "/colabora", icon: "Handshake" },
    { label: "Contacto", href: "/contacto", icon: "Mail" },
  ];

  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-ink p-7 text-paper shadow-glow sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-aqua">
              Siguiente paso
            </p>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              ¿Por dónde quieres empezar?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-paper/80">
              Elige el apartado que encaja mejor con lo que tienes en mente. Si todavía no lo tienes
              claro, Contacto es el camino más directo.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {startLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex min-h-20 items-center justify-between gap-4 rounded-[22px] border border-white/18 bg-white/8 px-5 py-4 text-paper transition hover:-translate-y-1 hover:bg-white/14"
              >
                <span className="flex items-center gap-3">
                  <ProductIconVisual icon={link.icon} />
                  <span className="text-sm font-semibold">{link.label}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const visibleLegalLinks = siteConfig.legalLinks.filter((link) => link.href);

  return (
    <footer className="bg-ink px-4 py-10 text-paper sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-white/20 pt-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-xl font-semibold">{siteConfig.brandName}</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-paper/62">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Digital</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href="/digital">Webs</a>
            <a href="/digital">Menús QR</a>
            <a href="/digital">Formularios</a>
            <a href="/digital">Automatizaciones</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Productos</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href="/productos">Camisetas</a>
            <a href="/productos">Llaveros</a>
            <a href="/productos">Tazas</a>
            <a href="/productos">Packs</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Empresa</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href="/colabora">Colabora</a>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-paper">Contacto</h3>
          <div className="mt-3 grid gap-2 text-sm text-paper/60">
            <a href={siteConfig.contactUrl}>Email</a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/20 pt-6 text-xs text-paper/44 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.</p>
        {visibleLegalLinks.length > 0 ? (
          <div className="flex gap-4">
            {visibleLegalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
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
        <Audience />
        <Problems />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}


