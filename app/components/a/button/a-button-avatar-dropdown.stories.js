import AButtonAvatarDropdown from './a-button-avatar-dropdown.vue'

export default {
    title: 'Atoms/Button/AvatarDropdown',
    component: AButtonAvatarDropdown,
    tags: ['autodocs'],
    argTypes: {
        buttonSize: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        avatarSize: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    },
}

export const Default = {
    args: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonSize: 'md',
        avatarSize: 'sm',
    },
}

export const LargeButton = {
    args: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonSize: 'xl',
        avatarSize: 'md',
    },
}

export const SmallButton = {
    args: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonSize: 'xs',
        avatarSize: 'xs',
    },
}
