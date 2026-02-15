<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'

interface Props {
    searchPlaceholder?: string
    searchShortcut?: string
    searchItems?: DropdownMenuItem[]
    links?: NavbarLinks
    menuUserName?: string
    menuUserEmail?: string
    menuUserAvatarSrc?: string
    menuUserTo?: string
    menuItems?: DropdownMenuItem[][]
    hasSearch?: boolean
    hasNotification?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    searchPlaceholder: 'Search...',
    searchItems: () => [],
    searchShortcut: '/',
    links: () => [],
    menuUserName: 'User',
    menuItems: () => [],
    hasSearch: true,
    hasNotification: false,
})

const searchTerm = defineModel<string>('searchTerm', {
    default: '',
    required: true,
})
// const isOpen = defineModel<boolean>('searchOpen', {
//     default: false,
//     required: true,
// })

const inputRef = useTemplateRef('inputRef')

defineShortcuts({
    [props.searchShortcut]: () => {
        inputRef.value?.inputRef?.focus()
    },
})

const emit = defineEmits<{
    (e: 'on-click-notifications'): void
}>()
</script>

<template>
    <UDashboardNavbar :ui="{ left: 'gap-8', right: 'gap-3' }">
        <template #left>
            <!-- <UDashboardSidebarCollapse /> -->

            <UInput
                v-if="hasSearch"
                ref="inputRef"
                v-model="searchTerm"
                :placeholder="searchPlaceholder"
                icon="i-lucide-search"
                name="search"
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
                <template #trailing>
                    <UKbd :value="searchShortcut" />
                </template>
            </UInput>
            <!-- <UDashboardSearch v-model:open="isOpen" shortcut="meta_k" size="sm" :color-mode="true"/> -->

            <!-- <ULink v-for="link in links" :key="link.to" :to="link.to" :icon="link.icon" class="text-sm">
                {{ link.label }}
            </ULink> -->
            <UNavigationMenu
                color="neutral"
                variant="link"
                :items="links"
                :ui="{ link: 'px-0', list: 'gap-x-8' }"
            />
        </template>

        <template #right>
            <slot v-if="$slots.right" name="right" />
            <template v-else>
                <UTooltip text="Notifications" :shortcuts="['N']">
                    <UButton
                        color="neutral"
                        variant="ghost"
                        square
                        class="text-muted"
                        @click="emit('on-click-notifications')"
                    >
                        <UChip color="error" :show="hasNotification" inset>
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
                    <span>
                        <AButtonAvatarDropdown :src="menuUserAvatarSrc" />
                    </span>
                </ADropdownAvatar>
            </template>
        </template>
    </UDashboardNavbar>
</template>
