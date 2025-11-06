<script lang="ts" setup></script>

<template>
    <div class="h-screen">
        <ACardInner class="h-full">
            <ACard :has-footer-divider="false">
                <template #header>
                    <h1>Header</h1>
                </template>
                <p>Body</p>
                <template #footer>
                    <p>Footer</p>
                </template>
            </ACard>
            <UCard variant="ghost"> oli </UCard>
            test 1
        </ACardInner>
    </div>
</template>
