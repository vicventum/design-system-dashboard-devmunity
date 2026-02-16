<script lang="ts" setup>
import type { DashboardGroupProps } from '@nuxt/ui/components/DashboardGroup.vue'

export type Props = DashboardGroupProps & {
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    id: 'home',
    as: 'div',
    unit: 'rem',
    storage: 'cookie',
    storageKey: 'dashboard',
    persistent: true,
})

const { id, ...groupProps } = props

defineSlots<{
    /**
     * Content for the sidebar area, typically used for navigation or group lists.
     */
    sidebar: void
    /**
     * Content for the header section of the main dashboard panel.
     */
    header: void
    /**
     * Main content area of the dashboard panel.
     */
    body: void
}>()
</script>

<template>
    <UDashboardGroup v-bind="groupProps">
        <slot name="sidebar" />

        <UDashboardPanel :id="props.id">
            <template #header>
                <slot name="header" />
            </template>

            <template #body>
                <slot name="body" />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>
