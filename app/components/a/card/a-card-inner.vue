<script setup lang="ts">
import type { Component } from 'vue'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { card } from '~/assets/css/themes/index.js'

interface Props {
    /**
     * The class to apply to the card
     * @type ClassNameValue
     */
    class?: ClassNameValue
    /**
     * The component to render the card as
     * @type string | Component
     */
    as?: string | Component
}

const props = withDefaults(defineProps<Props>(), {
    class: '',
    as: 'div',
})

defineSlots<{
    /**
     * The default slot in which all the content
     */
    default(): any
}>()

const cardClasses = computed(() => twMerge(card.slots.body, props.class))
</script>

<template>
    <component :is="as" :class="cardClasses">
        <slot />
    </component>
</template>
