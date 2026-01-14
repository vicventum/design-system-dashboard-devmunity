import APill from './a-pill.vue'

export default {
    title: 'Atoms/Pill/Default',
    component: APill,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['solid', 'outline', 'soft', 'subtle'] },
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        color: { control: 'text' },
    },
}

export const Default = {
    args: {
        label: 'Design System',
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        color: 'neutral',
        variant: 'outline',
        size: 'sm',
        hasAvatar: true,
        isClosable: true,
    },
}

export const SolidPrimary = {
    args: {
        label: 'Primary Solid',
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        color: 'primary',
        variant: 'solid',
        size: 'md',
    },
}

export const SoftSuccess = {
    args: {
        label: 'Success Soft',
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        color: 'green',
        variant: 'soft',
        size: 'md',
    },
}

export const NoAvatar = {
    args: {
        label: 'Just Text',
        hasAvatar: false,
        color: 'neutral',
        variant: 'subtle',
    },
}

export const NotClosable = {
    args: {
        label: 'Permanent',
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        isClosable: false,
    },
}
