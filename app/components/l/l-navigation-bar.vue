<script setup lang="ts">
import type { DropdownMenuItem, UDashboardSearchButton } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'

interface Props {
    searchPlaceholder?: string
    searchShortcut?: string
    searchItems?: DropdownMenuItem[]
    links?: NavbarLinks
    menuUserName?: string
    menuUserEmail?: string
    menuUserAvatar?: string
    menuUserTo?: string
    menuItems?: DropdownMenuItem[][]
    hasNotification?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    searchPlaceholder: 'Search...',
    searchItems: () => [],
    links: () => [],
    menuUserName: 'User',
    menuItems: () => [],
    hasNotification: false,
})

const searchTerm = defineModel<string>('search:term', {
    default: '',
    required: true,
})
const isOpen = defineModel<boolean>('search:open', {
    default: false,
    required: true,
})

const emit = defineEmits<{
    (e: 'on-click-notifications'): void
}>()
</script>

<template>
    <UDashboardNavbar :ui="{ left: 'gap-8', right: 'gap-3' }">
        <template #left>
            <UDashboardSidebarCollapse />

            <UInput
                v-model="searchTerm"
                :placeholder="searchPlaceholder"
                :shortcut="searchShortcut"
                icon="i-lucide-search"
                class="w-60"
                :ui="{ trailing: 'pe-1' }"
            >
                <template v-if="searchTerm?.length" #trailing>
                    <UButton
                        color="neutral"
                        variant="link"
                        size="sm"
                        icon="i-lucide-circle-x"
                        aria-label="Clear input"
                        @click="searchTerm = ''"
                    />
                </template>
            </UInput>
            <!-- <UDashboardSearch v-model:open="isOpen" shortcut="meta_k" size="sm" :color-mode="false"/> -->

            <ULink v-for="link in links" :key="link.to" :to="link.to" :icon="link.icon" class="text-sm">
                {{ link.label }}
            </ULink>
        </template>

        <template #right>
            <UTooltip text="Notifications" :shortcuts="['N']">
                <UButton color="neutral" variant="ghost" square @click="emit('on-click-notifications')">
                    <UChip color="error" inset :show="hasNotification">
                        <UIcon name="i-lucide-bell" class="size-5 shrink-0" />
                    </UChip>
                </UButton>
            </UTooltip>

            <ADropdownAvatar
                :items="menuItems"
                :user-name="menuUserName"
                :user-email="menuUserEmail"
                :user-to="menuUserTo"
            >
                <AButtonAvatarDropdown :src="menuUserAvatar" />
            </ADropdownAvatar>
        </template>
    </UDashboardNavbar>
</template>
