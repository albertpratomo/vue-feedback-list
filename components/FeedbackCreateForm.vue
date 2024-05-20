<script setup lang="ts">
import { useForm } from 'vee-validate'
import type { IFetchError } from 'ofetch'
import { LoaderCircle } from 'lucide-vue-next'
import { toTypedSchema } from '@vee-validate/zod'

const emit = defineEmits<{
    created: [feedback: StoredFeedback]
}>()

const form = useForm<Feedback>({
    validationSchema: toTypedSchema(FeedbackSchema),
    initialValues: { type: 'Bug' },
})

const onSubmit = form.handleSubmit(async (body) => {
    const feedback = await $fetch<StoredFeedback>('/api/feedback', {
        method: 'post',
        body,
    }).catch((e: IFetchError) => {
        if (e.statusCode === 422)
            form.setErrors(e.data.data.fieldErrors)
    })

    if (feedback)
        emit('created', feedback)
})
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
                <LoaderCircle
                    v-if="form.isSubmitting.value"
                    class="mr-2 size-4 animate-spin"
                />

                Send feedback
            </Button>
        </div>
    </form>
</template>
