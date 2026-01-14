import AButtonBack from './a-button-back.vue'

export default {
    title: 'Atoms/Button/Back',
    component: AButtonBack,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        icon: 'heroicons:arrow-left-16-solid',
        to: '',
        hasBackAction: false,
    },
}

export const CustomIcon = {
    args: {
        icon: 'heroicons:home-20-solid',
        to: '/',
        hasBackAction: false,
    },
}
