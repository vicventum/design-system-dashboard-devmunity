<script lang="ts" setup></script>

<template>
    <div class="h-screen">
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
    </div>
</template>
