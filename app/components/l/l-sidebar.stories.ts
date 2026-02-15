import type { Meta, StoryObj } from '@storybook/vue3'
import type { NavigationMenuItem } from '@nuxt/ui'
import { fn } from 'storybook/test'
import LSidebar from './l-sidebar.vue'
import LDashboardContainer from './l-dashboard-container.vue'

/**
 * Main sidebar component for the dashboard layout.
 * Supports collapsible and resizable states, logo integration, and multiple navigation sections.
 * Built with `UDashboardSidebar` from `@nuxt/ui`.
 */
const meta = {
    title: 'Layouts/LSidebar',
    component: LSidebar,
    decorators: [
        () => ({
            components: { LDashboardContainer },
            template: `
                <div class="h-[1000px]">
                    <LDashboardContainer>
                        <template #sidebar>
                            <story />
                        </template>
                        <template #body>
                            <main class="flex-1 p-4 bg-muted/5">
                                <p class="text-sm text-subtle italic">Note: Collapsible state is managed by the UDashboardSidebar internally via its resize/collapse handle.</p>
                            </main>
                        </template>
                    </LDashboardContainer>
                </div>
            `,
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Main sidebar component for the dashboard layout. Supports collapsible and resizable states, logo integration, and multiple navigation sections.',
            },
        },
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'The open state of the sidebar (v-model:isOpen).',
        },
        logoDefaultSrc: {
            control: 'text',
            description: 'URL of the logo to show when expanded.',
        },
        logoMiniSrc: {
            control: 'text',
            description: 'URL of the logo to show when collapsed.',
        },
        logoLink: {
            control: 'text',
            description: 'URL to navigate to when clicking the logo.',
        },
        linksBody: {
            control: 'object',
            description: 'Main navigation links displayed in the upper body.',
        },
        linksBodyBottom: {
            control: 'object',
            description: 'Navigation links displayed at the bottom of the body (above footer).',
        },
        linksFooter: {
            control: 'object',
            description: 'Navigation links displayed in the footer.',
        },
    },
    args: {
        isOpen: true,
        logoDefaultSrc: 'https://placehold.co/100x100',
        logoMiniSrc: 'https://placehold.co/50x50',
        logoLink: '/',
        linksBody: [],
        linksBodyBottom: [],
        linksFooter: [],
        defaultSize: 25,
        minSize: 10,
        maxSize: 40,
    },
} satisfies Meta<typeof LSidebar>

export default meta
type Story = StoryObj<typeof meta>

const mockLinksBody: NavigationMenuItem[][] = [
    [
        {
            label: 'Dashboard',
            icon: 'i-lucide-layout-dashboard',
            to: '/',
            badge: 'New',
        },
        {
            label: 'Projects',
            icon: 'i-lucide-folder',
            to: '/projects',
            children: [
                { label: 'Web Development', to: '/projects/web' },
                { label: 'Mobile Apps', to: '/projects/mobile' },
            ],
        },
        {
            label: 'Analytics',
            icon: 'i-lucide-trending-up',
            to: '/analytics',
        },
    ],
    [
        {
            label: 'Teams',
            icon: 'i-lucide-users',
            to: '/teams',
        },
        {
            label: 'Settings',
            icon: 'i-lucide-settings',
            to: '/settings',
        },
    ],
]

const mockLinksBodyBottom: NavigationMenuItem[][] = [
    [
        {
            label: 'Documentation',
            icon: 'i-lucide-book-open',
            to: '/docs',
        },
    ],
]

const mockLinksFooter: NavigationMenuItem[][] = [
    [
        {
            label: 'Help & Support',
            icon: 'i-lucide-help-circle',
            to: '/support',
        },
        {
            label: 'Theme',
            icon: 'i-lucide-sun',
            click: fn(),
        },
    ],
]

export const Default: Story = {
    args: {
        ...meta.args,
        linksBody: mockLinksBody,
        linksBodyBottom: mockLinksBodyBottom,
        linksFooter: mockLinksFooter,
    },
}

export const Simple: Story = {
    args: {
        ...meta.args,
        linksBody: mockLinksBody.slice(0, 1),
        linksBodyBottom: [],
        linksFooter: [],
    },
}

export const CustomHeader: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => ({
        components: { LSidebar },
        setup() {
            return { args }
        },
        template: `
            <LSidebar v-bind="args">
                <template #header="{ collapsed }">
                    <div class="flex items-center justify-center h-full gap-2 px-1 italic font-bold text-primary">
                        <span v-if="!collapsed">CUSTOM LOGO</span>
                        <span v-else>CL</span>
                    </div>
                </template>
            </LSidebar>
        `,
    }),
}

export const WithBodySlot: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => ({
        components: { LSidebar },
        setup() {
            return { args }
        },
        template: `
            <LSidebar v-bind="args">
                <template #body="{ collapsed }">
                    <div v-if="!collapsed" class="p-4 space-y-4">
                        <div class="p-4 rounded-lg bg-primary/10 border border-primary/20">
                            <h4 class="text-xs font-semibold uppercase text-primary">Storage usage</h4>
                            <div class="w-full bg-default rounded-full h-1.5 mt-2">
                                <div class="bg-primary h-1.5 rounded-full" style="width: 75%"></div>
                            </div>
                            <p class="text-[10px] mt-1 text-subtle">75% of 10GB used</p>
                        </div>
                    </div>
                </template>
            </LSidebar>
        `,
    }),
}
