import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import AButtonAvatarDropdown, { type ButtonSize, type AvatarSize } from './a-button-avatar-dropdown.vue'

const meta = {
    title: 'Atoms/Button/AButtonAvatarDropdown',
    component: AButtonAvatarDropdown,
    parameters: {
        docs: {
            description: {
                component:
                    'Button with avatar for drop-down menus with user information. Typically used in the navigation bar.',
            },
        },
    },
    argTypes: {
        src: {
            control: 'text',
        },
        buttonSize: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies ButtonSize[],
        },
        avatarSize: {
            control: 'select',
            options: ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] satisfies AvatarSize[],
        },
        'onOn-click': {
            table: {
                disable: true,
            },
        },
    },
    args: {
        'onOn-click': fn(),
    },
} satisfies Meta<typeof AButtonAvatarDropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonSize: 'md',
        avatarSize: 'sm',
    },
}

export const SmallButton: Story = {
    args: {
        ...Default.args,
        buttonSize: 'xs',
        avatarSize: 'xs',
    },
}

export const LargeButton: Story = {
    args: {
        ...Default.args,
        buttonSize: 'xl',
        avatarSize: 'md',
    },
}

export const WithSlot: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => ({
        components: { AButtonAvatarDropdown },
        setup() {
            return { args }
        },
        template: `
            <AButtonAvatarDropdown v-bind="args">
                <template #default>
                    <span>Victor Alvarez</span>
                </template>
            </AButtonAvatarDropdown>
        `,
    }),
}
