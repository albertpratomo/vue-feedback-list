<script setup lang="ts">
import type { Feedback } from '~/server/models/feedback.schema'

const emit = defineEmits<{
    view: [feedback: Feedback]
}>()

const { data: feedbacks } = await useFetch('/api/feedback')

const feedbackOnView = ref(feedbacks.value[0])

watchImmediate(() => feedbackOnView.value?._id, () => emit('view', feedbackOnView.value))
</script>

<template>
    <div>
        <ul class="p-1 gap-1">
            <li
                v-for="feedback in feedbacks"
                :key="feedback._id"
                class="flex gap-2 p-3 rounded hover:bg-slate-200 cursor-pointer transition-colors"
                :class="{ 'bg-slate-200': feedback._id === feedbackOnView?._id }"
                @click="feedbackOnView = feedback"
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
