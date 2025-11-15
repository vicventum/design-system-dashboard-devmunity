<script lang="jsx" setup>
import { twMerge } from 'tailwind-merge'

const props = defineProps({
    title: {
        type: String,
        default: '',
        required: false,
    },
    subtitle: {
        type: String,
        default: '',
        required: false,
    },
    variant: {
        type: String,
        default: 'main', // main, secondary
        required: false,
    },
    hasLeftButtonIcon: {
        type: Boolean,
        default: false,
        required: false,
    },
    leftButtonIcon: {
        type: String,
        default: 'heroicons:arrow-left-16-solid',
        required: false,
    },
    leftButtonIconTo: {
        type: String,
        default: '',
        required: false,
    },
    classTitle: {
        type: String,
        default: '',
        required: false,
    },
})

const emit = defineEmits(['on-click-left-button-icon'])

const headingTag = computed(() => {
    const tags = {
        main: 'h2',
        secondary: 'h3',
    }
    return tags[props.variant] ?? tags.main
})

function handleClickLeftButtonIcon() {
    emit('on-click-left-button-icon')
}
</script>

<template>
    <ACardInner
        :class="[
            'text-default flex items-center justify-between',
            { 'bg-muted border-y border-neutral-200': variant === 'secondary' },
        ]"
    >
        <div class="space-y-1">
            <div class="flex items-center gap-x-3">
                <AButtonBack
                    v-if="hasLeftButtonIcon"
                    :icon="leftButtonIcon"
                    :To="leftButtonIconTo"
                    :is-back-action="leftButtonIconTo"
                    @on-click="handleClickLeftButtonIcon"
                />
                <Component
                    :is="headingTag"
                    :class="
                        twMerge([
                            'font-bold',
                            variant === 'main' && 'text-xl',
                            variant === 'secondary' && 'text-lg',
                            classTitle,
                        ])
                    "
                >
                    {{ title }}
                </Component>
            </div>
            <p
                v-if="subtitle"
                class="text-sm font-medium"
                :class="{
                    'text-dimmed': variant === 'secondary',
                }"
            >
                {{ subtitle }}
            </p>
        </div>

        <div v-if="$slots.actions" class="p-0">
            <slot name="actions" />
        </div>
    </ACardInner>
</template>
