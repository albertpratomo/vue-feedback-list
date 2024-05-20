<script setup lang="ts">
import { useForm } from 'vee-validate'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const form = useForm<Feedback>({
    validationSchema: undefined,
})

async function onSubmit() {
    const { error } = await useFetch('/api/feedback', {
        method: 'post',
        body: form.values,
        watch: false,
    })

    if (error.value?.data?.statusCode === 422)
        form.setErrors(error.value.data.data.fieldErrors)
}
</script>

<template>
    <form
        class="flex flex-col gap-4"
        @submit.prevent="onSubmit"
    >
        <FormField v-slot="{ componentField }" name="title">
            <FormItem>
                <FormLabel>Title</FormLabel>

                <FormControl>
                    <Input type="text" v-bind="componentField" />
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
