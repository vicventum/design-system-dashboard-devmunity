<script lang="ts" setup></script>

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
                            <UButton label="Action" />
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
                    variant-subtitle="secondary"
                    class="my-6"
                    class-title=""
                    has-border
                >
                    <template #actions>
                        <UButton label="Action" />
                    </template>
                </BCardHeader>

                <BCardInner>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos perspiciatis
                    asperiores suscipit voluptate magni excepturi. Doloribus in fugit quam voluptatibus,
                    molestiae maxime illum explicabo ut corrupti, distinctio atque dolor.
                </BCardInner>
            </BCard>
        </UContainer>
    </div>
</template>
