<script lang="ts" setup>
import type { UDashboardGroup } from '#components'

export type Unit = InstanceType<typeof UDashboardGroup>['$props']['unit']
interface Props {
    unit?: Unit
    id?: string
}

const props = withDefaults(defineProps<Props>(), {
    unit: 'rem',
    id: 'home',
})
</script>

<template>
    <UDashboardGroup :unit="props.unit">
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
