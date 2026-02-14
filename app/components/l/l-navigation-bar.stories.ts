import type { Meta, StoryObj } from '@storybook/vue3'
import type { NavbarLinks } from '#layers/design-system/app/types'
import type { DropdownMenuItem } from '@nuxt/ui'

import UButton from '@nuxt/ui/components/Button.vue'
import { fn } from 'storybook/test'
import LNavigationBar from './l-navigation-bar.vue'

/**
 * Main navigation bar for the application.
 * Includes a search input, navigation links, notification toggle, and a user profile dropdown.
 * Built with `UDashboardNavbar` from `@nuxt/ui`.
 */
const meta = {
    title: 'Layouts/LNavigationBar',
    component: LNavigationBar,
    parameters: {
        docs: {
            description: {
                component:
                    'Main navigation bar for the application. Includes a search input, navigation links, notification toggle, and a user profile dropdown.',
            },
        },
    },
    argTypes: {
        searchTerm: {
            control: 'text',
            description: 'The search term for the search input (v-model).',
        },
        links: {
            control: 'object',
            description: 'Array of links to display in the navigation menu.',
        },
        menuItems: {
            control: 'object',
            description: 'Dropdown items for the user menu.',
        },
        hasSearch: {
            control: 'boolean',
            description: 'Whether to show the search input.',
        },
        hasNotification: {
            control: 'boolean',
            description: 'Whether to show the notification dot.',
        },
        'onOn-click-notifications': {
            table: { disable: true },
        },
    },
    args: {
        searchTerm: '',
        'onOn-click-notifications': fn(),
    },
} satisfies Meta<typeof LNavigationBar>

export default meta
type Story = StoryObj<typeof meta>

const mockLinks = [
    { label: 'Home', icon: 'i-lucide-home', to: '/' },
    { label: 'Projects', icon: 'i-lucide-folder', to: '/projects' },
    { label: 'Team', icon: 'i-lucide-users', to: '/team' },
    { label: 'Settings', icon: 'i-lucide-settings', to: '/settings' },
] satisfies NavbarLinks

const mockMenuItems = [
    [
        { label: 'My profile', icon: 'i-lucide-user', to: '/profile' },
        { label: 'Settings', icon: 'i-lucide-settings', to: '/settings' },
    ],
    [
        { label: 'Release notes', icon: 'i-lucide-megaphone' },
        { label: 'Help & Support', icon: 'i-lucide-help-circle' },
    ],
    [{ label: 'Sign out', icon: 'i-lucide-log-out' }],
] satisfies DropdownMenuItem[][]

export const Default: Story = {
    args: {
        links: mockLinks,
        menuUserName: 'John Doe',
        menuUserEmail: 'john.doe@example.com',
        menuUserAvatar: 'https://github.com/vicventum.png',
        menuItems: mockMenuItems,
        hasSearch: true,
        hasNotification: false,
    },
}

export const WithNotifications: Story = {
    args: {
        ...Default.args,
        hasNotification: true,
    },
}

export const WithoutSearch: Story = {
    args: {
        ...Default.args,
        hasSearch: false,
    },
}

export const CustomSearch: Story = {
    args: {
        ...Default.args,
        searchPlaceholder: 'Search components...',
        searchShortcut: 'K',
    },
}

export const WithRightSlot: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => ({
        components: { LNavigationBar, UButton },
        setup() {
            return { args }
        },
        template: `
            <LNavigationBar v-bind="args">
                <template #right>
                    <div class="flex items-center gap-4">
                        <UButton color="accent" variant="outline" size="sm">
                            Upgrade Plan
                        </UButton>
                    </div>
                </template>
            </LNavigationBar>
            `,
    }),
}
