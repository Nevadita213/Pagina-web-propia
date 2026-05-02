# JellySolutions Landing.

Landing profesional creada con Next.js, TypeScript, Tailwind CSS y Framer Motion para una marca joven que ofrece servicios digitales y productos personalizados.

## Ejecutar el proyecto

Instalación de dependencias:

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

- Nombre de la marca, email, WhatsApp opcional, redes, enlaces legales y acciones de formulario en `siteConfig`.
- Enlaces de navegación en `navLinks`.
- Textos principales del hero en `heroContent`.
- Caminos y resultados resumidos de Inicio en `homeLines` y `homeOutcomes`.
- Servicios tecnológicos en `techServices`.
- Productos personalizados en `customProducts` y su agrupación visual en `productGroups`.
- Opciones y pasos de colaboración en `collaborationOptions` y `collaborationSteps`.
- Tipos del formulario de contacto en `contactRequestTypes`.
- Beneficios en `benefits`.
- Pasos del proceso en `processSteps`.
- Ejemplos o futuros proyectos en `projectExamples`.

## Arquitectura de contenido

- Inicio funciona como resumen corto: hero, tres caminos, resultados, proceso, paquetes, ejemplos breves y CTA.
- Digital concentra el detalle de servicios digitales con problema, resultado y precio orientativo.
- Productos contiene el catálogo completo agrupado por eventos, marca/negocio y diseños o packs.
- Colabora explica vías de colaboración y un proceso simple de validación.
- Contacto incluye formulario conectado a rutas API propias para enviar a Web3Forms sin exponer la clave en frontend, con fallback `mailto:` solo si se desactiva el endpoint.

## Estructura principal

```txt
src/app/layout.tsx          Metadata y layout base
src/app/page.tsx            Página principal
src/app/digital/page.tsx    Página de productos y servicios digitales
src/app/productos/page.tsx  Página de productos físicos personalizados
src/app/colabora/page.tsx   Página para colaboraciones
src/app/contacto/page.tsx   Página de contacto
src/app/globals.css         Estilos globales y utilidades
src/components/landing-page.tsx
src/components/service-pages.tsx
src/lib/site-data.ts
```

## Personalización rápida

Antes de publicar, revisa los datos pendientes en `siteConfig`:

- `contactEmail` y `contactUrl`: correo principal visible y enlace `mailto:`.
- `socialLinks`: perfiles reales de TikTok, Instagram y Facebook.
- `whatsappUrl`: enlace real de `wa.me` para WhatsApp.
- `legalLinks`: añade URLs reales de aviso legal y privacidad cuando existan.
- `forms.contactFormEndpoint`: ruta interna para el formulario de Contacto, actualmente `/api/contact`.
- `forms.collaborationFormEndpoint`: ruta interna para el formulario de Colaborar, actualmente `/api/collaboration`.

Para enviar con Web3Forms, crea un archivo `.env.local` en la raíz del proyecto y define `WEB3FORMS_ACCESS_KEY=MI_CLAVE_REAL`. No pongas esa clave en `site-data.ts`, componentes React, HTML ni archivos públicos.

Si las rutas internas se dejan vacías en `siteConfig.forms`, los formularios mantienen fallback por email. Con las rutas activas, el envío se hace por POST a la API de Next.js, la API añade la clave en servidor y reenvía la solicitud a Web3Forms.

Para añadir un servicio o producto, duplica un objeto dentro de `techServices` o `customProducts`. Los iconos disponibles se gestionan en `src/components/landing-page.tsx`, dentro del objeto `icons`.

## Modo oscuro y claro

La web usa modo oscuro por defecto como experiencia principal. El tema se aplica antes de que cargue React desde `src/app/layout.tsx`, evitando flashes blancos al abrir la página.

El botón de tema está en el header. Guarda la preferencia en `localStorage` con la clave `theme`. Si no hay preferencia guardada, respeta `prefers-color-scheme` del sistema.

Los colores de ambos modos se editan en `src/app/globals.css`, dentro de las variables `--color-*`. Tailwind las consume desde `tailwind.config.ts` con nombres semánticos como `page`, `surface`, `panel`, `elevated`, `text`, `muted` y `line`.
