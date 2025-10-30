/** @type { import('storybook-vue').StorybookConfig } */
const config = {
    stories: ['../app/components/**/*.mdx', '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-docs', '@chromatic-com/storybook'],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {
        check: false,
        reactDocgen: false,
    },
    viteFinal: (config) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            // Asegúrate de que @ apunte a la raíz del proyecto
            '@': require('path').resolve(__dirname, '../'),
        }
        return config
    },
}
export default config
