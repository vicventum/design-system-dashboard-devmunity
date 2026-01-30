import type { Meta, StoryObj } from '@storybook/vue3'
import ADropdownAvatar, { type DropdownItem } from './a-dropdown-avatar.vue'
import UButton from '@nuxt/ui/components/Button.vue'
import UAvatar from '@nuxt/ui/components/Avatar.vue'
import AButtonAvatarDropdown from '@/components/a/button/a-button-avatar-dropdown.vue'

const meta = {
    title: 'Atoms/Dropdown/ADropdownAvatar',
    component: ADropdownAvatar,
    parameters: {
        docs: {
            description: {
                component:
                    'A specialized dropdown menu for displaying user information. Typically used in conjunction with the [AButtonAvatarDropdown](?path=/docs/atoms-button-abuttonavatardropdown--docs) component.',
            },
        },
    },
    render: (args) => ({
        components: { ADropdownAvatar, UButton, UAvatar, AButtonAvatarDropdown },
        setup() {
            return { args }
        },
        template: `
        <ADropdownAvatar v-bind="args">
            <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
        </ADropdownAvatar>
    `,
    }),
    argTypes: {
        userName: {
            control: 'text',
        },
        userEmail: {
            control: 'text',
        },
        userTo: {
            control: 'text',
        },
        items: {
            control: 'object',
        },
    },
} satisfies Meta<typeof ADropdownAvatar>

export default meta

type Story = StoryObj<typeof meta>

const items: DropdownItem[][] = [
    [{ label: 'Profile', icon: 'heroicons:user' }],
    [{ label: 'Settings', icon: 'heroicons:cog-6-tooth' }],
]

export const Default: Story = {
    args: {
        userName: 'John Doe',
        userEmail: 'john@example.com',
        items,
    },
}

export const WithAButtonAvatarDropdownComponent: Story = {
    name: 'With AButtonAvatarDropdown Component',
    render: (args) => ({
        components: { ADropdownAvatar, AButtonAvatarDropdown },
        setup() {
            return { args }
        },
        template: `
        <ADropdownAvatar v-bind="args">
            <span>
                <AButtonAvatarDropdown
                    label="Custom Trigger"
                    color="success"
                    trailing-icon="i-heroicons-chevron-down"
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                />
            </span>
        </ADropdownAvatar>
    `,
    }),
    args: {
        userName: 'Admin',
        userEmail: 'admin@sys.com',
        userTo: '/profile',
        items: [
            ...items,
            [
                {
                    label: 'Logout',
                    icon: 'heroicons:arrow-left-on-rectangle',
                    color: 'error',
                    trailingIcon: 'heroicons:arrow-left-on-rectangle',
                },
            ],
        ],
    },
}

export const Minimal: Story = {
    args: {
        userName: 'Jane',
        items: [[{ label: 'Logout', icon: 'heroicons:arrow-left-on-rectangle' }]],
    },
}

export const WithNavigation: Story = {
    args: {
        userName: 'Admin user',
        userEmail: 'admin@system.com',
        userTo: '/profile',
        items,
    },
}

export const CustomTrigger: Story = {
    render: (args) => ({
        components: { ADropdownAvatar, UButton },
        setup() {
            return { args }
        },
        template: `
        <ADropdownAvatar v-bind="args">
            <UButton label="Custom Trigger" color="primary" trailing-icon="i-heroicons-chevron-down" />
        </ADropdownAvatar>
    `,
    }),
    args: {
        userName: 'Custom User',
        items,
    },
}

export const CustomUserSlot: Story = {
    render: (args) => ({
        components: { ADropdownAvatar, UAvatar },
        setup() {
            return { args }
        },
        template: `
        <ADropdownAvatar v-bind="args">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" size="sm" />
            <template #user="{ item }">
            <div class="flex items-center gap-2 p-1">
                <UAvatar :src="'https://ui.nuxt.com/avatars/' + item.userName + '.png'" size="xs" />
                <div class="text-start">
                <p class="text-sm font-bold text-primary-600">Admin: {{ item.userName }}</p>
                <p class="text-xs text-gray-500">{{ item.userEmail }}</p>
                </div>
            </div>
            </template>
        </ADropdownAvatar>
    `,
    }),
    args: {
        userName: 'benjamincanac',
        userEmail: 'ben@nuxt.com',
        items,
    },
}
