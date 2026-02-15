<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

interface Props {
    logoDefaultSrc?: string
    logoMiniSrc?: string
    logoLink?: string
    linksBody?: NavigationMenuItem[][]
    linksBodyBottom?: NavigationMenuItem[][]
    linksFooter?: NavigationMenuItem[][]
    defaultSize?: number
    minSize?: number
    maxSize?: number
}

const props = withDefaults(defineProps<Props>(), {
    logoDefaultSrc: '/media/img/ui-logo-placeholder.svg',
    logoLink: '/',
    linksBody: () => [],
    linksBodyBottom: () => [],
    linksFooter: () => [],
    defaultSize: 15,
    minSize: 10,
    maxSize: 20,
})

const isOpen = defineModel<boolean>('isOpen', { default: false })

function getLogo(collapsed?: boolean): string {
    if (!props.logoMiniSrc) return props.logoDefaultSrc
    return collapsed ? props.logoMiniSrc : props.logoDefaultSrc
}
</script>

<template>
    <UDashboardSidebar
        id="default"
        v-model:open="isOpen"
        collapsible
        resizable
        class="bg-elevated/25 relative transition-[width]"
        :ui="{ header: 'h-[120px]', footer: 'lg:border-t lg:border-default' }"
    >
        <template #header="{ collapsed }">
            <slot v-if="$slots.header" name="header" :collapsed="collapsed" />
            <div v-else class="flex h-full w-full items-start justify-center pt-4">
                <NuxtLink :to="props.logoLink">
                    <img :src="getLogo(collapsed)" height="72" class="max-h-18" />
                </NuxtLink>
            </div>
        </template>

        <template #default="{ collapsed }">
            <UDashboardSidebarCollapse
                color="primary"
                variant="solid"
                class="absolute top-[90px] right-[-20px] z-100"
            />

            <slot v-if="$slots.body" name="body" :collapsed="collapsed" />
            <template v-else>
                <UNavigationMenu
                    :collapsed="collapsed"
                    :items="linksBody || []"
                    orientation="vertical"
                    tooltip
                    popover
                    :ui="{
                        list: 'space-y-2',
                        childList: 'space-y-2',
                    }"
                />
                <UNavigationMenu
                    v-if="linksBodyBottom.length"
                    :collapsed="collapsed"
                    :items="linksBodyBottom || []"
                    orientation="vertical"
                    tooltip
                    class="mt-auto"
                    :ui="{
                        list: 'space-y-2',
                        childList: 'space-y-2',
                    }"
                />
            </template>
        </template>

        <template v-if="$slots.footer || linksFooter.length" #footer="{ collapsed }">
            <slot v-if="$slots.footer" name="footer" :collapsed="collapsed" />
            <UNavigationMenu
                v-else
                :collapsed="collapsed"
                :items="linksFooter"
                orientation="vertical"
                tooltip
                class="mt-auto w-full"
                :ui="{
                    list: 'space-y-2',
                    childList: 'space-y-2',
                }"
            />
        </template>
    </UDashboardSidebar>
</template>
