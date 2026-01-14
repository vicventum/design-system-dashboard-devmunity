import DUploadAvatar from './d-upload-avatar.vue'

export default {
    title: 'Design/Upload/Avatar',
    component: DUploadAvatar,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        buttonSize: 'sm',
    },
}

export const WithImage = {
    args: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        buttonSize: 'sm',
    },
}

export const Large = {
    args: {
        src: '',
        buttonSize: 'lg',
    },
}
