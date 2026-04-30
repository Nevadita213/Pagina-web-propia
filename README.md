# IdeaForma Studio Landing

Landing profesional creada con Next.js, TypeScript, Tailwind CSS y Framer Motion para una marca joven que ofrece servicios digitales y productos personalizados.

## Ejecutar el proyecto

Instala dependencias:

```bash
npm install
```

Arranca el servidor de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:3000`.

Para generar una build de producción:

```bash
npm run build
```

## Dónde cambiar el contenido

El contenido editable está centralizado en:

```txt
src/lib/site-data.ts
```

Ahí puedes modificar:

- Nombre de la marca, enlaces de WhatsApp, email y redes en `siteConfig`.
- Enlaces de navegación en `navLinks`.
- Textos principales del hero en `heroContent`.
- Bloques de "Qué hacemos" en `whatWeDo`.
- Servicios tecnológicos en `techServices`.
- Productos personalizados en `customProducts`.
- Beneficios en `benefits`.
- Pasos del proceso en `processSteps`.
- Ejemplos o futuros proyectos en `projectExamples`.

## Estructura principal

```txt
src/app/layout.tsx          Metadata y layout base
src/app/page.tsx            Página principal
src/app/globals.css         Estilos globales y utilidades
src/components/landing-page.tsx
src/lib/site-data.ts
```

## Personalización rápida

Para cambiar WhatsApp, sustituye el número de `siteConfig.whatsappUrl` por el número real con prefijo internacional.

Para añadir un servicio o producto, duplica un objeto dentro de `techServices` o `customProducts`. Los iconos disponibles se gestionan en `src/components/landing-page.tsx`, dentro del objeto `icons`.

## Modo oscuro y claro

La web usa modo oscuro por defecto como experiencia principal. El tema se aplica antes de que cargue React desde `src/app/layout.tsx`, evitando flashes blancos al abrir la pagina.

El boton de tema esta en el header. Guarda la preferencia en `localStorage` con la clave `theme`. Si no hay preferencia guardada, respeta `prefers-color-scheme` del sistema.

Los colores de ambos modos se editan en `src/app/globals.css`, dentro de las variables `--color-*`. Tailwind las consume desde `tailwind.config.ts` con nombres semanticos como `page`, `surface`, `panel`, `elevated`, `text`, `muted` y `line`.
