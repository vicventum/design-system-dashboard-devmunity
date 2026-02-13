<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'

const menuItems = [
    [{ label: 'Profile', icon: 'heroicons:user' }],
    [{ label: 'Settings', icon: 'heroicons:cog-6-tooth' }],
] satisfies DropdownMenuItem[][]

const sidebarLinks = [
    [
        {
            label: 'Panel General',
            type: 'label',
        },
        {
            label: 'Estadísticas sanitarias',
            icon: 'i-lucide-activity',
            // to: '/estadisticas-sanitarias',
            to: '/',
            onSelect: (e) => {
                console.log(e, isOpen.value, 'Estadísticas sanitarias')
                isOpen.value = false
            },
        },
        {
            label: 'Historias clínicas',
            icon: 'i-lucide-clipboard-list',
            to: '/historias-clinicas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Alarmas',
            icon: 'i-lucide-alert-triangle',
            to: '/alarmas',
            badge: '0',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Calendario de visitas',
            icon: 'i-lucide-calendar',
            to: '/calendario',
            defaultOpen: true,
            type: 'trigger',
            children: [
                {
                    label: 'Mi agenda',
                    icon: 'i-lucide-calendar-days',
                    to: '/calendario/mi-agenda',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'Todas las visitas',
                    icon: 'i-lucide-users-2',
                    to: '/calendario/todas-las-visitas',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'Solicitudes de pacientes',
                    icon: 'i-lucide-hand-metal',
                    to: '/calendario/solicitudes',
                    onSelect: () => (isOpen.value = false),
                },
            ],
        },
        {
            label: 'Rutas de visitas',
            icon: 'i-lucide-navigation',
            to: '/rutas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Reportes de alertas',
            icon: 'i-lucide-alert-octagon',
            to: '/reportes-alertas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Mensajería',
            icon: 'i-lucide-message-circle',
            to: '/mensajeria',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Finanzas',
            type: 'label',
        },
        {
            label: 'Facturación',
            icon: 'i-lucide-file-text',
            to: '/finanzas/facturacion',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Estadísticas Financieras',
            icon: 'i-lucide-bar-chart-3',
            to: '/finanzas/estadisticas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Cartera de Clientes',
            icon: 'i-lucide-briefcase',
            to: '/finanzas/cartera-clientes',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Resumen del Paciente',
            icon: 'i-lucide-user-cog',
            to: '/finanzas/resumen-paciente',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Recursos Humanos',
            type: 'label',
        },
        {
            label: 'Colaboradores',
            icon: 'i-lucide-users',
            to: '/rrhh/colaboradores',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Solicitudes de ausencias',
            icon: 'i-lucide-palmtree',
            to: '/rrhh/ausencias',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Cuidadores',
            icon: 'i-lucide-heart-handshake',
            to: '/rrhh/cuidadores',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Roles y permisos',
            icon: 'i-lucide-key',
            to: '/rrhh/roles',
            onSelect: () => (isOpen.value = false),
        },
    ],
    [
        {
            label: 'Historia de cambios',
            icon: 'i-lucide-history',
            to: '/historia-cambios',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Configuraciones generales',
            icon: 'i-lucide-settings',
            to: '/configuracion',
            onSelect: () => (isOpen.value = false),
        },
    ],
] satisfies NavigationMenuItem[][]

const links = [
    { label: 'Reportes pendientes', to: '/pending-reports' },
    { label: 'Mi agenda', to: '/my-agenda' },
] satisfies NavbarLinks

const isOpen = ref(false)
const searchTerm = ref('')
</script>

<template>
    <LDashboardContainer>
        <template #sidebar>
            <LSidebar
                v-model:is-open="isOpen"
                logo-default-src="/media/img/ui-logo-placeholder.svg"
                logo-mini-src="/media/img/ui-logo-placeholder.svg"
                :links-body="sidebarLinks.slice(0, 1)"
                :links-body-bottom="sidebarLinks.slice(1)"
                :links-footer="sidebarLinks.slice(1)"
            />
        </template>

        <template #header>
            <LNavigationBar
                v-model:search-term="searchTerm"
                :links="links"
                :menu-items="menuItems"
                search-placeholder="Buscar paciente"
                menu-user-name="Victor"
                menu-user-email="victor@email.com"
            />
        </template>

        <template #body>
            <BCard>
                <template #header>
                    <DCardHeader title="Holi" />
                </template>
                <template #body>
                    <p class="text-gray-600">Card Content</p>
                </template>
            </BCard>
        </template>
    </LDashboardContainer>
</template>
