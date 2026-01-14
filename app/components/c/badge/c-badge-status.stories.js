import CBadgeStatus from './c-badge-status.vue'

export default {
    title: 'Composites/Badge/Status',
    component: CBadgeStatus,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'select' },
            options: ['PLANNED', 'FINISHED', 'CANCELLED', 'OTHER'],
        },
    },
}

export const Planned = { args: { label: 'Planned', value: 'PLANNED' } }
export const Finished = { args: { label: 'Finished', value: 'FINISHED' } }
export const Cancelled = { args: { label: 'Cancelled', value: 'CANCELLED' } }
export const Other = { args: { label: 'Other', value: 'OTHER' } }
