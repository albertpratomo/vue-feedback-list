<script setup lang="ts">
import type { Feedback } from '~/server/models/feedback.schema'

const feedbackOnView = ref<Feedback>()
</script>

<template>
    <div class="h-full grid grid-cols-12">
        <Teleport to=".header-right">
            <div class="flex gap-4">
                <Button>
                    All feedback
                </Button>

                <Button>
                    New feedback
                </Button>
            </div>
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
