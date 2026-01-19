import type { Meta, StoryObj } from '@storybook/vue3'
import BBadge, { type BadgeSize, type BadgeColor, type BadgeVariant } from './b-badge.vue'

const meta = {
    title: 'Bases/Badge/Default',
    component: BBadge,
    argTypes: {
        value: {
            control: 'select',
            options: ['active', 'inactive', 'error', ''] satisfies string[],
        },
        // @ts-ignore
        name: {
            name: '[slot name]',
            description: 'Any dynamic slot for the badge',
        },
    },
} satisfies Meta<typeof BBadge>

export default meta

type Story = StoryObj<typeof meta>

const styles = {
    active: {
        color: 'primary' as BadgeColor,
        variant: 'solid' as BadgeVariant,
        icon: 'heroicons:check-20-solid',
    },
    inactive: { color: 'neutral' as BadgeColor, variant: 'subtle' as BadgeVariant },
    error: {
        color: 'error' as BadgeColor,
        variant: 'soft' as BadgeVariant,
        icon: 'heroicons:x-circle-20-solid',
    },
}

export const Default: Story = {
    args: {
        label: 'Default Style',
        value: 'unknown',
        styles,
        defaultStyle: { color: 'neutral' as BadgeColor, variant: 'outline' as BadgeVariant },
    },
}

export const Active: Story = {
    args: {
        ...Default.args,
        label: 'Active Item',
        value: 'active',
    },
}

export const Inactive: Story = {
    args: {
        ...Default.args,
        label: 'Inactive Item',
        value: 'inactive',
    },
}

export const ErrorState: Story = {
    args: {
        ...Default.args,
        label: 'Error Occurred',
        value: 'error',
    },
}
