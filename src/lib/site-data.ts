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
  { label: "Inicio", href: "/" },
  { label: "Digital", href: "/digital" },
  { label: "Productos físicos", href: "/productos" },
  { label: "Colabora", href: "/colabora" },
  { label: "Contacto", href: "/contacto" },
];

export const heroContent = {
  eyebrow: "Digital, creativo y a medida",
  title: "Soluciones digitales y productos personalizados",
  subtitle:
    "Creamos webs, automatizaciones y productos personalizados para que tu negocio se presente mejor, responda más rápido y deje una imagen más cuidada.",
  primaryCta: "Pedir presupuesto",
  secondaryCta: "Ver servicios",
  highlights: ["Webs claras", "Automatizaciones útiles", "Productos con identidad"],
};

export const homeLines = [
  {
    title: "Digital",
    eyebrow: "Webs y sistemas",
    icon: "MonitorSmartphone",
    description:
      "Webs, automatizaciones, formularios, menús QR y sistemas simples para negocios que quieren organizarse y vender mejor.",
    cta: "Ver soluciones digitales",
    href: "/digital",
    accent: "aqua",
  },
  {
    title: "Productos físicos",
    eyebrow: "Personalización",
    icon: "Shirt",
    description:
      "Camisetas, llaveros, packs, diseños y productos personalizados para eventos, negocios, grupos o marca personal.",
    cta: "Ver productos físicos",
    href: "/productos",
    accent: "coral",
  },
  {
    title: "Colabora",
    eyebrow: "Vende con nosotros",
    icon: "Handshake",
    description:
      "Si tienes una idea, contactos, diseños o quieres vender productos con nosotros, podemos hablar y ver cómo hacerlo.",
    cta: "Vender o colaborar",
    href: "/colabora",
    accent: "lime",
  },
];

export const whatWeDo = [
  {
    title: "Soluciones digitales",
    description:
      "Diseñamos webs, formularios, sistemas simples y automatizaciones para que tu negocio comunique mejor, reciba solicitudes y ahorre tiempo.",
    icon: "MonitorSmartphone",
    href: "/digital",
    accent: "aqua",
    items: ["Páginas web", "Automatizaciones", "Formularios y contacto", "Sistemas simples"],
  },
  {
    title: "Productos personalizados",
    description:
      "Preparamos camisetas, llaveros, diseños y packs para eventos, regalos, negocios o marca personal con una imagen coherente.",
    icon: "Sparkles",
    href: "/productos",
    accent: "coral",
    items: ["Camisetas", "Llaveros", "Diseños personalizados", "Packs para eventos"],
  },
];

export const audiences = [
  {
    title: "Negocios locales",
    icon: "Store",
    description:
      "Webs, menús digitales, formularios y sistemas simples para que tus clientes entiendan qué ofreces y contacten rápido.",
  },
  {
    title: "Eventos y grupos",
    icon: "UsersRound",
    description:
      "Camisetas, llaveros y packs personalizados para celebraciones, equipos, promociones o regalos.",
  },
  {
    title: "Marcas pequeñas",
    icon: "BadgeCheck",
    description:
      "Diseño, presencia online y productos físicos con una imagen coherente desde el primer contacto.",
  },
];

export const requestItems = [
  "Una web sencilla para presentar tu negocio.",
  "Un menú digital con QR.",
  "Un formulario de reservas, pedidos o contacto.",
  "Una automatización básica para ordenar solicitudes.",
  "Camisetas personalizadas para eventos, grupos o negocios.",
  "Llaveros personalizados para regalo, promoción o marca.",
  "Un pack combinado: web + diseño + producto físico.",
];

export const techServices = [
  {
    title: "Webs para negocios",
    icon: "Globe2",
    what: "Páginas claras, rápidas y preparadas para convertir visitas en contactos.",
    forWho: "Negocios locales, profesionales y marcas que necesitan una presencia online útil.",
    benefit:
      "Tus clientes entienden qué ofreces y pueden pedir información sin complicaciones.",
    example: "Una web para una barbería, clínica, tienda o profesional con servicios, ubicación y WhatsApp.",
  },
  {
    title: "Automatizaciones para ahorrar tiempo",
    icon: "Workflow",
    what: "Flujos simples para reducir tareas repetitivas y ordenar información.",
    forWho: "Negocios que reciben pedidos, consultas o datos y quieren gestionarlos mejor.",
    benefit:
      "Menos trabajo manual, respuestas más rápidas y procesos más fáciles de seguir.",
    example: "Un formulario que guarda solicitudes y avisa por email o WhatsApp cuando entra una nueva consulta.",
  },
  {
    title: "Contacto, reservas o pedidos",
    icon: "MessagesSquare",
    what: "Sistemas ligeros para captar solicitudes, reservas, presupuestos o pedidos.",
    forWho: "Bares, centros, comercios y servicios que necesitan organizar solicitudes.",
    benefit:
      "El usuario sabe qué hacer y tú recibes la información de forma ordenada.",
    example: "Un sistema de reserva sencilla para citas, encargos, pedidos o presupuestos.",
  },
  {
    title: "Dashboards y gestión simple",
    icon: "ChartNoAxesCombined",
    what: "Paneles sencillos para consultar datos, estados, clientes o tareas importantes.",
    forWho: "Equipos pequeños que necesitan ver información clave sin herramientas complejas.",
    benefit:
      "Mejor control del negocio con una vista práctica, visual y fácil de usar.",
    example: "Un panel para revisar pedidos, contactos recibidos, estados de encargos o tareas pendientes.",
  },
  {
    title: "Menús QR",
    icon: "QrCode",
    what: "Cartas digitales pensadas para consultarse rápido desde el móvil.",
    forWho: "Bares, cafeterías, restaurantes, food trucks o eventos con carta variable.",
    benefit: "Tus clientes acceden al menú sin descargar nada y puedes ordenar mejor la información.",
    example: "Un QR en mesa que abre bebidas, tapas, menús, alérgenos y promociones.",
  },
  {
    title: "Sistemas simples personalizados",
    icon: "Settings2",
    what: "Pequeñas herramientas adaptadas a una necesidad concreta del negocio.",
    forWho: "Proyectos que no necesitan una app grande, sino algo directo y mantenible.",
    benefit: "Resuelves un proceso específico sin pagar por una herramienta sobredimensionada.",
    example: "Un mini sistema para registrar clientes, encargos, entregas o solicitudes internas.",
  },
];

export const customProducts = [
  {
    title: "Camisetas personalizadas",
    icon: "Shirt",
    description:
      "Diseños para grupos, eventos, equipos, negocios o regalos con una estética cuidada.",
    useCases: ["Eventos", "Negocios", "Grupos"],
    clientType: "Grupos, marcas pequeñas, equipos y celebraciones.",
  },
  {
    title: "Llaveros personalizados",
    icon: "KeyRound",
    description:
      "Pequeños detalles con identidad para promociones, regalos, marcas o celebraciones.",
    useCases: ["Regalos", "Marcas", "Promociones"],
    clientType: "Negocios, eventos, regalos y detalles promocionales.",
  },
  {
    title: "Packs personalizados",
    icon: "PackageCheck",
    description:
      "Combinaciones de productos y diseño para eventos, lanzamientos o detalles de empresa.",
    useCases: ["Eventos", "Empresas", "Celebraciones"],
    clientType: "Empresas, asociaciones, eventos y marcas personales.",
  },
  {
    title: "Diseños por encargo",
    icon: "PenTool",
    description:
      "Creamos piezas visuales adaptadas a tu idea para que el resultado se sienta propio.",
    useCases: ["Marca personal", "Regalos", "Campañas"],
    clientType: "Personas, negocios y proyectos que necesitan una pieza visual concreta.",
  },
  {
    title: "Productos para eventos",
    icon: "CalendarDays",
    description:
      "Piezas personalizadas para celebraciones, equipos, actividades, sorteos o promociones.",
    useCases: ["Celebraciones", "Equipos", "Promociones"],
    clientType: "Organizadores, grupos, asociaciones y eventos locales.",
  },
  {
    title: "Productos para negocios/marca",
    icon: "Store",
    description:
      "Detalles físicos con identidad para reforzar marca, fidelizar clientes o presentar un lanzamiento.",
    useCases: ["Marca", "Clientes", "Lanzamientos"],
    clientType: "Negocios locales, creadores y pequeñas marcas.",
  },
];

export const collaborationOptions = [
  {
    title: "Tengo una idea de producto",
    icon: "Lightbulb",
    description:
      "Cuéntanos qué producto tienes en mente y vemos si puede convertirse en algo vendible, regalable o útil para una comunidad.",
  },
  {
    title: "Quiero vender con vosotros",
    icon: "Handshake",
    description:
      "Si puedes mover productos personalizados, buscamos una forma clara de colaborar sin complicar el proceso.",
  },
  {
    title: "Tengo contactos o clientes",
    icon: "UsersRound",
    description:
      "Podemos preparar propuestas para negocios, eventos o grupos que ya conoces y necesitan productos o presencia digital.",
  },
  {
    title: "Quiero colaborar en diseños",
    icon: "PenTool",
    description:
      "Si tienes estilo visual, ideas o diseños propios, podemos hablar de cómo aplicarlos a productos físicos o packs.",
  },
  {
    title: "Quiero pedir algo para mi negocio o evento",
    icon: "PackageCheck",
    description:
      "Preparamos productos personalizados, diseños o combinaciones con web para una necesidad concreta.",
  },
];

export const benefits = [
  {
    title: "Hablamos claro desde el primer mensaje",
    description: "Te ayudamos a aterrizar la idea, definir prioridades y saber por dónde empezar.",
  },
  {
    title: "No te vendemos más de lo que necesitas",
    description: "Proponemos una solución proporcional al momento real de tu proyecto.",
  },
  {
    title: "Cuidamos que se vea bien en móvil, redes y contacto",
    description: "Pensamos el diseño para los puntos donde tus clientes van a verte primero.",
  },
  {
    title: "Entregas simples y revisiones concretas",
    description: "Avanzamos con pasos claros para que puedas revisar sin perder tiempo.",
  },
  {
    title: "Diseño bonito, pero pensado para vender o captar contactos",
    description: "Priorizamos claridad, confianza y llamadas a la acción fáciles de entender.",
  },
  {
    title: "Puedes combinar web, diseño y producto físico en un mismo pack",
    description: "Unificamos la imagen digital y física para que todo se sienta coherente.",
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
    description: "Página con servicios, horarios, ubicación y botón directo de reserva.",
  },
  {
    title: "Menú digital para bar",
    type: "Digital",
    description: "Carta online con QR, categorías claras y consulta rápida desde el móvil.",
  },
  {
    title: "Camisetas para evento",
    type: "Producto",
    description: "Diseño coordinado para equipo, celebración, promoción o grupo.",
  },
  {
    title: "Llaveros personalizados",
    type: "Producto",
    description: "Detalle físico para regalo, promoción o recuerdo de marca.",
  },
];
