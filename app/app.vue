<script setup lang="ts">
useHead({
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', href: '/favicon.ico' }],
    htmlAttrs: {
        lang: 'en',
    },
})

const title = 'Design System Playground'
const description =
    'A professional design system built with Nuxt UI.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/dashboard-light.png',
    twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/dashboard-light.png',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
