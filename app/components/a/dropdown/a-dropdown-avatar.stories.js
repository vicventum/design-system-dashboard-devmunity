import ADropdownAvatar from './a-dropdown-avatar.vue'

export default {
    title: 'Atoms/Dropdown/Avatar',
    component: ADropdownAvatar,
    tags: ['autodocs'],
}

const items = [
    [{ label: 'Profile', icon: 'heroicons:user' }],
    [{ label: 'Settings', icon: 'heroicons:cog-6-tooth' }],
]

export const Default = {
    args: {
        userName: 'John Doe',
        userEmail: 'john@example.com',
        items,
    },
}

export const Minimal = {
    args: {
        userName: 'Jane',
        items: [[{ label: 'Logout', icon: 'heroicons:arrow-left-on-rectangle' }]],
    },
}

export const WithNavigation = {
    args: {
        userName: 'Admin',
        userEmail: 'admin@sys.com',
        userTo: '/profile',
        items,
    },
}
