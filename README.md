# Foro Frontend - Vue 3 + Vite + Tailwind CSS

Un sistema de foro moderno desarrollado con Vue 3, Vite y Tailwind CSS, que se integra con una API REST en NestJS.

## 🚀 Características Implementadas

- 🔐 Sistema de autenticación
  - Login con diseño móvil moderno
  - Manejo de sesiones con JWT
  - Protección de rutas

- 📱 Interfaz Responsive
  - Diseño mobile-first
  - Sidebar colapsable
  - Navegación adaptativa

- 🎨 Diseño Moderno
  - Tema claro/oscuro
  - Animaciones y transiciones suaves
  - Componentes reutilizables

## 🛠️ Tecnologías Utilizadas

- **Vue 3** - Framework progresivo de JavaScript
- **Vite** - Build tool y dev server
- **Vue Router** - Enrutamiento oficial de Vue
- **Tailwind CSS** - Framework de CSS utilitario
- **Heroicons** - Set de iconos por Tailwind CSS

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginCard.vue
│   │   └── LoginForm.vue
│   └── ui/
│       ├── Button.vue
│       └── Input.vue
├── layouts/
│   ├── MainLayout.vue
│   └── components/
│       ├── Navbar.vue
│       └── Sidebar.vue
├── views/
│   ├── auth/
│   │   └── LoginView.vue
│   └── forum/
│       └── HomeView.vue
├── router/
│   └── index.js
├── App.vue
└── main.js
```

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo .env:
```bash
cp .env.example .env
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "vue-router": "^4.0.0",
    "@heroicons/vue": "^2.0.0",
    "axios": "^1.6.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

## 🔄 Estado Actual

- ✅ Implementación del sistema de layouts
- ✅ Diseño del login con efecto móvil
- ✅ Navegación responsive
- ✅ Componentes base UI
- ⏳ Implementación de autenticación
- ⏳ Integración con API
- ⏳ Gestión de estado con Pinia

## 🛣️ Próximos Pasos

1. Implementar autenticación completa
2. Integrar API de foro
3. Añadir gestión de estado con Pinia
4. Implementar sistema de notificaciones
5. Añadir funcionalidad de búsqueda
6. Completar CRUD de hilos y respuestas

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de build

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

[MIT](LICENSE)
