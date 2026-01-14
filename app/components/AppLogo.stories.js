import AppLogo from './AppLogo.vue'

export default {
    title: 'Components/AppLogo',
    component: AppLogo,
    tags: ['autodocs'],
}

export const Default = {}

export const BlueContext = {
    render: () => ({
        components: { AppLogo },
        template: '<div class="text-blue-500"><AppLogo /></div>',
    }),
}
