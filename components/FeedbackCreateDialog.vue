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
