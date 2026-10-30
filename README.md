# Portafolio Bruce — Evaluación final de Desarrollo Web

Sitio web personal adaptable de **Bruce Villalobos Vilcamiza**, construido con **HTML5, CSS3 y Bootstrap 5.3**.
Parte del producto de la evaluación parcial y lo amplía con Bootstrap, animaciones CSS, accesibilidad y ajustes de usuario.

**Sitio publicado:** https://brucevillalobos.github.io/portafolio-bruce-bootstrap/

## Estructura

```
index.html · sobre-mi.html · proyectos.html · habilidades.html · contacto.html
proyectos/   curso-html.html · menu-digital.html · resenas.html
css/styles.css   (personalización sobre Bootstrap)
js/              tema.js · ajustes.js · menu.js · formulario.js
img/ · favicon.svg
```

## Criterio 1 — HTML

- Estructura semántica: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` y jerarquía de encabezados h1 → h3.
- Accesibilidad: enlace "Saltar al contenido", `aria-current` en el enlace activo, `alt` en las imágenes, `label` en todos los campos, foco visible, contraste AA y `role="switch"` en el modo oscuro. Auditado con axe-core sin errores.
- Navegación principal y de site-footer de página, más enlaces de anterior/siguiente en los proyectos.
- Configuración útil para el usuario (menú **Ajustes**): modo oscuro y tamaño del texto (A−, A, A+), guardados en el navegador. Respeta `prefers-color-scheme` y `prefers-reduced-motion`.
- Estructura creativa: línea de tiempo en *Sobre mí* y filtro por categoría en el *Menú digital*.
- Optimización: imágenes livianas con `width` y `height`, carga diferida fuera de pantalla y fuentes con `display=swap`.
- Formulario con validación de Bootstrap, mensajes de error y correo prellenado.

## Criterio 2 — CSS con Bootstrap

**Bootstrap:** grid responsive, navbar con menú colapsable, cards, accordion, progress, badges, dropdown, formularios y utilidades.

**Fuentes personalizadas:** Poppins (texto) y Playfair Display (títulos), de Google Fonts.

**5 animaciones CSS con `@keyframes`:**

| # | Animación | Dónde |
|---|-----------|-------|
| 1 | `degradado` — fondo que se mueve | portada |
| 2 | `flotar` — foto que flota | portada de *Inicio* |
| 3 | `llenar` — barras que se llenan | *Habilidades* |
| 4 | `pulso` — anillo que pulsa | botón flotante de WhatsApp |
| 5 | `aparecer` — contenido que entra al hacer scroll | todas las páginas |

**Animaciones de interacción:** `rebote` (clic en un filtro), `latido` (mouse sobre WhatsApp), `entra` (contenido que aparece al filtrar o enviar el formulario) y el despliegue del menú **Ajustes** y del acordeón.

**Transiciones suaves de color y posición:** botones, tarjetas, subrayado del menú, interruptor del modo oscuro, engranaje de Ajustes y puntos de la línea de tiempo.

**Movimiento reducido:** con `prefers-reduced-motion` se apagan solo las animaciones infinitas; las demás se mantienen solo con desvanecimiento.
