```vue
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const showUserMenu = ref(false)
const searchQuery = ref('')

const emit = defineEmits(['toggleSidebar'])
const router = useRouter()

const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/')
}
</script>

<template>
    <nav class="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50">
        <div class="px-4 mx-auto">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo y botón de menú -->
                <div class="flex items-center">
                    <button class="p-2 rounded-lg hover:bg-gray-100 lg:hidden" @click="$emit('toggleSidebar')">
                        <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div class="flex ml-2 lg:ml-0">
                        <span class="flex items-center">
                            <svg class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                            <span class="ml-2 text-xl font-semibold text-gray-900">Mi Foro</span>
                        </span>
                    </div>
                </div>

                <!-- Búsqueda -->
                <div class="flex-1 max-w-2xl mx-4 hidden md:block">
                    <div class="relative">
                        <input v-model="searchQuery" type="search" class="w-full px-4 py-2 pl-10 pr-4 rounded-lg bg-gray-50 border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Buscar en el foro...">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Iconos derecha -->
                <div class="flex items-center gap-3">
                    <!-- Notificaciones -->
                    <button class="p-2 text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                        <span class="sr-only">Ver notificaciones</span>
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <!-- Perfil -->
                    <div class="relative">
                        <button @click="showUserMenu = !showUserMenu"
                            class="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <img class="h-8 w-8 rounded-full"
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Usuario">
                        </button>

                        <!-- Menú desplegable -->
                        <div v-if="showUserMenu"
                            class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                            role="menu">
                            <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Mi Perfil
                            </router-link>
                            <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Configuración
                            </router-link>
                            <button @click="handleLogout"
                                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
```