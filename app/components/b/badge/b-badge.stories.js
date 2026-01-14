import BBadge from './b-badge.vue'

export default {
    title: 'Blocks/Badge/Default',
    component: BBadge,
    tags: ['autodocs'],
}

const styles = {
    active: { color: 'primary', variant: 'solid' },
    inactive: { color: 'neutral', variant: 'subtle' },
    error: { color: 'red', variant: 'soft' },
}

export const Default = {
    args: {
        label: 'Default Style',
        value: 'unknown',
        styles,
        defaultStyle: { color: 'gray', variant: 'outline' },
    },
}

export const Active = {
    args: {
        label: 'Active Item',
        value: 'active',
        styles,
    },
}

export const Inactive = {
    args: {
        label: 'Inactive Item',
        value: 'inactive',
        styles,
    },
}

export const ErrorState = {
    args: {
        label: 'Error Occurred',
        value: 'error',
        styles,
    },
}
