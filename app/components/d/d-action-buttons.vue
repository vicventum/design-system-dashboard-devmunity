<script lang="jsx" setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    class: {
        type: [String, Object, Array],
        default: () => '',
        required: false,
    },
    primaryButtonText: {
        type: String,
        default: '',
        required: false,
    },
    primaryButtonIcon: {
        type: String,
        default: '',
        required: false,
    },
    primaryButtonTo: {
        type: String,
        default: '',
        required: false,
    },
    primaryButtonColor: {
        type: String,
        default: 'primary',
        required: false,
    },
    secondaryButtonText: {
        type: String,
        default: '',
        required: false,
    },
    secondaryButtonTo: {
        type: String,
        default: '',
        required: false,
    },
    widthButtons: {
        type: String,
        default: 'w-[150px]',
        required: false,
    },
    isReverse: {
        type: Boolean,
        default: false,
        required: false,
    },
    isBlockButtons: {
        type: Boolean,
        default: false,
        required: false,
    },
    isPrimaryButtonDisabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    isSecondaryButtonDisabled: {
        type: Boolean,
        default: false,
        required: false,
    },
})
const emit = defineEmits(['on-click-primary-button', 'on-click-secondary-button'])

const WITH_BUTTONS_DEFAULT = 'w-[150px]'

const classCard = computed(() => twMerge('flex gap-x-4', props.class, props.isReverse && 'flex-row-reverse'))
const classButton = computed(() => [
    'justify-center',
    { 'flex-auto': props.isBlockButtons },
    props.widthButtons || WITH_BUTTONS_DEFAULT,
])
</script>

<template>
    <footer :class="classCard">
        <UButton
            v-if="secondaryButtonText"
            :to="secondaryButtonTo"
            :label="secondaryButtonText"
            :disabled="isSecondaryButtonDisabled"
            :class="classButton"
            variant="outline"
            color="neutral"
            @click="$emit('on-click-secondary-button')"
        />
        <UButton
            v-if="primaryButtonText"
            :label="primaryButtonText"
            :to="primaryButtonTo"
            :icon="primaryButtonIcon"
            :color="primaryButtonColor"
            :disabled="isPrimaryButtonDisabled"
            :class="classButton"
            type="submit"
            trailing
            @click="$emit('on-click-primary-button')"
        />
    </footer>
</template>
