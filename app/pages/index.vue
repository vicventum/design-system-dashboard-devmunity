<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'
// import APill from 'design-system-dashboard-devmunity/app/components/a/pill/a-pill.vue'

const links = [
    { label: 'Reportes pendientes', to: '/pending-reports' },
    { label: 'Mi agenda', to: '/my-agenda' },
] satisfies NavbarLinks

const menuItems = [
    [{ label: 'Profile', icon: 'heroicons:user' }],
    [{ label: 'Settings', icon: 'heroicons:cog-6-tooth' }],
] satisfies DropdownMenuItem[][]

const items = [
    [
        {
            label: 'New mail',
            icon: 'i-lucide-send',
            to: '/inbox',
        },
        {
            label: 'New customer',
            icon: 'i-lucide-user-plus',
            to: '/customers',
        },
    ],
] satisfies DropdownMenuItem[][]

const isOpen = ref(false)

function handleSearchOpen(open: boolean) {
    console.log('Search opened:', open)
}
</script>

<template>
    <UDashboardPanel id="home">
        <template #header>
            <LNavigationBar
                :links="links"
                :menu-items="menuItems"
                search-placeholder="Buscar paciente"
                menu-user-name="Victor"
                menu-user-email="victor@email.com"
            />
        </template>

        <template #body>
            <div class="bg-primary-600">oli</div>
        </template>
    </UDashboardPanel>
</template>
