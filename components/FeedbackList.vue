<script setup lang="ts">
const { data: feedbacks } = await useFetch('/api/feedback')
</script>

<template>
    <div>
        <ul>
            <li
                v-for="feedback in feedbacks"
                :key="feedback.title"
                class="flex gap-2 p-3"
            >
                <FeedbackIcon :type="feedback.type" />

                <div>
                    <div class="text-slate-800 font-medium">
                        {{ feedback.title }}
                    </div>

                    <div class="text-xs">
                        {{ feedback.reporterName }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
