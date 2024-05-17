<script setup lang="ts">
</script>

<template>
    <div class="h-full grid grid-cols-12">
        <Teleport to=".header-right">
            hi
        </Teleport>

        <FeedbackList class="col-span-4" />

        <div class="col-span-8 py-20 px-20 bg-white">
            <FeedbackViewer />
        </div>
    </div>
</template>
