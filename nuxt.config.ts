// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/ui'],

    devtools: {
        enabled: true,
    },

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/': { prerender: true },
    },

    compatibilityDate: '2025-01-15',

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

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs',
            },
        },
    },
})