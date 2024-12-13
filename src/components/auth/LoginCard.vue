```vue
<script setup>
import { ref } from 'vue'
import Card from '../ui/Card.vue'
import LoginForm from './LoginForm.vue'

const loading = ref(false)

const handleLogin = async (credenciales) => {
    loading.value = true
    try {
        console.log('Intento de inicio de sesión:', credenciales)
    } catch (error) {
        console.error('Error de inicio de sesión:', error)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center  p-4">
        <!-- Contenedor del teléfono -->
        <div class="relative flex flex-col w-[380px] h-[740px] border-[4px] border-black rounded-[2rem] 
                    bg-gray-50 shadow-phone">
            <!-- Notch superior -->
            <span class="absolute top-0 left-1/2 -translate-x-1/2 
                       border border-black bg-black w-32 h-7 
                       rounded-b-2xl"></span>

            <!-- Botón de volumen -->
            <span class="absolute -right-2 top-28 
                       border-[4px] border-black h-16 
                       rounded-md bg-black"></span>

            <!-- Botón de encendido -->
            <span class="absolute -right-2 top-48 
                       border-[4px] border-black h-20 
                       rounded-md bg-black"></span>

            <!-- Contenido de la pantalla -->
            <div class="flex-1 p-6 pt-12">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-900">
                        Bienvenido
                    </h2>
                    <p class="mt-2 text-sm text-gray-600">
                        Ingresa a tu cuenta
                    </p>
                </div>

                <!-- Formulario de login -->
                <LoginForm :loading="loading" @submit="handleLogin" />

                <!-- Texto inferior -->
                <div class="mt-6 text-center">
                    <p class="text-sm text-gray-500 flex items-center justify-center gap-2">
                        Toca para desbloquear
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path stroke="currentColor" stroke-width="2"
                                d="M12 14.5v2M6 10V8a6 6 0 1 1 12 0v2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shadow-phone {
    box-shadow: 5px 5px 2.5px 6px rgb(209 218 218);
}
</style>
```