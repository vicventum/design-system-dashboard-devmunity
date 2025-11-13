<script lang="jsx" setup>
const modelIsOpenModal = ref(false)
</script>

<template>
    <div class="h-screen">
        <UContainer>
            <BCardInner class="h-full">
                <BCard :has-footer-divider="false">
                    <template #header>
                        <h1>Header</h1>
                    </template>
                    <p>Body</p>
                    <template #footer>
                        <p>Footer</p>
                    </template>
                </BCard>
                <UCard variant="ghost"> oli </UCard>
                <AButtonBack icon="heroicons:arrow-left-16-solid" is-back-action />
            </BCardInner>

            <hr class="my-6" />

            <BCard>
                <template #header>
                    <BCardHeader title="Crear una nueva actividad" subtitle="Subtitle" has-left-button-icon>
                        <template #actions>
                            <DActionButtons
                                primary-button-text="Guardar"
                                secondary-button-text="Cancelar"
                                secondary-button-icon="heroicons:pencil"
                                is-block-buttons
                            />
                        </template>
                    </BCardHeader>
                </template>

                <BCardInner>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos perspiciatis
                    asperiores suscipit voluptate magni excepturi. Doloribus in fugit quam voluptatibus,
                    molestiae maxime illum explicabo ut corrupti, distinctio atque dolor.
                </BCardInner>

                <BCardHeader
                    title="Crear una nueva actividad"
                    subtitle="Subtitle"
                    variant="secondary"
                    class="my-6"
                    class-title=""
                >
                    <template #actions>
                        <UButton label="Action" />
                    </template>
                </BCardHeader>

                <BCardInner class="space-y-2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos perspiciatis
                        asperiores suscipit voluptate magni excepturi. Doloribus in fugit quam voluptatibus,
                        molestiae maxime illum explicabo ut corrupti, distinctio atque dolor.
                    </p>

                    <DActionButtons
                        primary-button-text="Guardar"
                        secondary-button-text="Cancelar"
                        secondary-button-icon="heroicons:pencil"
                        class-buttons="w-[200px]"
                        has-buttons-block
                    />
                </BCardInner>
            </BCard>

            <hr class="my-6" />

            <UButton label="Open modal" @click="modelIsOpenModal = !modelIsOpenModal" />

            <BModal
                v-model="modelIsOpenModal"
                title="Marcar como completada"
                class-button="justify-end"
                class="w-[700px]"
            >
                <!-- <template #header> header </template> -->

                <p class="h-screen">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam pariatur, suscipit
                    veritatis delectus architecto hic non quidem ducimus, cum ex alias obcaecati enim maiores
                    animi nesciunt, perferendis commodi in quae.
                </p>

                <!-- <template #footer> footer </template> -->
            </BModal>
        </UContainer>
    </div>
</template>
