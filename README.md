# Design System Dashboard Devmunity

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://design-system-dashboard-git-main-vicventums-projects.vercel.app/?path=/docs/introduction--docs) [![NPM Version](https://img.shields.io/npm/v/design-system-dashboard-devmunity?style=for-the-badge)](https://www.npmjs.com/package/design-system-dashboard-devmunity) [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge)](https://github.com/semantic-release/semantic-release) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?style=for-the-badge&logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

<hr class="mt-4" />

Este proyecto es un **Nuxt Layer** que funciona como un sistema de diseño para aplicaciones Nuxt. Contiene componentes, estilos y configuraciones compartidas.

## Uso como Nuxt Layer

Para usar este proyecto como una librería en otro proyecto de Nuxt, sigue estos pasos:

### 1. Instalación

Instala el paquete por medio de NPM (o tu gestor de paquetes preferido):

```bash
npm install design-system-dashboard-devmunity
```

### 2. Configuración en Nuxt

En el proyecto donde desees usar el sistema de diseño, añade el paquete a la propiedad `extends` en tu archivo `nuxt.config.ts`:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
    extends: ['design-system-dashboard-devmunity'],
})
```

¡Y listo! Nuxt automáticamente cargará los componentes, composables, assets y la configuración de este layer en tu proyecto.

## Desarrollo Local

Si deseas contribuir o probar este proyecto localmente:

### Instalación de dependencias

```bash
npm install
```

### Servidor de Desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

### Storybook

Para ver y probar los componentes de forma aislada:

```bash
npm run storybook
```

## Producción

Para construir el proyecto para producción (como aplicación independiente):

```bash
npm run build
```
