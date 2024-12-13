```vue
<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Overlay para móvil -->
        <div v-if="isSidebarOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden z-20"
            @click="toggleSidebar"></div>

        <Sidebar :is-open="isSidebarOpen" />

        <!-- Contenido principal -->
        <main class="lg:pl-64 pt-16">
            <div class="px-4 sm:px-6 lg:px-8 py-6">
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in" enter-active-class="transition-opacity duration-150"
                        enter-from-class="opacity-0" enter-to-class="opacity-100"
                        leave-active-class="transition-opacity duration-150" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </main>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
```