<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../ui/Button.vue'
import Input from '../ui/Input.vue'

const router = useRouter()
const loading = ref(false)
const error = ref('')

const form = ref({
    email: '',
    password: ''
})

const handleLogin = async () => {
    loading.value = true
    error.value = ''

    try {
        // Aquí iría la llamada a tu API
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación

        // Guardamos el token (esto es solo un ejemplo)
        localStorage.setItem('token', 'dummy-token')

        // Redirigimos al foro
        router.push('/forum')
    } catch (e) {
        error.value = 'Credenciales inválidas'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <form @submit.prevent="handleLogin" class="space-y-6">
        <div v-if="error" class="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
            {{ error }}
        </div>

        <Input v-model="form.email" type="email" label="Email" placeholder="nombre@ejemplo.com" required />

        <Input v-model="form.password" type="password" label="Contraseña" placeholder="••••••••" required />

        <div class="flex items-center justify-between text-sm">
            <label class="flex items-center">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600">
                <span class="ml-2 text-gray-600">Recordarme</span>
            </label>

            <a href="#" class="text-blue-600 hover:text-blue-500">
                ¿Olvidaste tu contraseña?
            </a>
        </div>

        <Button type="submit" :loading="loading" class="w-full">
            Iniciar Sesión
        </Button>
    </form>
</template>