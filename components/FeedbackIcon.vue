<script setup lang="ts">
import { FeedbackType } from '~/server/models/feedback.schema'

interface Props {
    type: FeedbackType
}

defineProps<Props>()
</script>

<template>
    <IconExclamationPoint v-if="type === FeedbackType.Bug" />

    <IconBulb v-else />
</template>
