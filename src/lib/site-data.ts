// Edita este archivo para cambiar textos, enlaces, servicios, productos y futuros proyectos.
// Los componentes leen estos datos para mantener la landing fácil de modificar.

const contactEmail = "jellysolutions.es@gmail.com";
const instagramUrl = "https://www.instagram.com/jellysolutions.esp/";
const tiktokUrl =
  "https://www.tiktok.com/@jellysolutions.esp?is_from_webapp=1&sender_device=pc";
const facebookUrl = "https://www.facebook.com/share/1BLP9RZABJ/";

export const siteConfig = {
  brandName: "JellySolutions",
  tagline: "Webs, menús QR y productos personalizados para negocios",
  contactEmail,
  contactUrl: `mailto:${contactEmail}`,
  phone: "647900050",
  primaryContactHref: "/contacto",
  collaborationHref: "/colabora#propuesta-colaboracion",
  whatsappUrl: "https://wa.me/34647900050",
  instagramUrl,
  tiktokUrl,
  facebookUrl,
  forms: {
    // Pega aquí los endpoints reales de Formspree cuando estén creados.
    contactFormEndpoint: "",
    collaborationFormEndpoint: "",
    recommendedProductionOption: "Formspree",
  },
  socialLinks: [
    { label: "Instagram", href: instagramUrl },
    { label: "TikTok", href: tiktokUrl },
    { label: "Facebook", href: facebookUrl },
  ],
  // TODO antes de publicar: crea estas páginas o pega sus URLs reales.
  legalLinks: [
    { label: "Aviso legal", href: "" },
    { label: "Privacidad", href: "" },
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
  title: "Webs, menús QR y productos personalizados para negocios que quieren verse mejor y recibir más contactos.",
  subtitle:
    "Creamos soluciones simples para presentar tu negocio, ordenar solicitudes y reforzar tu marca sin complicarte el proceso.",
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
      "Soluciones digitales sencillas para presentar tu negocio y facilitar el contacto.",
    cta: "Ver soluciones digitales",
    href: "/digital",
    accent: "aqua",
  },
  {
    title: "Productos físicos",
    eyebrow: "Personalización",
    icon: "Shirt",
    description:
      "Productos personalizados para eventos, regalos o marca con una imagen cuidada.",
    cta: "Ver productos físicos",
    href: "/productos",
    accent: "coral",
  },
  {
    title: "Colabora",
    eyebrow: "Ideas y alianzas",
    icon: "Handshake",
    description:
      "Trae una idea, negocio, producto o propuesta conjunta y vemos si encaja.",
    cta: "Proponer colaboración",
    href: "/colabora",
    accent: "lime",
  },
];

export const homeOutcomes = [
  {
    title: "Contacto claro",
    description: "Tus clientes encuentran rápido qué ofreces, cómo escribirte y cuál es el siguiente paso.",
    icon: "MessagesSquare",
    accent: "aqua",
  },
  {
    title: "Imagen profesional",
    description: "Tu web, QR o producto físico se siente coherente con la marca y preparado para enseñar.",
    icon: "BadgeCheck",
    accent: "coral",
  },
  {
    title: "Menos mensajes desordenados",
    description: "Formularios y llamadas a la acción ayudan a recibir solicitudes completas desde el primer contacto.",
    icon: "Workflow",
    accent: "lime",
  },
  {
    title: "Pedidos y reservas más simples",
    description: "Convertimos ideas sueltas en flujos fáciles: pedir presupuesto, reservar, consultar o comprar.",
    icon: "QrCode",
    accent: "aqua",
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
    id: "webs-negocios",
    title: "Webs para negocios",
    icon: "Globe2",
    problem: "Tu negocio depende de redes o mensajes sueltos y cuesta entender qué ofreces.",
    result: "Una página clara con servicios, ubicación y contacto directo.",
    what: "Página sencilla para presentar servicios, horarios, ubicación y contacto.",
    forWho: "Negocios locales, profesionales y marcas pequeñas.",
    benefit: "Tus clientes entienden rápido qué ofreces y cómo contactar.",
    example: "Una barbería o clínica con servicios, ubicación y botón de contacto.",
    price: {
      standard: "399€",
      founder: "150€",
      discount: "62%",
    },
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones para ahorrar tiempo",
    icon: "Workflow",
    problem: "Pierdes tiempo copiando datos, avisando a mano o revisando conversaciones.",
    result: "Solicitudes guardadas y avisos básicos para tener control sin perseguir mensajes.",
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
    id: "contacto-reservas-pedidos",
    title: "Contacto, reservas o pedidos",
    icon: "MessagesSquare",
    problem: "Los clientes escriben sin datos suficientes y cada conversación empieza desde cero.",
    result: "Formularios preparados para recibir la información útil desde el primer envío.",
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
    id: "dashboards-gestion",
    title: "Dashboards y gestión simple",
    icon: "ChartNoAxesCombined",
    problem: "La información importante queda repartida entre chats, hojas y notas.",
    result: "Una vista sencilla para consultar pedidos, contactos o tareas pendientes.",
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
    id: "menus-qr",
    title: "Menús QR",
    icon: "QrCode",
    problem: "La carta cambia, se imprime demasiado o no se consulta bien desde el móvil.",
    result: "Un menú digital rápido, organizado por categorías y accesible por QR.",
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
    id: "sistemas-simples",
    title: "Sistemas simples personalizados",
    icon: "Settings2",
    problem: "Tienes un proceso concreto que no encaja bien en herramientas genéricas.",
    result: "Una herramienta pequeña, directa y fácil de mantener para ese flujo.",
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

export const digitalServiceGroups = [
  {
    title: "Presencia y contacto",
    description:
      "Para negocios que necesitan verse mejor, explicar qué ofrecen y recibir contactos de forma clara.",
    serviceIds: ["webs-negocios", "contacto-reservas-pedidos"],
  },
  {
    title: "Menús, catálogos y consulta rápida",
    description:
      "Para bares, cafeterías, tiendas o proyectos que quieren mostrar información desde el móvil sin complicaciones.",
    serviceIds: ["menus-qr"],
  },
  {
    title: "Automatización y organización",
    description:
      "Para negocios que reciben mensajes, reservas, pedidos o solicitudes y quieren ordenar la información sin depender de conversaciones sueltas.",
    serviceIds: ["automatizaciones"],
  },
  {
    title: "Control y gestión",
    description:
      "Para negocios que necesitan ver pedidos, contactos o tareas pendientes sin revisar todo manualmente.",
    serviceIds: ["dashboards-gestion"],
  },
  {
    title: "Sistemas simples a medida",
    description:
      "Para procesos concretos que no necesitan una app grande, pero sí una herramienta clara y fácil de mantener.",
    serviceIds: ["sistemas-simples"],
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
      "Botón de contacto",
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

export const productGroups = [
  {
    title: "Para eventos",
    description: "Piezas para celebraciones, equipos, actividades, promociones y recuerdos.",
    products: [
      "Camisetas personalizadas",
      "Sudaderas personalizadas",
      "Gorras personalizadas",
      "Productos para eventos",
    ],
  },
  {
    title: "Para marca/negocio",
    description: "Detalles físicos para reforzar imagen, packaging, regalos y lanzamientos.",
    products: [
      "Llaveros personalizados",
      "Tote bags personalizadas",
      "Tazas personalizadas",
      "Pegatinas personalizadas",
      "Productos para negocios/marca",
    ],
  },
  {
    title: "Diseños y packs personalizados",
    description: "Combinaciones a medida cuando quieres una idea más cerrada o un conjunto completo.",
    products: ["Packs personalizados", "Diseños por encargo"],
  },
];

export const collaborationOptions = [
  {
    title: "Idea de producto",
    icon: "Lightbulb",
    description:
      "Cuéntanos qué tienes en mente y vemos si puede convertirse en un producto, pack o proyecto viable.",
  },
  {
    title: "Negocio que digitalizar",
    icon: "Store",
    description:
      "Si tienes un local, servicio o proyecto que necesita web, formularios, QR o una presencia más clara, lo valoramos contigo.",
  },
  {
    title: "Producto físico",
    icon: "PackageCheck",
    description:
      "Podemos estudiar camisetas, packs, detalles de marca, merchandising o productos personalizados con intención comercial.",
  },
  {
    title: "Marca o proyecto",
    icon: "BadgeCheck",
    description:
      "Si quieres lanzar una marca, validar una idea o preparar una imagen mínima para salir al mercado, podemos ayudarte a ordenar el primer paso.",
  },
  {
    title: "Propuesta conjunta",
    icon: "Handshake",
    description:
      "Trae una colaboración concreta: qué aporta cada parte, para quién sería y cómo podríamos probarla sin sobredimensionarla.",
  },
  {
    title: "Canales o clientes",
    icon: "UsersRound",
    description:
      "Si tienes audiencia, contactos, clientes o capacidad comercial, podemos plantear una prueba clara y medible.",
  },
];

export const collaborationRequestTypes = [
  "Tengo una idea de producto",
  "Tengo una propuesta de colaboración",
  "Quiero digitalizar un negocio",
  "Quiero desarrollar un producto físico",
  "Quiero lanzar una marca o proyecto",
  "Quiero plantear una propuesta conjunta",
  "Tengo contactos, audiencia o clientes",
  "Otra propuesta",
];

export const collaborationSteps = [
  {
    title: "Nos cuentas qué tienes",
    description: "Idea, contactos, canal de venta, diseños o una oportunidad concreta.",
  },
  {
    title: "Valoramos si encaja",
    description: "Miramos alcance, público, esfuerzo y una forma razonable de probarlo.",
  },
  {
    title: "Definimos una colaboración simple",
    description: "Dejamos claro qué aporta cada parte y cómo se gestionan pedidos o propuestas.",
  },
  {
    title: "Probamos con algo pequeño",
    description: "Empezamos con una acción acotada antes de prometer una colaboración grande.",
  },
];

export const contactRequestTypes = [
  "Consulta general",
  "Web para negocio",
  "Menú o catálogo QR",
  "Automatización simple",
  "Producto personalizado",
  "Pack para evento",
  "Colaboración",
  "Mantenimiento o mejora de algo existente",
  "Otra consulta",
];

export const contactBudgetOptions = [
  "No lo tengo claro",
  "Menos de 100 €",
  "100 € - 300 €",
  "300 € - 600 €",
  "Más de 600 €",
];

export const contactTimelineOptions = [
  "Sin prisa",
  "Esta semana",
  "Este mes",
  "Lo antes posible",
  "Fecha concreta",
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
    title: "Web para cualquier negocio",
    type: "DIGITAL",
    description: "Una página clara para enseñar servicios, horarios, ubicación, fotos y contacto directo.",
  },
  {
    title: "Menú o catálogo QR",
    type: "DIGITAL",
    description: "Ideal para bares, cafeterías, tiendas o negocios que quieren mostrar productos sin complicaciones.",
  },
  {
    title: "Productos para eventos",
    type: "PRODUCTO",
    description: "Camisetas, llaveros, packs o detalles personalizados para grupos, celebraciones o promociones.",
  },
  {
    title: "Producto exclusivo para tu negocio",
    type: "COLABORA",
    description: "Podemos valorar una idea contigo y crear un producto propio para vender, regalar o reforzar tu marca.",
  },
];
