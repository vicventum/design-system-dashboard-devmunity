import BaseButton from './BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/BaseButton',
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} 

export default meta

export const BaseButtonStory = {
  args: {
    label: 'Click me!'
  },
}
