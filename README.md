# 🏭 JKC Montajes Industriales - Website Corporativo

> Sitio web profesional para empresa líder en montajes, instalaciones y mantenimiento industrial con más de 15 años de experiencia en Argentina.

[![Deploy en Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 🌟 Características Principales

### 🎨 **Diseño Moderno y Profesional**
- Hero section premium con logo animado y estadísticas destacadas
- Glassmorphism effects y gradientes modernos
- Animaciones fluidas con Intersection Observer API
- Diseño responsive mobile-first (100% adaptable)

### 📸 **Galería de Proyectos Interactiva**
- **5 proyectos** completos con **37 fotografías** profesionales
- Lightbox de 2 columnas con información técnica detallada
- Sistema de filtros por categoría (Calderas, Instalaciones, Estructuras, Pulidos)
- Navegación entre proyectos sin cerrar el lightbox

### 📧 **Formulario de Contacto Funcional**
- Integración con EmailJS para envío automático de emails
- Validación de campos en tiempo real
- Modal de feedback visual (éxito/error) con animaciones
- Spinner de carga durante envío
- Prevención de spam con rate limiting

### ⚡ **Performance y UX**
- Lazy loading de imágenes con blur effect
- Contadores animados de estadísticas
- Botones flotantes: WhatsApp y Scroll-to-top
- Scroll animations dramáticas
- Google Maps integrado

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
|-----------|-----------|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Diseño moderno con Grid, Flexbox, Animations |
| **JavaScript (ES6+)** | Funcionalidad sin dependencias externas |
| **EmailJS** | Backend de formulario de contacto |
| **Google Maps API** | Ubicación de la empresa |

### 🎨 **CSS Moderno**
- CSS Grid y Flexbox para layouts responsivos
- Glassmorphism effects (`backdrop-filter`)
- Custom animations con `@keyframes`
- CSS Variables para theming consistente
- Transform y opacity para animaciones GPU-accelerated

### 💻 **JavaScript Vanilla**
- Lightbox personalizado con navegación por teclado
- Intersection Observer API para lazy loading
- Filtrado dinámico de proyectos
- Smooth scroll nativo
- Event listeners optimizados

---

## 📂 Estructura del Proyecto

```
Jorgepage/
├── index.html              # Página principal
├── styles.css              # Estilos globales (~3800 líneas)
├── script.js               # Lógica JavaScript (~730 líneas)
├── README.md               # Este archivo
├── logo.jpeg               # Logo de la empresa
├── fotos/                  # Galería de proyectos
│   ├── calderas/           # Mantenimiento de calderas (6 fotos)
│   ├── piping/             # Sistemas de tuberías (5 fotos)
│   ├── inoxidable_piping/  # Proyecto AYSA (6 fotos)
│   ├── estructuras/        # Estructuras metálicas (4 fotos)
│   └── pulido/             # Pulidos industriales (16 fotos)
└── .gitignore              # Archivos excluidos del repositorio
```

---

## 🎯 Servicios Destacados

- ✅ **Montajes Industriales** - Instalación de equipos y maquinaria pesada
- ✅ **Instalaciones Industriales** - Sistemas de piping y conexiones
- ✅ **Mantenimiento Industrial** - Preventivo y correctivo
- ✅ **Estructuras Metálicas** - Fabricación y montaje en altura
- ✅ **Proyectos Llave en Mano** - Soluciones integrales
- ✅ **Calderas y Sistemas** - Reparación y mantenimiento especializado
- ✅ **Pulidos Industriales** - Acabados de alta precisión (Mirror #8, Brushed #4)

---

## 🏢 Clientes Destacados

- **Avon** - Industria cosmética
- **Bimbo** - Industria alimenticia
- **Biosidus** - Industria farmacéutica/biotecnológica
- **AYSA** - Agua y Saneamientos Argentinos

---

## 🌐 Deploy en Vercel

### Pasos para Deployar:

1. **Fork o Clone** este repositorio
2. **Importar** en Vercel desde GitHub
3. **Configurar** como Static Site (no requiere build)
4. **Deploy** automático

### Configuración Recomendada:
```
Framework Preset: Other
Build Command: (dejar vacío)
Output Directory: . (directorio raíz)
Install Command: (dejar vacío)
```

---

## 📱 Responsive Design

El sitio está optimizado para todas las pantallas:

| Dispositivo | Breakpoint | Características |
|-------------|-----------|-----------------|
| **Mobile** | < 768px | Menú hamburguesa, Grid 1 columna |
| **Tablet** | 768px - 968px | Grid 2 columnas, Navegación completa |
| **Desktop** | > 968px | Grid 3 columnas, Lightbox 2 columnas |

---

## 🎨 Paleta de Colores

```css
--primary-color: #004E92;    /* Azul Industrial */
--secondary-color: #F8931F;   /* Naranja Seguridad */
--dark-bg: #1B2631;          /* Fondo Oscuro */
--light-bg: #F4F6F7;         /* Fondo Claro */
```

---

## 📞 Información de Contacto

- **📍 Dirección:** Río Atuel 1353, Presidente Derqui, Buenos Aires, Argentina
- **📞 Teléfono:** +54 9 11 3128-3798
- **📧 Email:** jkcindustriales@gmail.com
- **💬 WhatsApp:** Botón flotante con acceso directo

---

## 🔧 Instalación Local

### Opción 1: Abrir directamente
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/jkc-montajes.git

# Abrir index.html en tu navegador
open index.html  # macOS
start index.html # Windows
```

### Opción 2: Live Server (Recomendado)
```bash
# Con VS Code + Live Server extension
# Click derecho en index.html → "Open with Live Server"
```

### Opción 3: HTTP Server simple
```bash
# Python 3
python -m http.server 8000

# Node.js (con http-server)
npx http-server -p 8000
```

Luego abrir: `http://localhost:8000`

---

## 🚀 Características de Performance

- ✅ **Lazy Loading:** Imágenes se cargan solo al ser visibles
- ✅ **CSS Optimizado:** Animaciones GPU-accelerated
- ✅ **Sin Dependencias:** Carga rápida sin librerías pesadas
- ✅ **Responsive Images:** Adaptación automática al tamaño de pantalla
- ✅ **Smooth Scroll:** Navegación fluida nativa del navegador

---

## 🎭 Animaciones y Efectos

- **Scroll Animations:** Fade, Slide, Scale con Intersection Observer
- **Lightbox:** Entrada cinematográfica con backdrop blur
- **Lazy Loading:** Blur effect mientras carga la imagen
- **Contadores:** Animación progresiva de estadísticas
- **Hover Effects:** Transformaciones suaves en cards y botones
- **Form Feedback:** Modal animado con íconos (pulso y shake)

---

## 📄 Licencia

© 2025-2026 JKC Montajes Industriales. Todos los derechos reservados.

---

## 👨‍💻 Desarrollado Por

**Nicolás Ariel Nogueroles**  
Portfolio: [https://portfolio-tau-seven-38.vercel.app/](https://portfolio-tau-seven-38.vercel.app/)

---

## 🤝 Contribuciones

Este es un proyecto privado para JKC Montajes Industriales.  
Para consultas o modificaciones, contactar al desarrollador.

---

## 📊 Versión Actual

**v2.7** - Febrero 2026  
✨ Formulario de contacto funcional con EmailJS  
🎨 Modal de feedback visual mejorado  
🐛 Correcciones de bugs y mejoras de UX

---

**⭐ Si te gusta este proyecto, dale una estrella en GitHub!**
