<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
        required: true,
    },
    value: {
        type: String,
        default: '',
        required: true,
    },
})

const styles = {
    PLANNED: {
        color: 'accent',
        variant: 'soft',
    },
    FINISHED: {
        color: 'success',
        variant: 'soft',
    },
    CANCELLED: {
        color: 'error',
        variant: 'soft',
        icon: 'material-symbols:info-outline',
    },
    OTHER: {
        color: 'neutral',
        variant: 'soft',
    },
}
const defaultStyle = styles.OTHER
</script>

<template>
    <BBadge :label="label" :value="value" :styles="styles" :default-style="defaultStyle" />
</template>
