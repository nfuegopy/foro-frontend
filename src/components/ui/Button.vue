```vue
<script setup>
defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    fullWidth: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary'].includes(value)
    }
})
</script>

<template>
    <button :disabled="loading" class="relative px-6 py-3 rounded-xl font-medium transition-all
               shadow-lg hover:shadow-xl active:scale-95
               disabled:opacity-70 disabled:cursor-not-allowed
               bg-blue-500 hover:bg-blue-600 text-white
               w-full">
        <span :class="{ 'opacity-0': loading }">
            <slot />
        </span>

        <!-- Spinner de carga -->
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
        </div>
    </button>
</template>
```