<script lang="ts" setup>
import type { UDropdownMenu } from '#components'

export interface DropdownItem {
    userName?: string
    userEmail?: string
    slot?: string
    onSelect?: () => void
    // label?: string
    // icon?: string
    // to?: string
    [key: string]: any
}

interface Props {
    /**
     * Array of dropdown items to display, grouped in arrays
     */
    items: DropdownItem[][]
    /**
     * Display name of the user
     */
    userName: string
    /**
     * Email address of the user
     */
    userEmail?: string
    /**
     * Navigation path for user profile
     */
    userTo?: string
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    userEmail: '',
    userTo: '',
})

defineSlots<{
    /**
     * Default slot content for dropdown trigger (REQUIRED)
     */
    default(): any
    /**
     * User information slot
     */
    user(props: { item: DropdownItem }): any
    /**
     * Additional dynamic slots
     */
    [name: string]: any
}>()

// Validate that the default slot is provided
const slots = useSlots()
if (!slots.default) {
    console.warn('ADropdownAvatar: The default slot is required')
}

const uiStyles = computed(() => {
    const ui = {
        content: 'min-w-40',
    }
    if (props.userTo) return ui
    return {
        ...ui,
        item: 'data-highlighted:first:before:bg-transparent data-[state=open]:first:before:bg-transparent',
    }
})

const itemsComputed = computed((): DropdownItem[][] => [
    [
        {
            userName: props.userName,
            userEmail: props.userEmail,
            slot: 'user',
            onSelect: () => {
                const path = props.userTo
                if (path) navigateTo(path)
            },
        },
    ],
    ...props.items,
])
</script>

<template>
    <UDropdownMenu :items="itemsComputed" :ui="uiStyles">
        <slot />

        <template #user="{ item }: { item: any }">
            <div class="text-start">
                <span class="text-highlighted block text-lg font-bold">
                    {{ item.userName }}
                </span>
                <span v-if="item?.userEmail" class="text-muted block truncate font-medium">
                    {{ item?.userEmail }}
                </span>
            </div>
        </template>

        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </UDropdownMenu>
</template>
