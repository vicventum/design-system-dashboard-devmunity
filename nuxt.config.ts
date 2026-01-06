import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [tailwindcss()],
    },

    // ui: {
    //   theme: {
    //     colors: [
    //       'primary',
    //       'secondary',
    //       'tertiary',
    //       'info',
    //       'success',
    //       'warning',
    //       'error',
    //       'test'
    //     ]
    //   }
    // },

    // components: [
    //     {
    //         path: '~/components',
    //         pathPrefix: false,
    //     },
    // ],

    // eslint: {
    //     config: {
    //         stylistic: {
    //             commaDangle: 'never',
    //             braceStyle: '1tbs',
    //         },
    //     },
    // },
})