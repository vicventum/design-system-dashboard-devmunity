import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import DCardHeader from './d-card-header.vue'
import DActionButtons from '@/components/d/d-action-buttons.vue'
import BCard from '@/components/b/card/b-card.vue'
import ACardInner from '@/components/a/card/a-card-inner.vue'

const meta = {
    title: 'Design/Card/Header',
    component: DCardHeader,
    argTypes: {
        variant: {
            control: 'select',
            options: ['main', 'secondary'] as const,
        },
        'onOn-click-left-button-icon': {
            table: { disable: true },
        },
    },
    args: {
        'onOn-click-left-button-icon': fn(),
    },
} satisfies Meta<typeof DCardHeader>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => ({
    components: { DCardHeader, DActionButtons },
    setup() {
        return { args }
    },
    template: `
        <DCardHeader v-bind="args">
            <template #actions>
                <DActionButtons primary-button-text="Primary" secondary-button-text="Secondary" />
            </template>
        </DCardHeader>
    `,
})

export const Main: Story = {
    args: {
        title: 'Main Header',
        subtitle: 'Main subtitle description',
        variant: 'main',
        leftButtonIcon: 'heroicons:arrow-left-16-solid',
        hasLeftButtonIcon: true,
    },
    render,
}

export const Secondary: Story = {
    args: {
        title: 'Secondary Header',
        subtitle: 'Secondary subtitle description',
        variant: 'secondary',
        hasLeftButtonIcon: false,
    },
    render,
}

export const WithABCard: Story = {
    name: 'With a BCard',
    args: {
        title: 'With a BCard',
        subtitle: 'Subtitle',
        variant: 'main',
        leftButtonIcon: 'heroicons:arrow-left-16-solid',
        hasLeftButtonIcon: true,
    },
    render: (args: any) => ({
        components: { DCardHeader, BCard, ACardInner, DActionButtons },
        setup() {
            return { args }
        },
        template: `
        <BCard>
            <template #header>
                <DCardHeader v-bind="args">
                    <template #actions>
                        <DActionButtons primary-button-text="Guardar" secondary-button-text="Cancelar" />
                    </template>
                </DCardHeader>
            </template>
            <template #default>
                <ACardInner>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat odit eos sint doloribus maxime vitae aperiam nesciunt nisi quasi delectus ducimus harum officiis odio ipsa, eaque nobis autem ullam aut!</p>
                </ACardInner>
            </template>
            <template #footer>
                <ACardInner>
                    <p>Card footer</p>
                </ACardInner>
            </template>
        </BCard>
    `,
    }),
}

export const Simple: Story = {
    args: {
        title: 'Simple Header',
    },
    render: (args: any) => ({
        components: { DCardHeader },
        setup() {
            return { args }
        },
        template: `
        <DCardHeader v-bind="args" />
    `,
    }),
}
