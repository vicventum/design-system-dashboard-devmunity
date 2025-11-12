<script lang="jsx" setup>
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    as: {
        type: String,
        default: 'div',
        required: false,
    },
    variant: {
        default: 'outline',
        type: String,
        required: false,
    },
    hasBodyExpanded: {
        type: Boolean,
        default: false,
        required: false,
    },
    hasFooterDivider: {
        type: Boolean,
        default: true,
        required: false,
    },
    ui: {
        type: Object,
        default: null,
        required: false,
    },
})

// Computed

const uiStyles = computed(() => {
    const baseStyles = {
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

    // Apply custom ui prop (overrides previous styles)
    if (props.ui) {
        Object.assign(baseStyles, props.ui)
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
