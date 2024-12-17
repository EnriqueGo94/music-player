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
- **Gestión del estado**: React Hooks (useState, useEffect)

---

## 📂 **Estructura del Proyecto**

La estructura de carpetas está organizada siguiendo las convenciones de **Next.js** con **App Router**:

```plaintext
music-player/
├── public/                 # Archivos estáticos (imágenes, íconos)
│   ├── next.svg
│   ├── vercel.svg
│   └── favicon.ico
├── src/                    # Código fuente principal
│   ├── app/                # Carpeta principal con App Router
│   │   ├── layout.js       # Layout global para la aplicación
│   │   ├── page.js         # Página principal "/"
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
