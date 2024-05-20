<script setup lang="ts">
const { data, error } = await useFetch<StoredFeedback[]>('/api/feedback')

const feedbacks = ref<StoredFeedback[]>(data.value || [])

const feedbackOnView = ref(feedbacks.value[0])
</script>

<template>
    <div class="h-full grid grid-cols-12">
        <Teleport to=".header-right">
            <FeedbackCreateDialog @created="feedbacks?.unshift($event)" />
        </Teleport>

        <FeedbackList
            :feedbacks="feedbacks"
            :feedback-on-view="feedbackOnView"
            class="col-span-4"
            @view="feedbackOnView = $event"
        />

        <div class="col-span-8 p-6 lg:p-8 xl:py-20 xl:px-20 bg-white">
            <FeedbackViewer
                v-if="feedbackOnView"
                :feedback="feedbackOnView"
            />

            <div
                v-else-if="error"
                class="bg-red-100 p-4 rounded"
            >
                {{ error }}
            </div>
        </div>
    </div>
</template>
