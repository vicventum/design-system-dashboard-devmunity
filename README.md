# Design System Dashboard Devmunity

<div className="flex gap-2">
    <div>[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vicventum/design-system-dashboard-devmunity)</div>
    <div>[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://design-system-dashboard-git-main-vicventums-projects.vercel.app/?path=/docs/introduction--docs)</div>
</div>

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
