import DActionButtons from './d-action-buttons.vue'

export default {
    title: 'Design/ActionButtons',
    component: DActionButtons,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
    },
}

export const Block = {
    args: {
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
        hasButtonsBlock: true,
    },
}

export const Reverse = {
    args: {
        primaryButtonText: 'Next',
        secondaryButtonText: 'Back',
        isReverse: true,
    },
}

export const DisabledPrimary = {
    args: {
        primaryButtonText: 'Save',
        secondaryButtonText: 'Cancel',
        isPrimaryButtonDisabled: true,
    },
}

export const OnlyPrimary = {
    args: {
        primaryButtonText: 'Continue',
    },
}
