import BModal from './b-modal.vue'

export default {
    title: 'Bases/Modal/Default',
    component: BModal,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        title: 'Modal Title',
        description: 'This is a description of the modal.',
        isOpen: false,
        primaryButtonText: 'Save',
        secondaryButtonText: 'Cancel',
        primaryButtonColor: 'primary',
    },
}

export const WithTextContent = {
    args: {
        title: 'Text Content',
        description: 'Modal with simple text content',
        text: 'This is the body text content passed via the "text" prop.',
        isOpen: true,
    },
}

export const ButtonsBlock = {
    args: {
        title: 'Block Buttons',
        description: 'Buttons are full width',
        hasButtonsBlock: true,
        isOpen: true,
        text: 'Check the buttons below.',
    },
}

export const NoFooter = {
    args: {
        title: 'No Footer',
        description: 'This modal has no footer',
        hasFooter: false,
        isOpen: true,
        text: 'Footer is hidden.',
    },
}

export const DisabledPrimary = {
    args: {
        title: 'Disabled Action',
        description: 'Primary button is disabled',
        isPrimaryButtonDisabled: true,
        isOpen: true,
        text: 'You cannot save right now.',
    },
}
