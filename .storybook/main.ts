import { StorybookConfig } from '@nuxtjs/storybook'

const config = {
    stories: [
        '../app/**/*.mdx',
        '../app/components/**/*.mdx',
        '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/experimental-addon-test',
        '@storybook/addon-docs'
    ],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
} as StorybookConfig
export default config
