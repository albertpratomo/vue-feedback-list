<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'

interface Props {
    feedback: StoredFeedback
}

defineProps<Props>()
</script>

<template>
    <div
        class="flex gap-3"
        role="main"
        aria-label="Feedback viewer"
    >
        <FeedbackIcon
            :type="feedback.type"
            class="mt-6"
        />

        <div>
            <div class="text-xs font-medium">
                {{ formatTimeAgo(new Date(feedback.createdAt)) }}
            </div>

            <div class="text-slate-800 font-medium text-2xl mt-1.5">
                {{ feedback.title }}
            </div>

            <div class="text-xs font-medium mt-1">
                {{ feedback.reporterName }} ({{ feedback.reporterEmail }})
            </div>

            <div
                class="mt-6 text-slate-800 prose"
                v-html="feedback.body"
            />
        </div>
    </div>
</template>
