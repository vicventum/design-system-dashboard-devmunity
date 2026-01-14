<script lang="jsx" setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    class: {
        type: [String, Object, Array],
        default: '',
        required: false,
    },
    classButtons: {
        type: [String, Object, Array],
        default: '',
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
    hasButtonsBlock: {
        type: Boolean,
        default: false,
        required: false,
    },
    isReverse: {
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

const classCard = computed(() => twMerge('flex gap-x-4', props.class, props.isReverse && 'flex-row-reverse'))
const classButtonsComputed = computed(() =>
    twMerge('justify-center w-[150px]', props.hasButtonsBlock && 'flex-auto', props.classButtons)
)
</script>

<template>
    <footer :class="classCard">
        <UButton
            v-if="secondaryButtonText"
            :to="secondaryButtonTo"
            :label="secondaryButtonText"
            :disabled="isSecondaryButtonDisabled"
            :class="classButtonsComputed"
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
            :class="classButtonsComputed"
            type="submit"
            trailing
            @click="$emit('on-click-primary-button')"
        />
    </footer>
</template>
