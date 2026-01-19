<script lang="ts" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import type { UCard } from '#components'

// Types
export type CardVariant = InstanceType<typeof UCard>['$props']['variant']

interface Props {
    /**
     * The HTML tag to render the card as
     * @default 'div'
     */
    as?: string
    /**
     * The visual variant of the card
     * @default 'outline'
     */
    variant?: CardVariant
    /**
     * Whether the card body should expand to fill available space
     * @default false
     */
    hasBodyExpanded?: boolean
    /**
     * Whether to show a divider above the footer
     * @default true
     */
    hasFooterDivider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    as: 'article',
    variant: 'outline',
    hasBodyExpanded: false,
    hasFooterDivider: true,
})

defineSlots<{
    /**
     * The default slot in which all the content
     */
    default(): any
    /**
     * The header slot
     */
    header(): any
    /**
     * The footer slot
     */
    footer(): any
}>()

// Computed

const uiStyles = computed(() => {
    const baseStyles = {
        root: '',
        header: 'p-0 sm:p-0',
        body: 'p-0 sm:p-0',
        footer: 'p-0 sm:p-0 sm:px-0',
    }

    // Apply hasBodyExpanded styles
    if (props.hasBodyExpanded) {
        baseStyles.root = 'grid h-full grid-rows-[auto_1fr_auto]'
        // ! FIXME:
        baseStyles.body = twMerge(baseStyles.body, 'overflow-y-auto')
    }

    // Apply hasFooterDivider styles
    if (!props.hasFooterDivider) {
        baseStyles.body = twMerge(baseStyles.body, 'border-none')
    }

    return baseStyles
})
</script>

<template>
    <UCard :ui="uiStyles" :variant="variant" :as="as">
        <template v-if="$slots.header" #header>
            <slot name="header" />
        </template>
        <slot />
        <template v-if="$slots.footer" #footer>
            <slot name="footer" />
        </template>
    </UCard>
</template>
