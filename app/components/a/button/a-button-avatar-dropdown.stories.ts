import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import AButtonAvatarDropdown, { type ButtonSize, type AvatarSize } from './a-button-avatar-dropdown.vue'

const meta = {
    title: 'Atoms/Button/AvatarDropdown',
    component: AButtonAvatarDropdown,
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
    // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
    args: {
        'onOn-click': fn(),
    },
} satisfies Meta<typeof AButtonAvatarDropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        src: '~/../public/media/img/user-unknown.png',
        buttonSize: 'md',
        avatarSize: 'sm',
    },
}

export const LargeButton: Story = {
    args: {
        ...Default.args,
        buttonSize: 'xl',
        avatarSize: 'md',
    },
}

export const SmallButton: Story = {
    args: {
        ...Default.args,
        buttonSize: 'xs',
        avatarSize: 'xs',
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
