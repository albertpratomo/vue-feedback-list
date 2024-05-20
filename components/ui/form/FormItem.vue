<script lang="ts">
import type { HTMLAttributes, InjectionKey } from 'vue'
import { provide } from 'vue'
import { useId } from 'radix-vue'

export const FORM_ITEM_INJECTION_KEY = Symbol('FORM_ITEM_INJECTION_KEY') as InjectionKey<string>
</script>

<script lang="ts" setup>
const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
    <div :class="cn('space-y-1', props.class)">
        <slot />
    </div>
</template>
