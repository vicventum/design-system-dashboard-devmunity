import type { Meta, StoryObj } from '@storybook/vue3'
import type { SemanticColors } from '#layers/design-system/app/types'
import { fn } from 'storybook/test'
import { semanticColors } from '#layers/design-system/app/utils/util-get-colors-from-css'
import DUploadAvatar, { type ButtonSize, type ButtonColor } from './d-upload-avatar.vue'

const meta = {
    title: 'Design/Upload/DUploadAvatar',
    component: DUploadAvatar,
    parameters: {
        docs: {
            description: {
                component:
                    'Avatar upload and display component. Contains the logic to upload an image as an avatar and display a previously uploaded image.',
            },
        },
    },
    argTypes: {
        buttonSize: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies ButtonSize[],
        },
        buttonColor: {
            control: 'select',
            options: Object.keys(semanticColors) as SemanticColors[],
        },
        'onOn-upload-image': {
            table: { disable: true },
        },
    },
    args: {
        'onOn-upload-image': fn(),
    },
} satisfies Meta<typeof DUploadAvatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        buttonSize: 'sm',
    },
}

export const WithImage: Story = {
    args: {
        ...Default.args,
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    },
}

export const ButtonColorSuccess: Story = {
    args: {
        ...Default.args,
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonColor: 'success',
    },
}

export const ButtonSizeLarge: Story = {
    args: {
        ...Default.args,
        buttonSize: 'lg',
    },
}
