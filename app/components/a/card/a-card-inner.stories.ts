import type { Meta, StoryObj } from '@storybook/vue3'
import ACardInner from './a-card-inner.vue'
import BCard from '@/components/b/card/b-card.vue'

const meta: Meta<typeof ACardInner> = {
    title: 'Atoms/Card/Inner',
    component: ACardInner,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'ACardInner component with customizable rendering element and styling.',
            },
        },
    },
    argTypes: {
        class: {
            control: 'text',
            description: 'CSS classes to apply to the card',
        },
        as: {
            control: 'select',
            options: ['div', 'section', 'article', 'main', 'aside'],
            description: 'HTML element to render as',
        },
    },
}

type Story = StoryObj<typeof meta>
export default meta

export const Default: Story = {
    args: {
        as: 'div',
    },
    render: (args) => ({
        components: { ACardInner },
        setup() {
            return { args }
        },
        template: '<a-card-inner v-bind="args">Default Content</a-card-inner>',
    }),
}

export const CustomClass: Story = {
    args: {
        as: 'section',
        class: 'bg-neutral-100 p-4 rounded-lg border border-neutral-200',
    },
    render: (args) => ({
        components: { ACardInner },
        setup() {
            return { args }
        },
        template: '<a-card-inner v-bind="args">Content with custom styling</a-card-inner>',
    }),
}

export const WithBCardComponent: Story = {
    name: 'With BCard component',
    args: {
        as: 'section',
    },
    render: (args) => ({
        components: { ACardInner, BCard },
        setup() {
            return { args }
        },
        template: `
        <b-card>
            <template #header>
                <a-card-inner>
                    <h2>BCard Header</h2>
                </a-card-inner>
            </template>

            <a-card-inner>
                <p>BCard Inner content</p>
            </a-card-inner>

            <template #footer>
                <a-card-inner>
                    <p>BCard Footer</p>
                </a-card-inner>
            </template>
        </b-card>`,
    }),
}
