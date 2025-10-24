import type { Meta, StoryObj } from '@storybook/vue3'
import ACard from './a-card.vue'

const meta = {
    title: 'Components/ACard',
    component: ACard,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline', 'solid', 'soft'],
        },
        as: {
            control: 'text',
        },
        hasBodyExpanded: {
            control: 'boolean',
        },
        hasFooterDivider: {
            control: 'boolean',
        },
    },
    args: {
        variant: 'outline',
        as: 'div',
        hasBodyExpanded: false,
        hasFooterDivider: true,
    },
} satisfies Meta<typeof ACard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => ({
        components: { ACard },
        setup() {
            return { args }
        },
        template: `
        <UButton>Button</UButton>
      <ACard v-bind="args">
        <template #header>
          <div class="p-4">
            <h3 class="text-lg font-semibold">Card Header</h3>
          </div>
        </template>
        <div class="p-4">
          <p>This is the card body content.</p>
        </div>
        <template #footer>
          <div class="p-4">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
          </div>
        </template>
      </ACard>
    `,
    }),
}

export const WithoutHeader: Story = {
    render: (args) => ({
        components: { ACard },
        setup() {
            return { args }
        },
        template: `
      <ACard v-bind="args">
        <div class="p-4">
          <p>Card without header</p>
        </div>
        <template #footer>
          <div class="p-4">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
          </div>
        </template>
      </ACard>
    `,
    }),
}

export const ExpandedBody: Story = {
    args: {
        hasBodyExpanded: true,
    },
    render: (args) => ({
        components: { ACard },
        setup() {
            return { args }
        },
        template: `
      <div style="height: 400px;">
        <ACard v-bind="args">
          <template #header>
            <div class="p-4">
              <h3 class="text-lg font-semibold">Expanded Card</h3>
            </div>
          </template>
          <div class="p-4">
            <p>This card has an expanded body that fills available space.</p>
            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <template #footer>
            <div class="p-4">
              <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
            </div>
          </template>
        </ACard>
      </div>
    `,
    }),
}
