import ACardInner from './a-card-inner.vue'

export default {
    title: 'Atoms/Card/Inner',
    component: ACardInner,
    tags: ['autodocs'],
}

export const Default = {
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

export const CustomClass = {
    args: {
        as: 'section',
        class: 'bg-gray-100 p-4 rounded-lg border border-gray-200',
    },
    render: (args) => ({
        components: { ACardInner },
        setup() {
            return { args }
        },
        template: '<a-card-inner v-bind="args">Content with custom styling</a-card-inner>',
    }),
}
