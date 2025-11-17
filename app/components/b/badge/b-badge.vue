<script lang="jsx" setup>
import { badge } from '~/assets/css/themes'

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        default: true,
    },
    styles: {
        type: Object,
        default: () => ({}),
        required: true,
    },
    defaultStyle: {
        type: Object,
        default: () => badge,
    },
})
</script>

<template>
    <UBadge :label="label" v-bind="styles[value] ?? props.defaultStyle">
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </UBadge>
</template>
