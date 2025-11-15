<script lang="jsx" setup>
const props = defineProps({
    src: {
        type: String,
        default: '/media/img/user-unknown.png',
        required: false,
    },
    label: {
        type: String,
        default: '',
        required: false,
    },
    color: {
        type: String,
        default: 'neutral',
        required: false,
    },
    variant: {
        type: String,
        default: 'outline',
        required: false,
        validator: (value) => ['solid', 'outline', 'soft', 'subtle'].includes(value),
    },
    size: {
        type: String,
        default: 'sm',
        required: false,
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
    },
    hasAvatar: {
        type: Boolean,
        default: true,
        required: false,
    },
    isClosable: {
        type: Boolean,
        default: true,
        required: false,
    },
})

const emit = defineEmits('on-close')

const trailingIconSize = computed(() => {
    const sizeMap = {
        xs: 'size-3.5 ',
        sm: 'size-3.5 ',
        md: 'size-3.5 ',
        lg: 'size-3.5 ',
        xl: 'size-4 ',
    }
    return sizeMap[props.size] || 'md'
})
const textSize = computed(() => {
    const sizeMap = {
        xs: 'text-xs p-1  gap-1.5',
        sm: 'text-xs p-1  gap-1.5',
        md: 'text-sm p-1  gap-1.5',
        lg: 'text-sm p-1  gap-2',
        xl: 'text-base p-1  gap-2 ',
    }
    return sizeMap[props.size] || 'md'
})
</script>

<template>
    <div class="flex gap-2">
        <UBadge
            :avatar="
                hasAvatar
                    ? {
                          src,
                          size,
                      }
                    : null
            "
            :label="label"
            :trailing-icon="isClosable ? 'heroicons:x-mark' : ''"
            :size="size"
            :ui="{
                base: textSize,
            }"
            :color="color"
            :variant="variant"
            class="rounded-full font-normal"
        >
            <template #trailing>
                <UButton
                    v-if="isClosable"
                    :size="size"
                    :ui="{
                        leadingIcon: trailingIconSize,
                        icon: trailingIconSize,
                    }"
                    :color="color"
                    :variant="variant === 'solid' ? 'solid' : 'icon'"
                    icon="heroicons:x-mark"
                    class="rounded-full p-0.5 font-normal"
                    @click="emit('on-close')"
                />
            </template>
        </UBadge>
    </div>
</template>
