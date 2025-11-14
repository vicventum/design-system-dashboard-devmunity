<script lang="jsx" setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
        required: true,
    },
    userName: {
        type: String,
        default: '',
        required: true,
    },
    userEmail: {
        type: String,
        default: '',
        required: false,
    },
    userTo: {
        type: String,
        default: '',
        required: false,
    },
})

const uiStyles = computed(() => {
    if (props.userTo) return {}
    return {
        item: 'data-highlighted:first:before:bg-transparent data-[state=open]:first:before:bg-transparent',
    }
})

const itemsComputed = computed(() => [
    {
        userName: props.userName,
        userEmail: props.userEmail,
        slot: 'user',
        onSelect: () => {
            const path = props.userTo
            if (path) navigateTo(path)
        },
    },
    ...props.items,
])
</script>

<template>
    <UDropdownMenu :items="itemsComputed" :ui="uiStyles">
        <slot />

        <template #user="{ item }">
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
