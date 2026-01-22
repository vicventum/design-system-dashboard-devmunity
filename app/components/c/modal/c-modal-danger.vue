<script lang="ts" setup>
import type { BModal } from '#components'

interface Props {
    /**
     * The state object for form management
     */
    state?: Record<string, any> | null
    /**
     * The schema for form validation
     */
    schema?: Record<string, any> | null
    /**
     * The title of the modal
     */
    title: string
    /**
     * The description of the modal
     */
    description: string
    /**
     * Text for the main content when it is not necessary to use the slot with more complex markup
     */
    text?: string
    /**
     * Text for the primary button
     */
    primaryButtonText?: string
    /**
     * Text for the secondary button
     */
    secondaryButtonText?: string
}

const props = withDefaults(defineProps<Props>(), {
    state: null,
    schema: null,
    text: '',
    primaryButtonText: 'Eliminar',
    secondaryButtonText: 'Cancelar',
})

const emit = defineEmits<{
    /**
     * Emitted when the primary button is clicked
     */
    (e: 'on-click-primary-button'): void
    /**
     * Emitted when the secondary button is clicked
     */
    (e: 'on-click-secondary-button'): void
}>()

defineSlots<{
    /**
     * Default body content when no text is provided
     */
    default?(): any
}>()

// Model

const isOpen = defineModel<boolean>({
    default: false,
    required: true,
})
</script>

<template>
    <BModal
        v-model="isOpen"
        :title="title"
        :description="description"
        :text="text"
        :primary-button-text="primaryButtonText"
        :secondary-button-text="secondaryButtonText"
        :state="state"
        :schema="schema"
        primary-button-color="error"
        has-buttons-block
        @on-click-primary-button="emit('on-click-primary-button')"
        @on-click-secondary-button="emit('on-click-secondary-button')"
    >
        <slot v-if="!text" />
    </BModal>
</template>
