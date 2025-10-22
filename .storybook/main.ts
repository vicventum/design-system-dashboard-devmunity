import type { StorybookConfig } from '@storybook-vue/vue3-vite'
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
    stories: ['../app/components/**/*.mdx', '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-vitest',
    ],
    framework: '@storybook/vue3-vite',
    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: [vue()],
        })
    },
}
export default config
