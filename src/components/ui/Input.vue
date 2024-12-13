```vue
<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    error: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue'])
const isFocused = ref(false)
</script>

<template>
    <div class="mb-4">
        <label v-if="label" class="block text-sm font-medium text-gray-700 mb-1">
            {{ label }}
            <span v-if="required" class="text-red-500">*</span>
        </label>

        <input :type="type" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder" class="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl
                   text-gray-900 placeholder-gray-400
                   focus:border-blue-500 focus:outline-none
                   transition-colors duration-200" :class="{ 'border-red-500': error }">

        <p v-if="error" class="mt-1 text-sm text-red-500">
            {{ error }}
        </p>
    </div>
</template>
```