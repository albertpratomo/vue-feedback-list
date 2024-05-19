<script setup lang="ts">
const feedbackOnView = ref<Feedback>()
</script>

<template>
    <div class="h-full grid grid-cols-12">
        <Teleport to=".header-right">
            <FeedbackCreateDialog />
        </Teleport>

        <FeedbackList
            class="col-span-4"
            @view="feedbackOnView = $event"
        />

        <div class="col-span-8 py-20 px-20 bg-white">
            <FeedbackViewer
                v-if="feedbackOnView"
                :feedback="feedbackOnView"
            />
        </div>
    </div>
</template>
