<script setup lang="ts">
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
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

            <div class="px-8 py-4">
                Test
            </div>

            <DialogFooter>
                <DialogClose>
                    <Button variant="secondary">
                        Discard
                    </Button>
                </DialogClose>

                <Button>
                    Send feedback
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
