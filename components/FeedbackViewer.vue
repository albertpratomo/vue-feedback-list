<script setup lang="ts">
import type { Feedback } from '~/server/models/feedback.schema'

interface Props {
    feedback: Feedback
}

defineProps<Props>()
</script>

<template>
    <div class="flex gap-3">
        <FeedbackIcon
            :type="feedback.type"
            class="mt-4"
        />

        <div>
            <div class="text-slate-800 font-medium text-2xl">
                {{ feedback.title }}
            </div>

            <div class="text-xs font-medium mt-1">
                {{ feedback.reporterName }} ({{ feedback.reporterEmail }})
            </div>

            <div class="mt-6 text-slate-800">
                {{ feedback.body }}
            </div>
        </div>
    </div>
</template>
