import type { Meta, StoryObj } from '@storybook/vue3'
import type { DropdownMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '#layers/design-system/app/types'

import LDashboardContainer, { type Unit } from './l-dashboard-container.vue'
import LSidebar from './l-sidebar.vue'
import LNavbar from './l-navbar.vue'

/**
 * High-level layout container for building dashboards.
 * It provides a structure with a sidebar area and a main panel (header + body).
 * Built with `UDashboardGroup` and `UDashboardPanel` from `@nuxt/ui`.
 */
const meta = {
    title: 'Layouts/LDashboardContainer',
    component: LDashboardContainer,
    decorators: [
        () => ({
            template: `
                <div class="h-[600px]">
                    <story />
                </div>
            `,
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'High-level layout container for building dashboards. It provides a structure with a sidebar area and a main panel (header + body).',
            },
        },
    },
    argTypes: {
        unit: {
            control: 'select',
            options: ['rem', 'px', '%'] satisfies Unit[],
            description: 'The unit used for sizing sub-components.',
        },
        id: {
            control: 'text',
            description: 'ID for the main dashboard panel.',
        },
    },
    args: {
        unit: 'rem',
        id: 'dashboard-main',
    },
} satisfies Meta<typeof LDashboardContainer>

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

const linksBody = [
    [
        { label: 'Home', icon: 'i-lucide-home', to: '/' },
        { label: 'Analytics', icon: 'i-lucide-bar-chart-3', to: '/analytics' },
        { label: 'Users', icon: 'i-lucide-users', to: '/users' },
    ],
] satisfies DropdownMenuItem[][]

export const Default: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, mockLinks, mockMenuItems, linksBody }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #header>
                        <LNavbar :links="mockLinks" :menu-items="mockMenuItems" menuUserAvatarSrc="https://placehold.co/50x50" />
                    </template>
                    <template #sidebar>
                        <LSidebar :links-body="linksBody" logo-default-src="https://placehold.co/100x100" />
                    </template>
                    <template #body>
                        <div class="p-6 h-full bg-gray-50 dark:bg-gray-950">
                            <div class="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}

export const JustNavbar: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, mockMenuItems }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #header>
                        <LNavbar :links="mockLinks" :menu-items="mockMenuItems" menuUserAvatarSrc="https://placehold.co/50x50" />
                    </template>
                    <template #body>
                        <div class="p-6 h-full bg-gray-50 dark:bg-gray-950">
                            <div class="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}

export const JustSidebar: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, linksBody }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #sidebar>
                        <LSidebar :links-body="linksBody" logo-default-src="https://placehold.co/100x100" />
                    </template>
                    <template #body>
                        <div class="p-6 h-full bg-gray-50 dark:bg-gray-950">
                            <div class="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}
