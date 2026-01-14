import CModalDanger from './c-modal-danger.vue'

export default {
    title: 'Composites/Modal/Danger',
    component: CModalDanger,
    tags: ['autodocs'],
}

export const Default = {
    args: {
        title: 'Delete Item',
        description: 'Are you sure?',
        isOpen: false,
        text: 'This action is irreversible.',
    },
}

export const CustomButtons = {
    args: {
        title: 'Destructive Action',
        description: 'Proceed with caution',
        isOpen: true,
        primaryButtonText: 'Destroy',
        secondaryButtonText: 'Abort',
        text: 'Custom button labels example.',
    },
}
