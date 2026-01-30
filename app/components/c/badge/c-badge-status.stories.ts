import type { Meta, StoryObj } from '@storybook/vue3'
import CBadgeStatus from './c-badge-status.vue'

const meta = {
    title: 'Composites/Badge/CBadgeStatus',
    component: CBadgeStatus,
    parameters: {
        docs: {
            description: {
                component:
                    'Badge component variant of [CBadge](/docs/bases-badge-bbadge--docs), specifically for displaying the status of a task.',
            },
        },
    },
    argTypes: {
        value: {
            control: { type: 'select' },
            options: ['TODO', 'IN_PROGRESS', 'FINISHED', 'CANCELLED', 'OTHER'] satisfies string[],
        },
    },
} satisfies Meta<typeof CBadgeStatus>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Status',
        value: 'OTHER',
    },
}

export const Todo: Story = {
    args: {
        ...Default.args,
        label: 'Todo',
        value: 'TODO',
    },
}

export const InProgress: Story = {
    args: {
        ...Default.args,
        label: 'In progress',
        value: 'IN_PROGRESS',
    },
}

export const Finished: Story = {
    args: {
        ...Default.args,
        label: 'Finished',
        value: 'FINISHED',
    },
}

export const Cancelled: Story = {
    args: {
        ...Default.args,
        label: 'Cancelled',
        value: 'CANCELLED',
    },
}

export const Other: Story = {
    args: {
        ...Default.args,
        label: 'Other',
        value: 'OTHER',
    },
}
