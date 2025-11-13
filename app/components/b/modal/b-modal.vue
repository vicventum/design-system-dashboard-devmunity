<script lang="jsx" setup>
import { resolveComponent } from 'vue'
import { twMerge } from 'tailwind-merge'

const UForm = resolveComponent('UForm')

const props = defineProps({
    state: {
        type: Object,
        default: null,
        required: false,
    },
    schema: {
        type: Object,
        default: null,
        required: false,
    },
    title: {
        type: String,
        default: '',
        required: true,
    },
    text: {
        type: String,
        default: '',
        required: false,
    },
    primaryButtonText: {
        type: String,
        default: 'Guardar',
        required: false,
    },
    primaryButtonColor: {
        type: String,
        default: 'primary',
        required: true,
    },
    secondaryButtonText: {
        type: String,
        default: 'Cancelar',
        required: false,
    },
    hasFooter: {
        type: Boolean,
        default: true,
        required: false,
    },
    isPrimaryButtonDisabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    hasButtonsBlock: {
        type: Boolean,
        default: false,
        required: false,
    },
    classButtons: {
        type: String,
        default: '',
        required: false,
    },
})

const emit = defineEmits(['on-click-primary-button', 'on-click-secondary-button', 'on-submit'])

// Model

const isOpen = defineModel({
    type: Boolean,
    default: false,
    required: true,
})
const formRef = defineModel('formRef', {
    type: Object,
    default: () => {},
    required: false,
})

// Computed

// const uiStyles = computed(() => {
//     const baseStyles = {}

//     // Apply width styles
//     if (props.width) {
//         baseStyles.width = `${props.width}`
//     }

//     return baseStyles
// })

const formProps = computed(() => {
    // return props.data ? { ref: 'form', state: props.data, onSubmit: handleSubmit } : {}
    return props.state ? { ref: 'formRef', state: props.state, schema: props.schema } : {}
})

// Methods

function handleSubmit() {
    emit('on-submit')
}
function handleClickPrimaryButton() {
    emit('on-click-primary-button')
}
function handleClickSecondaryButton() {
    isOpen.value = false
    emit('on-click-secondary-button')
}
</script>

<template>
    <UModal v-model:open="isOpen" title="Title" description="Description">
        <template #header>
            <slot v-if="$slots.header" name="header" />
        </template>

        <template #body>
            <component :is="state ? UForm : 'section'" v-bind="formProps" @submit="handleSubmit">
                <p v-if="text">
                    {{ text }}
                </p>
                <slot v-else />
            </component>
        </template>

        <template v-if="hasFooter" #footer>
            <slot v-if="$slots.footer" name="footer" />
            <DActionButtons
                v-else
                :primary-button-color="primaryButtonColor"
                :primary-button-text="primaryButtonText"
                :secondary-button-text="secondaryButtonText"
                :is-buttons-block="hasButtonsBlock"
                :is-primary-button-disabled="isPrimaryButtonDisabled"
                :class="twMerge('flex w-full justify-end gap-x-2', classButtons)"
                class-buttons="w-40"
                @on-click-primary-button="handleClickPrimaryButton"
                @on-click-secondary-button="handleClickSecondaryButton"
            />
        </template>
    </UModal>
</template>
