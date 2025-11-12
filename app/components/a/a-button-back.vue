<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'heroicons:arrow-left-16-solid',
        required: false,
    },
    href: {
        type: String,
        default: '',
        required: false,
    },
    isBackAction: {
        type: Boolean,
        default: false,
        required: true,
    },
})

const emit = defineEmits(['on-click'])
const router = useRouter()

function handleClickLeftButtonIcon() {
    emit('on-click')
    if (props.isBackAction && !props.href && props.icon.includes('arrow-left')) {
        router.back()
    }
}
</script>

<template>
    <UButton :to="href" :icon="icon" variant="icon" color="neutral" @click="handleClickLeftButtonIcon" />
</template>
