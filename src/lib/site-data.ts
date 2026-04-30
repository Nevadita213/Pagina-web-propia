// Edita este archivo para cambiar textos, enlaces, servicios, productos y futuros proyectos.
// Los componentes leen estos datos para mantener la landing fácil de modificar.

export const siteConfig = {
  brandName: "JellySolutions",
  tagline: "Webs, menús QR y productos personalizados para negocios",
  whatsappUrl:
    "https://wa.me/34000000000?text=Hola,%20quiero%20pedir%20informaci%C3%B3n%20sobre%20un%20proyecto",
  contactUrl: "mailto:hola@jellysolutions.es",
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
  eyebrow: "Web, contacto y marca a medida",
  title: "Webs, menús QR y productos personalizados para negocios que quieren verse mejor y captar más contactos.",
  subtitle:
    "Creamos páginas claras, formularios, automatizaciones simples y productos con identidad para negocios, eventos y marcas pequeñas.",
  primaryCta: "Pedir presupuesto",
  secondaryCta: "Ver ejemplos",
  highlights: ["Webs y menús QR", "Formularios y automatización", "Productos personalizados"],
};

export const homeLines = [
  {
    title: "Digital",
    eyebrow: "Webs y sistemas",
    icon: "MonitorSmartphone",
    description:
      "Webs, menús QR, formularios y sistemas simples para presentar tu negocio y recibir más contactos.",
    cta: "Ver soluciones digitales",
    href: "/digital",
    accent: "aqua",
  },
  {
    title: "Productos físicos",
    eyebrow: "Personalización",
    icon: "Shirt",
    description:
      "Camisetas, llaveros y packs para eventos, promociones, regalos o negocios que cuidan su marca.",
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
    title: "Presencia digital",
    description:
      "Webs para negocios, menús QR y formularios de contacto, reservas o pedidos.",
    icon: "MonitorSmartphone",
    href: "/digital",
    accent: "aqua",
    items: ["Webs para negocios", "Menús QR", "Formularios", "Reservas o pedidos"],
  },
  {
    title: "Automatización simple",
    description:
      "Guardamos solicitudes, enviamos avisos al dueño y organizamos pedidos, reservas o contactos.",
    icon: "Workflow",
    href: "/digital",
    accent: "lime",
    items: ["Avisos", "Hojas o sistemas", "Dashboards básicos", "Pedidos ordenados"],
  },
  {
    title: "Productos personalizados",
    description:
      "Camisetas, llaveros, packs para eventos, diseños personalizados y productos para marca.",
    icon: "Sparkles",
    href: "/productos",
    accent: "coral",
    items: ["Camisetas", "Llaveros", "Packs", "Diseños a medida"],
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
    what: "Página sencilla para presentar servicios, horarios, ubicación y contacto.",
    forWho: "Negocios locales, profesionales y marcas pequeñas.",
    benefit: "Tus clientes entienden rápido qué ofreces y cómo contactar.",
    example: "Una barbería o clínica con servicios, ubicación y botón de WhatsApp.",
    price: {
      standard: "399€",
      founder: "150€",
      discount: "62%",
    },
  },
  {
    title: "Automatizaciones para ahorrar tiempo",
    icon: "Workflow",
    what: "Flujos básicos para guardar solicitudes y enviar avisos.",
    forWho: "Negocios que reciben consultas, reservas o pedidos.",
    benefit: "Menos trabajo manual y más control de cada solicitud.",
    example: "Un formulario que guarda datos en una hoja y avisa al dueño.",
    price: {
      standard: "349€",
      founder: "desde 120€",
      discount: "66%",
    },
  },
  {
    title: "Contacto, reservas o pedidos",
    icon: "MessagesSquare",
    what: "Formulario claro para recibir información útil desde la web.",
    forWho: "Servicios, comercios, centros y proyectos con atención directa.",
    benefit: "Recibes datos ordenados y reduces mensajes incompletos.",
    example: "Reserva de cita, pedido simple o solicitud de presupuesto.",
    price: {
      standard: "299€",
      founder: "desde 80€",
      discount: "73%",
    },
  },
  {
    title: "Dashboards y gestión simple",
    icon: "ChartNoAxesCombined",
    what: "Vista básica para consultar pedidos, contactos o tareas.",
    forWho: "Equipos pequeños que necesitan ver información clave.",
    benefit: "Sabes qué está pendiente sin revisar mensajes uno a uno.",
    example: "Panel de pedidos recibidos y estado de cada encargo.",
    price: {
      standard: "699€",
      founder: "desde 220€",
      discount: "69%",
    },
  },
  {
    title: "Menús QR",
    icon: "QrCode",
    what: "Carta digital rápida para consultar desde el móvil.",
    forWho: "Bares, cafeterías, restaurantes, food trucks o eventos.",
    benefit: "El cliente accede por QR sin descargar nada.",
    example: "Bebidas, tapas, menús, alérgenos y promociones.",
    price: {
      standard: "149€",
      founder: "desde 70€",
      discount: "53%",
    },
  },
  {
    title: "Sistemas simples personalizados",
    icon: "Settings2",
    what: "Herramienta pequeña para resolver un proceso concreto.",
    forWho: "Negocios que no necesitan una app grande.",
    benefit: "Tienes una solución directa y fácil de mantener.",
    example: "Registro de clientes, encargos, entregas o solicitudes.",
    price: {
      standard: "899€",
      founder: "desde 300€",
      discount: "67%",
    },
  },
];

export const packages = [
  {
    title: "Web básica",
    icon: "Globe2",
    description:
      "Página clara para presentar tu negocio, servicios, horarios, ubicación y contacto.",
    includes: [
      "Diseño responsive",
      "Secciones principales",
      "Botón de WhatsApp o contacto",
      "Preparada para verse bien en móvil",
    ],
    note: "Precio según alcance",
  },
  {
    title: "Menú QR / formulario",
    icon: "QrCode",
    description:
      "Sistema sencillo para que tus clientes consulten información, pidan presupuesto, reserven o contacten.",
    includes: [
      "Menú digital o formulario",
      "Categorías claras",
      "Enlace directo por QR",
      "Información organizada",
    ],
    note: "Desde presupuesto cerrado",
  },
  {
    title: "Pack completo",
    icon: "PackageCheck",
    description:
      "Web + formulario o menú QR + producto personalizado para mantener una imagen cuidada.",
    includes: [
      "Presencia digital",
      "Sistema de contacto o pedidos",
      "Diseño adaptado a la marca",
      "Opción de añadir camisetas, llaveros o packs físicos",
    ],
    note: "Precio según alcance",
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
    price: {
      label: "Desde 12€",
      note: "Personalización simple incluida.",
    },
  },
  {
    title: "Sudaderas personalizadas",
    icon: "Shirt",
    description:
      "Sudaderas personalizadas para grupos, eventos, equipos, negocios o regalos.",
    useCases: ["Grupos", "Eventos", "Regalos"],
    clientType: "Grupos, equipos, negocios y celebraciones.",
    price: {
      label: "Desde 25€",
      note: "Según diseño y cantidad.",
    },
  },
  {
    title: "Gorras personalizadas",
    icon: "Badge",
    description:
      "Gorras personalizadas para eventos, marcas, equipos o detalles promocionales.",
    useCases: ["Eventos", "Marca", "Equipos"],
    clientType: "Negocios, grupos, eventos y pequeñas marcas.",
    price: {
      label: "Desde 8€",
      note: "Según diseño y cantidad.",
    },
  },
  {
    title: "Llaveros personalizados",
    icon: "KeyRound",
    description:
      "Pequeños detalles con identidad para promociones, regalos, marcas o celebraciones.",
    useCases: ["Regalos", "Marcas", "Promociones"],
    clientType: "Negocios, eventos, regalos y detalles promocionales.",
    price: {
      label: "Desde 8€",
      note: "Según diseño y cantidad.",
    },
  },
  {
    title: "Packs personalizados",
    icon: "PackageCheck",
    description:
      "Combina camisetas, llaveros, diseños y otros detalles para crear un pack a medida para eventos, negocios o regalos.",
    useCases: ["Eventos", "Empresas", "Celebraciones"],
    clientType: "Empresas, asociaciones, eventos y marcas personales.",
    price: {
      label: "Presupuesto a medida",
      note: "Según productos, cantidades y personalización.",
    },
  },
  {
    title: "Diseños por encargo",
    icon: "PenTool",
    description:
      "Creamos piezas visuales adaptadas a tu idea para que el resultado se sienta propio.",
    useCases: ["Marca personal", "Regalos", "Campañas"],
    clientType: "Personas, negocios y proyectos que necesitan una pieza visual concreta.",
    price: {
      label: "Desde 15€",
      note: "Según complejidad del diseño y número de piezas.",
    },
  },
  {
    title: "Tote bags personalizadas",
    icon: "ShoppingBag",
    description:
      "Bolsas personalizadas para regalos, eventos, marcas o promociones.",
    useCases: ["Regalos", "Eventos", "Marca"],
    clientType: "Negocios, eventos, asociaciones y marcas pequeñas.",
    price: {
      label: "Desde 10€",
      note: "Según diseño y cantidad.",
    },
  },
  {
    title: "Tazas personalizadas",
    icon: "Coffee",
    description:
      "Tazas personalizadas para regalos, equipos, negocios o detalles de marca.",
    useCases: ["Regalos", "Marca", "Equipos"],
    clientType: "Personas, negocios, equipos y celebraciones.",
    price: {
      label: "Desde 9€",
      note: "Según diseño y cantidad.",
    },
  },
  {
    title: "Pegatinas personalizadas",
    icon: "Sticker",
    description:
      "Pegatinas personalizadas para marcas, eventos, packaging o promociones.",
    useCases: ["Marca", "Packaging", "Promociones"],
    clientType: "Negocios, creadores, eventos y marcas pequeñas.",
    price: {
      label: "Desde 4€",
      note: "Según formato, cantidad y diseño.",
    },
  },
  {
    title: "Productos para eventos",
    icon: "CalendarDays",
    description:
      "Piezas personalizadas para celebraciones, equipos, actividades, sorteos o promociones.",
    useCases: ["Celebraciones", "Equipos", "Promociones"],
    clientType: "Organizadores, grupos, asociaciones y eventos locales.",
    price: {
      label: "Desde 30€",
      note: "Según cantidad, tipo de producto y personalización.",
    },
  },
  {
    title: "Productos para negocios/marca",
    icon: "Store",
    description:
      "Detalles físicos con identidad para reforzar marca, fidelizar clientes o presentar un lanzamiento.",
    useCases: ["Marca", "Clientes", "Lanzamientos"],
    clientType: "Negocios locales, creadores y pequeñas marcas.",
    price: {
      label: "Desde 30€",
      note: "Según producto, cantidad y nivel de personalización.",
    },
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
