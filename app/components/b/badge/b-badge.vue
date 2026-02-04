<script lang="ts" setup>
import type { UBadge } from '#components'
// import { badge } from '#layers/design-system/app/assets/css/themes'

const appConfig = useAppConfig()

/**
 * Badge style configuration object
 */
export type BadgeSize = InstanceType<typeof UBadge>['$props']['size']
export type BadgeColor = InstanceType<typeof UBadge>['$props']['color']
export type BadgeVariant = InstanceType<typeof UBadge>['$props']['variant']

interface BadgeStyles {
    [key: string]: Partial<InstanceType<typeof UBadge>['$props']> & { [key: string]: any }
}

interface Props {
    /**
     * The label text to display on the badge
     */
    label: string
    /**
     * The active style variant key of the `styles` object
     */
    value?: string
    /**
     * Custom style settings for different badge variants. The options are derived from the props expected by `UBadge`
     */
    styles?: BadgeStyles
    /**
     * Default style configuration for the badge
     */
    defaultStyle?: BadgeStyles[string]
}

const props = withDefaults(defineProps<Props>(), {
    value: '',
    styles: () => ({}),
    // defaultStyle: () => appConfig.ui.badge,
})

defineSlots<{
    /**
     * Any dynamic slots for the badge content
     */
    [name: string]: any
}>()
</script>

<template>
    <UBadge :label="label" v-bind="styles[value] ?? props.defaultStyle">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </UBadge>
</template>
