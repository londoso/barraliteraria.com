# barraliteraria.com

Sitio personal de **Carolina Barragán Ardila** — maestra en Literatura y candidata a doctora en Filosofía. Presenta su perfil, sus **publicaciones** y sus **charlas**, con interés en la literatura norteamericana y colombiana.

Construido con Vue 3 + Vite + vue-router + vue-i18n y SCSS. Diseño editorial con paleta cálida (crema, borgoña y dorado) inspirada en su retrato.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
```

## Estructura

- `src/components/` — secciones de la página (navegación, hero, sobre mí, publicaciones, charlas, contacto, pie).
- `src/assets/data/` — datos de publicaciones y charlas.
- `src/i18n/` — textos en español (por defecto) e inglés.
- `src/scss/` — tema y estilos base.
