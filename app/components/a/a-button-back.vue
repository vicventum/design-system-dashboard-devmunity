<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'heroicons:arrow-left-16-solid',
        required: false,
    },
    to: {
        type: String,
        default: '',
        required: false,
    },
    hasBackAction: {
        type: Boolean,
        default: false,
        required: false,
    },
})

const emit = defineEmits(['on-click'])
const router = useRouter()

function handleClickLeftButtonIcon() {
    emit('on-click')
    if (props.hasBackAction && !props.to && props.icon.includes('arrow-left')) {
        router.back()
    }
}
</script>

<template>
    <UButton :to="to" :icon="icon" variant="icon" color="neutral" @click="handleClickLeftButtonIcon" />
</template>
