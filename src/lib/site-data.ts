// Edita este archivo para cambiar textos, enlaces, servicios, productos y futuros proyectos.
// Los componentes leen estos datos para mantener la landing fácil de modificar.

export const siteConfig = {
  brandName: "IdeaForma Studio",
  tagline: "Soluciones digitales y productos personalizados",
  whatsappUrl:
    "https://wa.me/34000000000?text=Hola,%20quiero%20pedir%20informaci%C3%B3n%20sobre%20un%20proyecto",
  contactUrl: "mailto:hola@ideaforma.studio",
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export const heroContent = {
  eyebrow: "Digital, creativo y a medida",
  title: "Soluciones digitales y productos personalizados",
  subtitle:
    "Creamos soluciones digitales y productos personalizados para que tu idea se vea mejor, funcione mejor y venda mejor.",
  primaryCta: "Pedir presupuesto",
  secondaryCta: "Ver servicios",
  highlights: ["Webs claras", "Automatizaciones útiles", "Productos con identidad"],
};

export const whatWeDo = [
  {
    title: "Soluciones digitales",
    description:
      "Diseñamos webs, formularios, sistemas simples y automatizaciones para que tu negocio comunique mejor y ahorre tiempo.",
    icon: "MonitorSmartphone",
    href: "#servicios",
    accent: "aqua",
    items: ["Páginas web", "Automatizaciones", "Formularios/contacto", "Sistemas simples"],
  },
  {
    title: "Productos personalizados",
    description:
      "Creamos camisetas, llaveros, diseños y packs para eventos, regalos, negocios o marca personal.",
    icon: "Sparkles",
    href: "#productos",
    accent: "coral",
    items: ["Camisetas", "Llaveros", "Diseños personalizados", "Packs para eventos"],
  },
];

export const techServices = [
  {
    title: "Webs para negocios",
    icon: "Globe2",
    what: "Páginas claras, rápidas y preparadas para convertir visitas en contactos.",
    forWho: "Negocios locales, profesionales y marcas que necesitan presencia online.",
    benefit:
      "Tus clientes entienden qué ofreces y pueden pedir información sin complicaciones.",
  },
  {
    title: "Automatizaciones para ahorrar tiempo",
    icon: "Workflow",
    what: "Flujos simples para reducir tareas repetitivas y ordenar información.",
    forWho: "Pequeños negocios que reciben pedidos, consultas o datos a diario.",
    benefit:
      "Menos trabajo manual, respuestas más rápidas y procesos más fáciles de seguir.",
  },
  {
    title: "Contacto, reservas o pedidos",
    icon: "MessagesSquare",
    what: "Sistemas ligeros para captar solicitudes, reservas, presupuestos o pedidos.",
    forWho: "Bares, centros, comercios y servicios que necesitan organizar solicitudes.",
    benefit:
      "El usuario sabe qué hacer y tú recibes la información de forma ordenada.",
  },
  {
    title: "Dashboards y gestión simple",
    icon: "ChartNoAxesCombined",
    what: "Paneles sencillos para consultar datos, estados, clientes o tareas importantes.",
    forWho: "Equipos pequeños que necesitan ver información clave sin herramientas complejas.",
    benefit:
      "Mejor control del negocio con una vista práctica, visual y fácil de usar.",
  },
];

export const customProducts = [
  {
    title: "Camisetas personalizadas",
    icon: "Shirt",
    description:
      "Diseños para grupos, eventos, equipos, negocios o regalos con una estética cuidada.",
    useCases: ["Eventos", "Negocios", "Grupos"],
  },
  {
    title: "Llaveros personalizados",
    icon: "KeyRound",
    description:
      "Pequeños detalles con identidad para promociones, regalos, marcas o celebraciones.",
    useCases: ["Regalos", "Marcas", "Promos"],
  },
  {
    title: "Packs personalizados",
    icon: "PackageCheck",
    description:
      "Combinaciones de productos y diseño para eventos, lanzamientos o detalles de empresa.",
    useCases: ["Eventos", "Empresas", "Celebraciones"],
  },
  {
    title: "Diseños por encargo",
    icon: "PenTool",
    description:
      "Creamos piezas visuales adaptadas a tu idea para que el resultado se sienta propio.",
    useCases: ["Marca personal", "Regalos", "Campañas"],
  },
];

export const benefits = [
  { title: "Trato directo", description: "Hablamos contigo sin vueltas y aterrizamos la idea." },
  {
    title: "Soluciones adaptadas",
    description: "Proponemos lo que necesitas ahora, sin inflar el proyecto.",
  },
  {
    title: "Diseño cuidado",
    description: "Damos forma visual a cada detalle para que se vea profesional.",
  },
  { title: "Rapidez", description: "Trabajamos con procesos simples y entregas claras." },
  {
    title: "Ideas prácticas",
    description: "Buscamos que lo bonito también sea útil para vender, organizar o comunicar.",
  },
  {
    title: "Digital + personalizado",
    description: "Podemos combinar una web con productos físicos para una experiencia completa.",
  },
];

export const processSteps = [
  {
    title: "Nos cuentas la idea",
    description: "Entendemos qué quieres crear, para quién es y qué objetivo tiene.",
  },
  {
    title: "Te proponemos una solución",
    description: "Definimos alcance, estilo, materiales, contenido y próximos pasos.",
  },
  {
    title: "Creamos el diseño/producto",
    description: "Diseñamos, desarrollamos o preparamos las piezas con revisiones concretas.",
  },
  {
    title: "Lo entregamos y te ayudamos",
    description: "Te damos el resultado final y una guía simple para usarlo o pedir cambios.",
  },
];

export const projectExamples = [
  {
    title: "Web para barbería",
    type: "Digital",
    description: "Landing con servicios, horarios, galería y botón de reserva.",
  },
  {
    title: "Menú digital para bar",
    type: "Digital",
    description: "Carta online editable, rápida y pensada para móvil.",
  },
  {
    title: "Camisetas para evento",
    type: "Producto",
    description: "Diseño de camiseta para equipo, celebración o grupo.",
  },
  {
    title: "Llaveros personalizados",
    type: "Producto",
    description: "Detalle promocional con nombre, marca o diseño a medida.",
  },
];
