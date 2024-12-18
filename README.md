# 🎵 Music Player - Prueba Técnica

Este proyecto consiste en desarrollar un **reproductor de música** utilizando **Next.js** y la **API de Deezer**. A continuación, encontrarás una guía detallada sobre el proyecto, su configuración, ejecución y funcionalidades.

---

## 🚀 **Objetivo del Proyecto**

Desarrollar una aplicación web que permita a los usuarios **buscar canciones**, **reproducir música** y visualizar información relevante usando la [API pública de Deezer](https://developers.deezer.com/api).

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
Se implementó el componente `SearchBar`, reutilizado tanto para la versión de escritorio como para dispositivos móviles. Esto permitió mantener un código más limpio, modular y eficiente.

- **Componentes**:
    - `SearchBar`: Maneja las búsquedas de los usuarios y la sugerencia basada en el historial.
    - `MobileSearchBar`: Integra el `SearchBar` para versiones móviles con una funcionalidad de visibilidad condicional.

---

### 2. **Gestión de Estado Global con Zustand**
Se utilizó **Zustand** para manejar el estado global del término de búsqueda. Esto permitió que diferentes componentes (como `SearchBar` y `page.jsx`) puedan acceder al término actual sin necesidad de prop drilling.

- **Ventajas de Zustand**:
    - No requiere `Provider` como React Context.
    - API simple y directa.
    - Ligera y eficiente para el manejo de estado.

---

### 3. **Reactividad en Sugerencias de Búsqueda**
El historial de búsqueda se almacena en **LocalStorage** y se utiliza para:
- Mostrar sugerencias basadas en términos previamente buscados.
- Permitir seleccionar una sugerencia que rellene automáticamente el campo de búsqueda y envíe el formulario.

**Características:**
- Actualización dinámica del historial.
- Filtrado en tiempo real mientras el usuario escribe.
- Eliminación de sugerencias innecesarias.

---

## 📂 **Estructura del Proyecto**

La estructura de carpetas está organizada siguiendo las convenciones de **Next.js** con **App Router**:

```plaintext
music-player/
├── public/                 # Archivos estáticos (imágenes, íconos)
│   └── favicon.ico
├── src/                    # Código fuente principal
│   ├── app/                # Carpeta principal con App Router
│   │   ├── layout.jsx       # Layout global para la aplicación
│   │   ├── page.jsx         # Página principal "/"
│   │   └── favorites/      # Página "/favorites"
│   │       ├── page.js     # Página de canciones favoritas
│   │
│   ├── components/         # Componentes reutilizables
│   │   ├── SearchBar.js    # Barra de búsqueda
│   │   ├── SongCard.js     # Tarjeta para mostrar canciones
│   │   ├── Player.js       # Componente del reproductor de música
│   │   └── Header.js       # Encabezado de la aplicación
│   │
│   ├── services/           # Lógica para las llamadas a la API de Deezer
│   │   └── deezerService.js
│   │
│   ├── styles/             # Archivos CSS globales o módulos CSS
│   │   └── globals.css     # Estilos globales
│   │
│   ├── hooks/              # Hooks personalizados
│   │   └── useFavorites.js # Hook para gestionar canciones favoritas
│   │
│   ├── utils/              # Utilidades o helpers
│   │   └── formatData.js   # Funciones auxiliares para formatear datos
│   │
│   └── assets/             # Recursos como imágenes o íconos locales
├── .gitignore              # Archivos y carpetas ignorados por git
├── package.json            # Configuración del proyecto y dependencias
└── README.md               # Documentación del proyecto
```

## 👤 **Datos de Contacto**

- **Nombre**: Enrique Gómez Castellano  
- **Correo Electrónico**: [enriqueml.94@hotmaill.com](mailto:enriqueml.94@hotmaill.com)  
- **GitHub**: [https://github.com/EnriqueGo94](https://github.com/EnriqueGo94)  
- **LinkedIn**: [https://www.linkedin.com/in/enrique-gomez-castellano/](https://www.linkedin.com/in/enrique-gomez-castellano/)  
