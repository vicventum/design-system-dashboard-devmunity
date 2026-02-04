import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import APill, { type BadgeSize, type BadgeVariant } from './a-pill.vue'
import { semanticColors } from '#layers/design-system/app/utils/util-get-colors-from-css'

const meta = {
    title: 'Atoms/Pill/APill',
    component: APill,
    parameters: {
        docs: {
            description: {
                component:
                    "A small, rounded label used to display brief information. Typically used to show a user's name next to their avatar.",
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'soft', 'subtle'] satisfies BadgeVariant[],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies BadgeSize[],
        },
        color: {
            control: 'select',
            options: Object.keys(semanticColors),
        },
        'onOn-close': {
            table: { disable: true },
        },
    },
    args: {
        'onOn-close': fn(),
    },
} satisfies Meta<typeof APill>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Design System',
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        color: 'neutral',
        variant: 'outline',
        size: 'sm',
        hasAvatar: true,
        isClosable: true,
    },
}

export const SolidPrimary: Story = {
    args: {
        ...Default.args,
        label: 'Primary Solid',
        color: 'primary',
        variant: 'solid',
        size: 'md',
    },
}

export const SoftSuccess: Story = {
    args: {
        ...Default.args,
        label: 'Success Soft',
        color: 'success',
        variant: 'soft',
        size: 'md',
    },
}

export const NoAvatar: Story = {
    args: {
        ...Default.args,
        label: 'Just Text',
        hasAvatar: false,
        color: 'neutral',
        variant: 'subtle',
    },
}

export const NotClosable: Story = {
    args: {
        ...Default.args,
        label: 'Permanent',
        isClosable: false,
    },
}
