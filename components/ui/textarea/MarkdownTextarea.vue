<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps<{
    class?: HTMLAttributes['class']
    defaultValue?: string
    modelValue?: string
    placeholder: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
})

const editor = useEditor({
    content: modelValue.value,
    editorProps: {
        attributes: {
            'class': 'focus:outline-none',
            'data-placeholder': props.placeholder,
        },
    },
    extensions: [
        StarterKit,
    ],
    onUpdate({ editor }) {
        // If there is no text, the value is considered empty.
        modelValue.value = editor.getText().trim() === ''
            ? ''
            : editor.getHTML()
    },
})
</script>

<template>
    <EditorContent
        :class="cn('prose prose-sm text-slate-800 min-h-40 rounded-md border border-input bg-background px-3 py-2 ring-offset-background focus-within:outline-none focus-within:ring-1 focus-within:ring-ring disabled:cursor-not-allowed disabled:opacity-50', props.class)"
        :editor="editor"
    />
</template>

<style scoped>
:deep(.ProseMirror:has(> p:only-child > br:only-child):before) {
    @apply text-slate-400 float-left pointer-events-none h-0;
    content: attr(data-placeholder);
}
</style>
