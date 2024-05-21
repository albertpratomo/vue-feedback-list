<template>
    <Select>
        <SelectTrigger>
            <SelectValue placeholder="Select a type" />
        </SelectTrigger>

        <SelectContent>
            <SelectGroup>
                <template
                    v-for="type in FeedbackTypeEnum.options"
                    :key="type"
                >
                    <SelectItem :value="type">
                        <div class="flex gap-2 items-center">
                            <FeedbackIcon :type="type" />

                            {{ type }}
                        </div>
                    </SelectItem>
                </template>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>
