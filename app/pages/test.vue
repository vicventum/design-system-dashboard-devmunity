<script lang="jsx" setup>
import { CModalDanger } from '#components'

const modelIsOpenModal = ref(false)
const overlay = useOverlay()

// Abriendo modal de forma programática (mientras no sea necesario pasar slots)
const modalDanger = overlay.create(CModalDanger)
</script>

<template>
    <div class="mb-16 min-h-full">
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
            <!-- <UButton label="Open modal danger" @click="modelIsOpenModalDanger = !modelIsOpenModalDanger" /> -->
            <UButton
                label="Open modal danger"
                color="error"
                @click="
                    modalDanger.open({
                        title: 'Title Danger',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui aut exercitationem necessitatibus, perspiciatis vel suscipit nam. Facilis, placeat! Dicta quo eveniet rerum officiis quibusdam laborum error necessitatibus sequi itaque praesentium.',
                        onOnClickSecondaryButton: () => {
                            modalDanger.close()
                        },
                    })
                "
            />

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

            <hr class="my-6" />

            <ADropdownAvatar
                :items="[
                    {
                        label: 'Configuraciones',
                        icon: 'i-heroicons-cog-8-tooth',
                        onSelect: () => {
                            navigateTo('/')
                        },
                    },
                    {
                        test: 'test',
                        slot: 'test',
                    },
                ]"
                user-name="Victor Alvarez"
                user-email="test@test.com"
                user-to="/"
            >
                <AButtonAvatarDropdown />

                <template #test="{ item }">
                    {{ item.test }}
                </template>
            </ADropdownAvatar>

            <hr class="my-6" />

            <!-- <APill text="test 1" /> -->
            <p>
                <APill label="xs" size="xs" />
                <APill label="sm" size="sm" color="warning" variant="subtle" />
                <APill label="md" size="md" color="error" />
                <APill label="lg" size="lg" color="success" />
                <APill label="xl" size="xl" />
            </p>

            <hr class="my-6" />

            <DUploadAvatar button-size="xl" button-color="error" />
        </UContainer>
    </div>
</template>
