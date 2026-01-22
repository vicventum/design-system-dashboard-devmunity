<script lang="ts" setup>
import type { BBadge } from '#components'

type BadgeStyles = InstanceType<typeof BBadge>['$props']['styles']
type DefaultStyle = InstanceType<typeof BBadge>['$props']['defaultStyle']

interface Props {
    /**
     * The label text to display on the badge
     */
    label: string
    /**
     * The status value that determines the badge style
     */
    value: string
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    value: '',
})

const styles: BadgeStyles = {
    TODO: {
        color: 'accent',
        variant: 'soft',
    },
    IN_PROGRESS: {
        color: 'secondary',
        variant: 'soft',
    },
    FINISHED: {
        color: 'success',
        variant: 'soft',
        icon: 'material-symbols:check-circle-outline',
    },
    CANCELLED: {
        color: 'error',
        variant: 'soft',
        icon: 'material-symbols:info-outline',
    },
    OTHER: {
        color: 'neutral',
        variant: 'soft',
    },
}

const defaultStyle: DefaultStyle = styles.OTHER

defineSlots<{
    /**
     * The default slot content
     */
    default(): any
}>()
</script>

<template>
    <BBadge :label="label" :value="value" :styles="styles" :default-style="defaultStyle" />
</template>
