<script setup>
import { twMerge } from 'tailwind-merge'
import { card } from '~/assets/css/themes/index.js'

const props = defineProps({
    class: {
        type: [String, Object, Array],
        default: '',
        required: false,
    },
    as: {
        type: String,
        default: 'div',
        required: false,
    },
})

const cardClasses = computed(() => twMerge(card.slots.body, props.class))
</script>

<template>
    <component :is="as" :class="cardClasses">
        <slot />
    </component>
</template>
