<script setup>
defineProps({
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'auth', 'bordered'].includes(value)
    },
    padding: {
        type: String,
        default: 'default',
        validator: (value) => ['none', 'small', 'default', 'large'].includes(value)
    }
})
</script>

<template>
    <div :class="[
        'rounded-lg shadow-lg bg-white dark:bg-gray-800',
        {
            'p-6': padding === 'default',
            'p-4': padding === 'small',
            'p-8': padding === 'large',
            'border border-gray-200 dark:border-gray-700': variant === 'bordered',
            'bg-white/80 backdrop-blur-sm': variant === 'auth'
        }
    ]">
        <slot></slot>
    </div>
</template>