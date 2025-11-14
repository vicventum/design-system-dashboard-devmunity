<script lang="jsx" setup>
const props = defineProps({
    src: {
        type: String,
        default: '/media/img/user-unknown.png',
        required: false,
    },
    buttonSize: {
        type: String,
        default: 'md',
        required: false,
    },
    avatarSize: {
        type: String,
        default: 'sm',
        required: false,
    },
})
</script>

<template>
    <!-- <UButton
        class="bg-color-primary-100 flex items-center gap-2 rounded-full py-1 pr-2 pl-1 text-neutral-800 hover:text-neutral-50"
    >
        <UAvatar :src="src" size="sm" />
        <UIcon name="heroicons:chevron-down-20-solid" class="size-5" />
    </UButton> -->
    <UButton
        :avatar="{
            src,
            size: avatarSize,
        }"
        :size="buttonSize"
        trailing-icon="heroicons:chevron-down-20-solid"
        color="primary"
        variant="ghost"
        class="rounded-full"
    >
        <slot />
    </UButton>
</template>
