import UApp from '@nuxt/ui/components/App.vue'

const preview = {
    decorators: [
        () => ({
            components: { UApp: UApp as any },
            template: '<UApp><story /></UApp>',
        }),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    'Guides',
                    ['Introduction', 'Component Organization System', 'Arquitectura de Estilos'],
                ],
            },
        },
    },
    tags: ['autodocs'],
}

export default preview
