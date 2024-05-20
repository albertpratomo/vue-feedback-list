<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog'
</script>

<template>
    <Dialog>
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
                <FeedbackCreateForm />
            </div>
        </DialogContent>
    </Dialog>
</template>
