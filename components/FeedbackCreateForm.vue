<script setup lang="ts">
import { useForm } from 'vee-validate'
import type { IFetchError } from 'ofetch'

const emit = defineEmits<{
    created: [feedback: StoredFeedback]
}>()

const form = useForm<Feedback>({
    initialValues: { type: 'Bug' },
})

async function onSubmit() {
    const feedback = await $fetch<StoredFeedback>('/api/feedback', {
        method: 'post',
        body: form.values,
    }).catch((e: IFetchError) => {
        if (e.statusCode === 422)
            form.setErrors(e.data.data.fieldErrors)
    })

    emit('created', feedback!)
}
</script>

<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="onSubmit"
    >
        <FormField v-slot="{ componentField }" name="reporterName">
            <FormItem>
                <FormLabel>Name</FormLabel>

                <FormControl>
                    <Input type="text" v-bind="componentField" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="reporterEmail">
            <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                    <Input type="email" v-bind="componentField" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="type">
            <FormItem>
                <FormLabel>Type</FormLabel>

                <FormControl>
                    <FeedbackTypeSelect v-bind="componentField" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="title">
            <FormItem>
                <FormLabel>Title</FormLabel>

                <FormControl>
                    <Input type="text" v-bind="componentField" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="body">
            <FormItem>
                <FormLabel>Message</FormLabel>

                <FormControl>
                    <Textarea type="text" v-bind="componentField" rows="5" />
                </FormControl>

                <FormMessage />
            </FormItem>
        </FormField>

        <div class="flex justify-end gap-4">
            <Button variant="secondary">
                Discard
            </Button>

            <Button type="submit">
                Send feedback
            </Button>
        </div>
    </form>
</template>
