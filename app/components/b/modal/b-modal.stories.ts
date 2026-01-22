import { reactive } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { semanticColors } from '@/utils/get-colors-from-css'
import UButton from '@nuxt/ui/components/Button.vue'
import UForm from '@nuxt/ui/components/Form.vue'
import UFormField from '@nuxt/ui/components/FormField.vue'
import UInput from '@nuxt/ui/components/Input.vue'
import BModal from './b-modal.vue'

const meta = {
    title: 'Bases/Modal/Default',
    component: BModal,
    argTypes: {
        primaryButtonColor: {
            control: 'select',
            options: Object.keys(semanticColors),
        },
        'onOn-click-primary-button': {
            table: { disable: true },
        },
        'onOn-click-secondary-button': {
            table: { disable: true },
        },
        'onOn-submit': {
            table: { disable: true },
        },
        modelValue: {
            control: 'boolean',
            name: 'isOpen',
            description: 'Whether the modal is open',
            table: {
                category: 'v-model',
            },
        },
    },
    args: {
        'onOn-click-primary-button': fn(),
        'onOn-click-secondary-button': fn(),
        'onOn-submit': fn(),
    },
    render: (args) =>
        ({
            components: { BModal, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Modal" @click="args.modelValue = true" />
            <BModal v-bind="args" v-model="args.modelValue" />
          </div>
        `,
        }) as any,
} satisfies Meta<typeof BModal>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Modal Title',
        description: 'This is a description of the modal.',
        modelValue: false,
        primaryButtonText: 'Save',
        secondaryButtonText: 'Cancel',
        primaryButtonColor: 'primary',
    },
}

export const WithTextContent: Story = {
    args: {
        ...Default.args,
        title: 'Text Content',
        description: 'Modal with simple text content',
        text: 'This is the body text content passed via the "text" prop.',
        modelValue: false,
    },
}

export const WithSlot: Story = {
    args: {
        ...Default.args,
        title: 'With Slot',
        description: 'Modal with custom content',
        modelValue: false,
    },
    render: (args) =>
        ({
            components: { BModal, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Modal" @click="args.modelValue = true" />
            <BModal v-bind="args" v-model="args.modelValue">
              <div class="space-y-4">
                <p class="text-sm text-gray-600">
                  This is a custom content area where you can place any elements,
                  such as forms, images, or additional text.
                </p>
                <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <span class="text-blue-700 font-medium">Note:</span>
                  Custom slots allow for maximum flexibility in modal design.
                </div>
              </div>
            </BModal>
          </div>
        `,
        }) as any,
}

export const WithForm: Story = {
    args: {
        ...Default.args,
        title: 'With Form',
        description: 'Modal with form',
        modelValue: false,
        class: 'w-74',
    },
    render: (args) =>
        ({
            components: {
                BModal,
                UButton: UButton as any,
                UForm: UForm as any,
                UFormField: UFormField as any,
                UInput: UInput as any,
            },
            setup() {
                const schema = {
                    email: {
                        type: 'string',
                        required: true,
                        format: 'email',
                    },
                    password: {
                        type: 'string',
                        required: true,
                        format: 'password',
                    },
                }
                const state = reactive({
                    email: '',
                    password: '',
                })
                return { args, schema, state }
            },
            template: `
          <div>
            <UButton label="Open Modal" @click="args.modelValue = true" />
            <BModal v-bind="args" v-model="args.modelValue">
                <UForm :schema="schema" :state="state" class="space-y-4 w-full">
                    <UFormField label="Email" name="email" class="w-full">
                        <UInput v-model="state.email" type="email" />
                    </UFormField>

                    <UFormField label="Password" name="password" class="w-full">
                        <UInput v-model="state.password" type="password" />
                    </UFormField>
                </UForm>
            </BModal>
          </div>
        `,
        }) as any,
}

export const ButtonsBlock: Story = {
    args: {
        ...Default.args,
        title: 'Block Buttons',
        description: 'Buttons are full width',
        hasButtonsBlock: true,
        modelValue: false,
        text: 'Check the buttons below.',
    },
}

export const NoFooter: Story = {
    args: {
        ...Default.args,
        title: 'No Footer',
        description: 'This modal has no footer',
        hasFooter: false,
        modelValue: false,
        text: 'Footer is hidden.',
    },
}

export const DisabledPrimary: Story = {
    args: {
        ...Default.args,
        title: 'Disabled Action',
        description: 'Primary button is disabled',
        isPrimaryButtonDisabled: true,
        modelValue: false,
        text: 'You cannot save right now.',
    },
}
