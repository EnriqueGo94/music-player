# 🎵 Music Player - Prueba Técnica

Este proyecto consiste en desarrollar un **reproductor de música** utilizando **React.js** y la **API de Deezer**. A
continuación, encontrarás una guía detallada sobre el proyecto, su configuración, ejecución y funcionalidades.

---

## 🚀 **Objetivo del Proyecto**

Desarrollar una aplicación web que permita a los usuarios **buscar canciones**, **reproducir música** y visualizar
información relevante usando la [API pública de Deezer](https://developers.deezer.com/api).

---

## 🛠️ **Tecnologías Utilizadas**

- **Framework**: Next.js 13+
- **Lenguaje**: JavaScript (ES6+)
- **Estilos**: Tailwind CSS / CSS Modules
- **HTTP Requests**: Axios
- **Reproductor**: HTML5 Audio API
- **Gestión del estado global**: Zustand
- **Reactividad y componentes**: React Hooks (useState, useEffect)

---

## 🔄 **Técnicas Destacadas**

### 1. **Reutilización de Componentes**

Se implementó el componente `SearchBar`, reutilizado tanto para la versión de escritorio como para dispositivos móviles.
Esto permitió mantener un código más limpio, modular y eficiente.

- **Componentes**:
    - `SearchBar`: Maneja las búsquedas de los usuarios y la sugerencia basada en el historial.
    - `MobileSearchBar`: Integra el `SearchBar` para versiones móviles con una funcionalidad de visibilidad condicional.

---

### 2. **Gestión de Estado Global con Zustand**

Se utilizó **Zustand** para manejar el estado global del término de búsqueda. Esto permitió que diferentes componentes (
como `SearchBar` y `page.jsx`) puedan acceder al término actual sin necesidad de prop drilling.

- **Ventajas de Zustand**:
    - No requiere `Provider` como React Context.
    - API simple y directa.
    - Ligera y eficiente para el manejo de estado.

---

### 3. **Reactividad en Sugerencias de Búsqueda y Reproductor de Música**

El proyecto implementa una gestión reactiva tanto en las sugerencias de búsqueda como en el reproductor de música, lo que mejora la experiencia del usuario.

#### **Sugerencias de Búsqueda**
- El historial de búsqueda se almacena localmente en **LocalStorage**.
- Las sugerencias se actualizan dinámicamente mientras el usuario escribe en el campo de búsqueda.
- Al seleccionar una sugerencia, el campo se rellena automáticamente y se realiza la búsqueda correspondiente.
- Posibilidad de eliminar sugerencias individuales para limpiar el historial.

**Características Clave:**
- Filtrado en tiempo real basado en el historial.
- Persistencia de datos mediante **LocalStorage**.
- Interfaz reactiva que responde a las interacciones del usuario.

#### **Reactividad en el Reproductor de Música**
- El reproductor de música reacciona dinámicamente a la selección de una canción desde la lista.
- Si se selecciona una canción nueva, el reproductor carga y reproduce automáticamente la nueva pista.
- Si se selecciona la misma canción que ya está pausada, el reproductor reanuda la reproducción.
- La **barra de progreso** y el **estado de reproducción** son totalmente reactivos, actualizándose en tiempo real.

**Características Clave:**
- Reanudación de la reproducción al seleccionar la misma canción.
- Cambio dinámico de la pista al seleccionar una canción diferente.
- Reactividad de la barra de progreso y controles de reproducción.

Estas técnicas permiten una experiencia de usuario fluida y eficiente, integrando tanto la búsqueda de canciones como la gestión del reproductor de manera sincronizada.

---

## 📂 **Estructura del Proyecto**

La estructura de carpetas está organizada siguiendo las convenciones de **Next.js** con **App Router**:

```plaintext
music-player/
├── public/                 # Archivos estáticos (favicon, imágenes)
│   └── favicon.ico
│
├── src/                    # Código fuente principal
│   ├── api/                # Llamadas a la API
│   │   └── deezer.js       # Lógica para las consultas a la API de Deezer
│   │
│   ├── app/                # Carpeta principal de Next.js App Router
│   │   ├── favicon.ico     # Ícono principal de la aplicación
│   │   ├── layout.jsx      # Layout global que se aplica a toda la aplicación
│   │   └── page.jsx        # Página principal "/"
│   │
│   ├── components/         # Componentes reutilizables
│   │   ├── MobileSearchBar.jsx  # Barra de búsqueda para dispositivos móviles
│   │   ├── MusicPlayer.jsx      # Reproductor de música principal
│   │   ├── NavList.jsx          # Navegación de la aplicación
│   │   ├── SearchBar.jsx        # Barra de búsqueda reutilizable
│   │   ├── SongList.jsx         # Lista de canciones con información
│   │   └── TopBar.jsx           # Barra de navegación superior
│   │
│   ├── store/              # Gestión del estado global (Zustand)
│   │   ├── musicStore.js   # Almacena y controla el estado del reproductor
│   │   └── searchStore.js  # Almacena el estado de búsqueda global
│   │
│   ├── styles/             # Estilos globales y módulos CSS
│   │   ├── globals.css     # Estilos globales
│   │   ├── music-player/   # Estilos específicos del reproductor de música
│   │   ├── nav-list/       # Estilos del listado de navegación
│   │   ├── search-bar/     # Estilos de la barra de búsqueda
│   │   ├── song-list/      # Estilos de la lista de canciones
│   │   ├── top-bar/        # Estilos de la barra superior
│   │   └── index/          # Estilos generales
│   │
│   └── utils/              # Funciones de utilidad
│       └── formatTime.js   # Función para formatear el tiempo del reproductor
│   
│   
├── .env.local              # Variables de entorno
├── .gitignore              # Archivos y carpetas ignorados por git
├── .prettierrc             # Configuración de Prettier para formateo del código
├── eslint.config.mjs       # Configuración de ESLint para linting
├── jsconfig.json           # Configuración de rutas absolutas en JavaScript
├── next.config.mjs         # Configuración específica de Next.js
└── package.json            # Configuración del proyecto y dependencias
```

## 🚀 **Cómo Lanzar y Probar el Proyecto**

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

### 1. **Clonar el Repositorio**

Primero, clona el repositorio desde GitHub usando el siguiente comando:

```bash
git clone https://github.com/EnriqueGo94/music-player.git
```

### 2. **Navegar al Directorio del Proyecto**

Después de clonar, accede a la carpeta raíz del proyecto:

```bash
cd music-player
```

### 3. **Instalar Dependencias**

Instala las dependencias necesarias para ejecutar el proyecto:

#### Usando npm:

```bash
npm install
```

### 4. **Configurar Variables de Entorno**

El archivo `.env.local` ya existe en el repositorio con una clave de API de ejemplo. Para que el proyecto funcione
correctamente, debes reemplazar la clave de API existente con la tuya.

1. Abre el archivo `.env.local` en la raíz del proyecto.
2. Modifica el valor de la variable `NEXT_PUBLIC_RAPIDAPI_KEY` con tu propia clave de la API de Deezer:

```plaintext
NEXT_PUBLIC_RAPIDAPI_KEY=tu_clave_api_aqui
NEXT_PUBLIC_RAPIDAPI_HOST=deezerdevs-deezer.p.rapidapi.com
```

### 5. **Iniciar el Servidor de Desarrollo**

Una vez configuradas las variables de entorno, inicia el servidor local para probar la aplicación.

#### Usando npm:

```bash
npm run dev
```

### 6. **Abrir la Aplicación**

Abre tu navegador e ingresa la siguiente dirección:

```plaintext
http://localhost:3000
```

## 👤 **Datos de Contacto**

- **Nombre**: Enrique Gómez Castellano
- **Correo Electrónico**: [enriqueml.94@hotmaill.com](mailto:enriqueml.94@hotmaill.com)
- **GitHub**: [https://github.com/EnriqueGo94](https://github.com/EnriqueGo94)
- **LinkedIn
  **: [https://www.linkedin.com/in/enrique-gomez-castellano/](https://www.linkedin.com/in/enrique-gomez-castellano/)  
