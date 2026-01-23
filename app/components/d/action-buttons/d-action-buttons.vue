<script lang="ts" setup>
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import type { UButton } from '#components'

// Derived types from UButton component
type ButtonColor = InstanceType<typeof UButton>['$props']['color']

interface Props {
    /**
     * Text for the primary button
     */
    primaryButtonText?: string
    /**
     * Icon for the left side of primary button
     */
    primaryButtonIcon?: string
    /**
     * Icon for the right side of primary button
     */
    primaryButtonTrailingIcon?: string
    /**
     * Navigation target for the primary button
     */
    primaryButtonTo?: string
    /**
     * Color variant for the primary button
     */
    primaryButtonColor?: ButtonColor
    /**
     * Text for the secondary button
     */
    secondaryButtonText?: string
    /**
     * Navigation target for the secondary button
     */
    secondaryButtonTo?: string
    /**
     * Whether buttons should be displayed occupying all available space
     */
    hasButtonsBlock?: boolean
    /**
     * Whether to reverse the button order
     */
    isReverse?: boolean
    /**
     * Whether the primary button is disabled
     */
    isPrimaryButtonDisabled?: boolean
    /**
     * Whether the secondary button is disabled
     */
    isSecondaryButtonDisabled?: boolean
    /**
     * Additional CSS classes for the buttons
     */
    classButtons?: ClassNameValue
    /**
     * Additional CSS classes for the container
     */
    class?: ClassNameValue
}

const props = withDefaults(defineProps<Props>(), {
    primaryButtonText: '',
    primaryButtonIcon: '',
    primaryButtonTrailingIcon: '',
    primaryButtonTo: '',
    primaryButtonColor: 'primary',
    secondaryButtonText: '',
    secondaryButtonTo: '',
    hasButtonsBlock: false,
    isReverse: false,
    isPrimaryButtonDisabled: false,
    isSecondaryButtonDisabled: false,
    classButtons: '',
    class: '',
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
            :color="primaryButtonColor"
            :icon="primaryButtonIcon"
            :trailing-icon="primaryButtonTrailingIcon"
            :disabled="isPrimaryButtonDisabled"
            :class="classButtonsComputed"
            type="submit"
            @click="$emit('on-click-primary-button')"
        />
    </footer>
</template>
