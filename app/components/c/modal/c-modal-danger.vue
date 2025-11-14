<script lang="jsx" setup>
const props = defineProps({
    state: {
        type: Object,
        default: null,
        required: false,
    },
    schema: {
        type: Object,
        default: null,
        required: false,
    },
    title: {
        type: String,
        default: '',
        required: true,
    },
    description: {
        type: String,
        default: '',
        required: true,
    },
    text: {
        type: String,
        default: '',
        required: false,
    },
    primaryButtonText: {
        type: String,
        default: 'Eliminar',
        required: false,
    },
    secondaryButtonText: {
        type: String,
        default: 'Cancelar',
        required: false,
    },
})

const emit = defineEmits(['on-click-primary-button', 'on-click-secondary-button'])

// Model

const isOpen = defineModel({
    type: Boolean,
    default: false,
    required: true,
})
</script>

<template>
    <BModal
        v-model="isOpen"
        :title="title"
        :text="text"
        :primary-button-text="primaryButtonText"
        :secondary-button-text="secondaryButtonText"
        :state="state"
        :schema="schema"
        primary-button-color="error"
        is-block-buttons
        @on-click-primary-button="emit('on-click-primary-button')"
        @on-click-secondary-button="emit('on-click-secondary-button')"
    >
        <slot v-if="!text" />
    </BModal>
</template>
