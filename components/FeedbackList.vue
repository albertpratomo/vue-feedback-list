<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'

interface Props {
    feedbacks: StoredFeedback[]
    feedbackOnView: StoredFeedback
}

defineProps<Props>()

const emit = defineEmits<{
    view: [feedback: StoredFeedback]
}>()
</script>

<template>
    <div>
        <ul
            class="p-1 gap-1"
            aria-label="Feedback list"
        >
            <li
                v-for="feedback in feedbacks"
                :key="feedback._id"
                class="flex gap-2 p-3 rounded hover:bg-slate-200 cursor-pointer transition-colors"
                :class="{ 'bg-slate-200': feedback._id === feedbackOnView?._id }"
                :aria-label="feedback.title"
                @click="emit('view', feedback)"
            >
                <FeedbackIcon :type="feedback.type" />

                <div class="grow">
                    <div class="text-slate-800 font-medium">
                        {{ feedback.title }}
                    </div>

                    <div class="text-xs font-medium flex justify-between mt-0.5">
                        {{ feedback.reporterName }}

                        <div>
                            {{ formatTimeAgo(new Date(feedback.createdAt)) }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
