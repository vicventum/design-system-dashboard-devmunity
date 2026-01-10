const config = {
  "stories": [
    "../app/components/**/*.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook-vue/nuxt",
    "options": {}
  }
};
export default config;