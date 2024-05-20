<script setup lang="ts">
interface Props {
    type: FeedbackType
}

defineProps<Props>()
</script>

<template>
    <IconExclamationPoint v-if="type === FeedbackTypeEnum.enum.Bug" />

    <IconBulb v-else />
</template>
