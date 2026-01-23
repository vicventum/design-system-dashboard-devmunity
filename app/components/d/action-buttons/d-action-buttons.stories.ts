import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { semanticColors } from '@/utils/get-colors-from-css'
import DActionButtons from './d-action-buttons.vue'

const meta = {
    title: 'Design/ActionButtons',
    component: DActionButtons,
    argTypes: {
        primaryButtonColor: {
            control: 'select',
            options: Object.keys(semanticColors),
        },
        'onOn-click-primary-button': {
            table: { disable: true },
        },
        'onOn-click-secondary-button': {
            table: { disable: true },
        },
    },
    args: {
        'onOn-click-primary-button': fn(),
        'onOn-click-secondary-button': fn(),
    },
} satisfies Meta<typeof DActionButtons>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
    },
}

export const WithIcon: Story = {
    args: {
        ...Default.args,
        primaryButtonText: 'Add',
        primaryButtonIcon: 'i-lucide-plus',
    },
}

export const WithTrailingIcon: Story = {
    args: {
        primaryButtonText: 'Next',
        primaryButtonTrailingIcon: 'i-lucide-arrow-right',
        secondaryButtonText: 'Back',
    },
}

export const Block: Story = {
    args: {
        ...Default.args,
        hasButtonsBlock: true,
    },
}

export const Reverse: Story = {
    args: {
        primaryButtonText: 'Next',
        secondaryButtonText: 'Back',
        isReverse: true,
    },
}

export const DisabledPrimary: Story = {
    args: {
        ...Default.args,
        isPrimaryButtonDisabled: true,
    },
}

export const OnlyPrimaryAndUrl: Story = {
    args: {
        primaryButtonText: 'Go to home',
        primaryButtonTo: '/',
    },
}
