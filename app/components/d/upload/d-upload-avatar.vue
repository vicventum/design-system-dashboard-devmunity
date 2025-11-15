<script setup>
const props = defineProps({
    src: {
        type: String,
        default: '',
        required: false,
    },
    buttonSize: {
        type: String,
        default: 'sm',
        required: false,
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
    },
    buttonColor: {
        type: String,
        default: 'neutral',
        required: false,
    },
})
const emit = defineEmits('on-upload-image')

// Data

const fileName = ref(null)
const inputFileRef = ref(null)

// Computed

const getImage = computed(() => {
    if (fileName.value) {
        const imgUrl = globalThis.URL.createObjectURL(fileName.value)
        return imgUrl
    } else if (props.src) {
        return props.src
    }

    return null
})

// Methods

function handleUploadImage(event) {
    if (event.target.files) {
        fileName.value = event.target.files[0]
    } else {
        fileName.value = event.dataTransfer.files[0]
    }

    emit('on-upload-image', fileName.value)
}
</script>

<template>
    <div class="flex items-end gap-x-6">
        <div>
            <input
                ref="inputFileRef"
                type="file"
                accept="image/*"
                class="sr-only"
                @change="handleUploadImage"
            />
            <img v-if="getImage" :src="getImage" alt="User image" class="size-20 rounded-md object-cover" />
            <div
                v-else
                class="bg-primary-50 grid size-20 place-items-center rounded-md"
                @click="inputFileRef.click()"
            >
                <UIcon name="heroicons:photo" class="size-6 text-neutral-900" />
            </div>
        </div>
        <UButton :color="buttonColor" variant="outline" @click="inputFileRef.click()" :size="buttonSize">
            {{ 'Cambiar' }}
        </UButton>
    </div>
</template>
