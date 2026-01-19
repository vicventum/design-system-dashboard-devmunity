import BCard from './b-card.vue'

export default {
    title: 'Bases/Card/Default',
    component: BCard,
    tags: ['autodocs'],
}

const template = `
  <b-card v-bind="args">
    <template #header>
      <div class="px-4 py-3 font-bold">Header</div>
    </template>
    <div class="p-4">Body content goes here. It can be long.</div>
    <template #footer>
      <div class="px-4 py-3 text-sm text-gray-500">Footer content</div>
    </template>
  </b-card>
`

export const Default = {
    args: {
        variant: 'outline',
        hasBodyExpanded: false,
        hasFooterDivider: true,
    },
    render: (args) => ({
        components: { BCard },
        setup() {
            return { args }
        },
        template,
    }),
}

export const NoFooterDivider = {
    args: {
        variant: 'outline',
        hasBodyExpanded: false,
        hasFooterDivider: false,
    },
    render: (args) => ({
        components: { BCard },
        setup() {
            return { args }
        },
        template,
    }),
}

export const ExpandedBody = {
    args: {
        variant: 'outline',
        hasBodyExpanded: true,
        hasFooterDivider: true,
        class: 'h-64', // Force height to show expansion
    },
    render: (args) => ({
        components: { BCard },
        setup() {
            return { args }
        },
        template: `
      <div class="h-64">
        <b-card v-bind="args">
          <template #header><div class="p-2 border-b">Fixed Header</div></template>
          <div class="p-4">
             <p v-for="i in 10" :key="i">Scrollable content line {{ i }}</p>
          </div>
          <template #footer><div class="p-2 border-t">Fixed Footer</div></template>
        </b-card>
      </div>
    `,
    }),
}
