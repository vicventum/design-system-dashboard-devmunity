<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    },
})
</script>

<template>
    <div>
        <UPageHero
            title="Nuxt Starter Template"
            description="A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours."
            :links="[
                {
                    label: 'Get started',
                    to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
                    target: '_blank',
                    trailingIcon: 'i-lucide-arrow-right',
                    size: 'xl',
                },
                {
                    label: 'Use this template',
                    to: 'https://github.com/nuxt-ui-templates/starter',
                    target: '_blank',
                    icon: 'i-simple-icons-github',
                    size: 'xl',
                    color: 'neutral',
                    variant: 'subtle',
                },
            ]"
        />

        <UPageSection
            id="features"
            title="Everything you need to build modern Nuxt apps"
            description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
            :features="[
                {
                    icon: 'i-lucide-rocket',
                    title: 'Production-ready from day one',
                    description:
                        'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.',
                },
                {
                    icon: 'i-lucide-palette',
                    title: 'Beautiful by default',
                    description:
                        'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.',
                },
                {
                    icon: 'i-lucide-zap',
                    title: 'Lightning fast',
                    description:
                        'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.',
                },
                {
                    icon: 'i-lucide-blocks',
                    title: '100+ components included',
                    description:
                        'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.',
                },
                {
                    icon: 'i-lucide-code-2',
                    title: 'Developer experience first',
                    description:
                        'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.',
                },
                {
                    icon: 'i-lucide-shield-check',
                    title: 'Built for scale',
                    description:
                        'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.',
                },
            ]"
        />

        <UPageSection>
            <UPageCTA
                title="Ready to build your next Nuxt app?"
                description="Join thousands of developers building with Nuxt and Nuxt UI. Get this template and start shipping today."
                variant="subtle"
                :links="[
                    {
                        label: 'Start building',
                        to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
                        target: '_blank',
                        trailingIcon: 'i-lucide-arrow-right',
                        color: 'neutral',
                    },
                    {
                        label: 'View on GitHub',
                        to: 'https://github.com/nuxt-ui-templates/starter',
                        target: '_blank',
                        icon: 'i-simple-icons-github',
                        color: 'neutral',
                        variant: 'outline',
                    },
                ]"
            />

            <div class="flex items-center gap-2">
                <div class="bg-primary-50 size-12 space-x-2" />
                <div class="bg-primary-100 size-12 space-x-2" />
                <div class="bg-primary-200 size-12 space-x-2" />
                <div class="bg-primary-300 size-12 space-x-2" />
                <div class="bg-primary-400 size-12 space-x-2" />
                <div class="bg-primary-500 size-12 space-x-2" />
                <div class="bg-primary-600 size-12 space-x-2" />
                <div class="bg-primary-700 size-12 space-x-2" />
                <div class="bg-primary-800 size-12 space-x-2" />
                <div class="bg-primary-900 size-12 space-x-2" />
                <div class="bg-primary-950 size-12 space-x-2" />
                <div class="bg-default text-default border-default size-12 space-x-2">div</div>

                <UButton label="Button" color="test" />
                <UButton label="Button" color="primary" />
            </div>
            <p class="text-brand-blue-500 bg-primary-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil corrupti doloremque,
                natus ipsa voluptatem, eos nobis assumenda nostrum quasi, nesciunt deserunt illum ex magnam
                animi perferendis optio tempora debitis.
            </p>

            <ClientOnly v-if="!colorMode?.forced">
                <UButton
                    :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
                    color="neutral"
                    variant="ghost"
                    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
                    @click="isDark = !isDark"
                />

                <template #fallback>
                    <div class="size-8" />
                </template>
            </ClientOnly>
        </UPageSection>
    </div>
</template>
