import type { Meta, StoryObj } from '@storybook/vue3'
import BCard, { type CardVariant } from './b-card.vue'
import ACardInner from '@/components/a/card/a-card-inner.vue'

const meta = {
    title: 'Bases/Card/Default',
    component: BCard,
    argTypes: {
        as: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: ['outline', 'solid', 'soft', 'ghost'] satisfies CardVariant[],
        },
        hasBodyExpanded: {
            control: 'boolean',
        },
        hasFooterDivider: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof BCard>

export default meta

type Story = StoryObj<typeof meta>

const template = `
  <BCard v-bind="args">
    <template #header>
      <ACardInner class="font-bold">Header</ACardInner>
    </template>
    <ACardInner>Body content goes here. It can be long.</ACardInner>
    <template #footer>
      <ACardInner class="text-sm text-gray-500">Footer content</ACardInner>
    </template>
  </BCard>
`

export const Default: Story = {
    args: {
        variant: 'outline',
        hasBodyExpanded: false,
        hasFooterDivider: true,
    },
    render: (args) => ({
        components: { BCard, ACardInner },
        setup() {
            return { args }
        },
        template,
    }),
}

export const Solid: Story = {
    args: {
        ...Default.args,
        variant: 'solid',
    },
    render: (args) => ({
        components: { BCard, ACardInner },
        setup() {
            return { args }
        },
        template,
    }),
}

export const WithExpandedBody: Story = {
    args: {
        ...Default.args,
        hasBodyExpanded: true,
    },
    render: (args) => ({
        components: { BCard, ACardInner },
        setup() {
            return { args }
        },
        template,
    }),
}

export const WithoutFooterDivider: Story = {
    args: {
        variant: 'outline',
        hasBodyExpanded: true,
        hasFooterDivider: true,
        class: 'h-64', // Force height to show expansion
    },
    render: (args) => ({
        components: { BCard, ACardInner },
        setup() {
            return { args }
        },
        template: `
        <div class="h-64">
            <BCard v-bind="args">
            <template #header>
                <ACardInner>Fixed Header</ACardInner>
            </template>
            <ACardInner>
                <p v-for="i in 10" :key="i">Scrollable content line {{ i }}</p>
            </ACardInner>
            <template #footer>
                <ACardInner>Fixed Footer</ACardInner>
            </template>
            </BCard>
        </div>
    `,
    }),
}
