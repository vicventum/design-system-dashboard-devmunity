import type { Meta, StoryObj } from '@storybook/vue3'
import CBadgeStatus from './c-badge-status.vue'

const meta = {
    title: 'Composites/Badge/Status',
    component: CBadgeStatus,
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
        label: 'In Progress',
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
