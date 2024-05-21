<script setup lang="ts">
const emit = defineEmits<{
    created: [feedback: StoredFeedback]
}>()

const open = ref(false)

function onCreated(feedback: StoredFeedback) {
    emit('created', feedback)

    open.value = false
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogTrigger>
            <Button>
                New feedback
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add new feedback</DialogTitle>
            </DialogHeader>

            <div class="p-8">
                <FeedbackCreateForm
                    @created="onCreated"
                    @discard="open = false"
                />
            </div>
        </DialogContent>
    </Dialog>
</template>
