const preview = {
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
