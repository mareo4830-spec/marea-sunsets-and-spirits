# Marea Club Landing (75)

Actúa como un desarrollador Senior especializado en React, Tailwind CSS y Framer Motion. Necesito crear una Landing Page premium, elegante y minimalista para un Beach Club de tardeo y cócteles llamado "Marea Club", situado en la ría de Huelva.
ESTÉTICA Y TEMA:
El diseño debe ser estilo editorial: limpio, sin bordes pesados ni cajas (evitar el abuso de tarjetas cerradas).
Modo Día/Noche: Implementa un botón flotante (esquina inferior derecha) para alternar el tema.
Colores Día: Fondo degradado suave (azul cielo #e0f2fe a celeste #bae6fd), textos en azul muy oscuro (#0f172a).
Colores Noche: Fondo degradado profundo (#0f172a a casi negro #020617), textos en blanco roto (#f8fafc).
ANIMACIONES (Imprescindible):
Scroll Reveal: Los textos y encabezados deben aparecer con un efecto máscara desde abajo al hacer scroll (como si salieran de una línea invisible).
Gradual Blur: Las fotos deben aparecer pasando de borroso (blur) a nítido con un movimiento ascendente suave al hacer scroll. Una vez animadas, se quedan fijas.
Botón Specular: Los botones principales deben tener un efecto interactivo donde un halo de luz suave siga al cursor del ratón por el interior del botón.
ESTRUCTURA DE LA PÁGINA:
Navegación: Menú hamburguesa arriba a la izquierda. Al hacer clic, abre un overlay oscuro a pantalla completa con los enlaces: Inicio, La Carta, Nuestras Vistas, Reservas.
Hero Section: Logo gigante en el centro (/marea-gemini/fotos/logo.jpg). Debajo, el texto animado "El Verano" y en otra línea "Que Te Llama". Subtítulo: "Cócteles & Atardeceres". Botón "Reserva tu Mesa".
La Carta: Título "Nuestros Cócteles Más Vendidos". Un grid de exactamente 3 cócteles (Piña Colada, Margarita, Atardecer Marea). Estructura: Foto cuadrada con bordes muy sutiles, título y descripción corta. Todo centrado. En móvil, este grid debe hacer scroll horizontal en lugar de apilarse verticalmente para mantener el diseño de PC. Botón secundario abajo: "Ver Carta Completa".
Reservas (Diseño Asimétrico): En el centro, el título "¿Te vienes?" con la dirección y el botón de reservas. Flotando a la izquierda (más arriba) una foto de recurso con el texto "Vistas Increíbles". Flotando a la derecha (más abajo) otra foto con "Ambiente Único".
Nuestras Vistas: Grid de fotos del local. Lógica vital: Si el usuario está en Modo Día, muestra 4 fotos luminosas. Si activa el Modo Noche, cambian dinámicamente por 4 fotos nocturnas.
Reseñas: Grid con 6 reseñas reales de Google Maps (5 estrellas, texto en cursiva, autor y antigüedad). Diseño limpio, texto sobre el fondo.
Footer (Estilo Profesional): Fondo oscuro independiente del tema. 4 columnas: 1) Logo y breve descripción. 2) Legal (Avisos, Privacidad). 3) Contacto (Teléfono y Dirección). 4) Iframe de Google Maps de la ubicación en Huelva.
Asegúrate de que el diseño sea 100% responsivo, manteniendo los botones siempre centrados y las proporciones idénticas a la versión de escritorio sin elementos superpuestos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/593e7443-df51-4a90-be4f-207030042fb0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
