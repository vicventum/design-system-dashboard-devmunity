<script lang="ts" setup>
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
        default: 'color-primary',
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
    width: {
        type: String,
        default: '',
        required: false,
    },
    widthButtons: {
        type: String,
        default: 'w-40',
        required: false,
    },
    isPrimaryButtonDisabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    isBlockButtons: {
        type: Boolean,
        default: false,
        required: false,
    },
    classButton: {
        type: String,
        default: 'form',
        required: false,
    },
    hasBodyExpanded: {
        type: Boolean,
        default: false,
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

// Data

const uiStyles = reactive({})

// Computed

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

// Watch

watch(
    () => props.width,
    (width) => {
        if (!width) return null

        Object.assign(uiStyles, { width: `${props.width}` })
    },
    { immediate: true }
)
</script>

<template>
    <UModal v-model="isOpen" :ui="uiStyles">
        <component :is="state ? UForm : 'section'" v-bind="formProps" @submit="handleSubmit">
            <BCard :ui="{ footer: { padding: 'p-0 sm:p-0' } }" :has-body-expanded="hasBodyExpanded">
                <template #header>
                    <slot v-if="$slots.header" name="header" />
                    <BCardHeader v-else :title="title" size="sm">
                        <template #actions>
                            <UButton icon="heroicons:x-mark" variant="icon" @click="isOpen = false" />
                        </template>
                    </BCardHeader>
                </template>

                <BCardInner v-if="text" class="p-6">
                    {{ text }}
                </BCardInner>
                <slot v-else />

                <template v-if="hasFooter" #footer>
                    <slot v-if="$slots.footer" name="footer" />
                    <BCardInner v-else>
                        <ABlockActionButtons
                            :class="twMerge('flex justify-start gap-x-2', classButton)"
                            :primary-button-color="primaryButtonColor"
                            :primary-button-text="primaryButtonText"
                            :secondary-button-text="secondaryButtonText"
                            :width-buttons="widthButtons"
                            :is-block-buttons="isBlockButtons"
                            :is-primary-button-disabled="isPrimaryButtonDisabled"
                            @on-click-primary-button="handleClickPrimaryButton"
                            @on-click-secondary-button="handleClickSecondaryButton"
                        />
                    </BCardInner>
                </template>
            </BCard>
        </component>
    </UModal>
</template>
