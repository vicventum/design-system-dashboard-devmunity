import DCardHeader from './d-card-header.vue'

export default {
    title: 'Design/Card/Header',
    component: DCardHeader,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['main', 'secondary'] },
    },
}

const render = (args) => ({
    components: { DCardHeader },
    setup() {
        return { args }
    },
    template: `
    <d-card-header v-bind="args">
      <template #actions>
        <button class="text-sm bg-primary-500 text-white px-3 py-1 rounded">Action</button>
      </template>
    </d-card-header>
  `,
})

export const Main = {
    args: {
        title: 'Main Header',
        subtitle: 'Main subtitle description',
        variant: 'main',
        hasLeftButtonIcon: true,
    },
    render,
}

export const Secondary = {
    args: {
        title: 'Secondary Header',
        subtitle: 'Secondary subtitle description',
        variant: 'secondary',
        hasLeftButtonIcon: false,
    },
    render,
}

export const NoSubtitle = {
    args: {
        title: 'Simple Header',
        variant: 'main',
        hasLeftButtonIcon: true,
    },
    render,
}
