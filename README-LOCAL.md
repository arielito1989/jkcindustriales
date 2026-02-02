# 🏭 JKC Montajes Industriales - Website

Sitio web corporativo profesional para **JKC Montajes Industriales**, empresa especializada en montajes, instalaciones y mantenimiento industrial con más de 10 años de experiencia.

---

## 🎨 Diseño y Características

### **Hero Section Premium**
- Logo animado como elemento principal con efecto de flotación y glow pulsante
- Barra de estadísticas con glassmorphism (15 años, 40+ proyectos, 100% compromiso)
- Título con gradiente dorado en texto destacado
- 3 features visuales con íconos: Certificaciones, Seguridad, Puntualidad
- Fondo con gradiente oscuro y círculos animados flotantes
- 3 CTAs prominentes: Solicitar Presupuesto, Ver Proyectos, WhatsApp Directo
- Scroll indicator animado con mouse

### **Galería de Proyectos Profesional**
- Sistema de lightbox de 2 columnas:
  - **Columna izquierda (60%)**: Galería de imágenes con fondo negro
  - **Columna derecha (40%)**: Panel de información detallada con scroll personalizado
- Información expandida por proyecto:
  - Badge de categoría (calderas, instalaciones, estructuras, pulidos)
  - Título y descripción detallada
  - Especificaciones: Cliente y Duración
  - Lista de detalles técnicos con checkmarks
- Navegación entre imágenes con tamaño fijo (sin saltos visuales)
- Contador de fotos (1 / 5)
- Filtros por categoría: Todos, Calderas, Instalaciones, Estructuras, Pulidos

### **Proyectos Incluidos**

**Total: 5 proyectos consolidados con 37 fotos**

1. **Mantenimiento y Reparación Integral de Calderas** (6 fotos)
   - Mantenimiento preventivo y correctivo completo
   - Reparación mayor con reemplazo de 120 tubos
   - Esmerilado, soldadura certificada AWS D1.1
   - Pruebas hidrostáticas y END
   
2. **Instalación de Sistema de Piping Industrial** (5 fotos)
   - Diseño, fabricación, montaje de +200m de cañería
   - Certificación ASME con trazabilidad completa

3. **Integración de Intercambiador de Calor - AYSA** (6 fotos)
   - Instalación en circuito de vapor existente
   - Soldadura TIG, conexiones bridadas y roscadas
   - Cliente: AYSA Argentina (Agua y Saneamientos)

4. **Fabricación y Montaje de Estructuras Metálicas en Altura** (4 fotos)
   - 15 toneladas de estructura metálica
   - Montaje especializado hasta 25m de altura
   - Personal certificado IRAM 3836

5. **Pulidos Industriales de Alta Precisión** (16 fotos)
   - Pulido Espejo Mirror #8 (Ra < 0.4 μm)
   - Pulido Satinado Brushed #4 (FDA Food Grade)
   - Electropulido (Ra < 0.25 μm, ASME BPE)
   - Recuperación de superficies (extensión vida útil 5-8 años)

### **Servicios**
- Montajes Industriales
- Instalaciones Industriales
- Mantenimiento Industrial
- Estructuras Metálicas
- Proyectos Llave en Mano
- Calderas y Sistemas
- Pulidos Industriales

### **Sección de Clientes**
- Logos en escala de grises con efecto hover a color
- Clientes destacados: Avon, Bimbo, Biosidus

### **Responsive Design**
- Mobile-first approach
- Breakpoints: 768px y 968px
- Menú hamburguesa animado
- Grid adaptativo (3 → 2 → 1 columna)
- Lightbox apilado en 1 columna en móviles

---

## 🚀 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con:
  - CSS Grid y Flexbox para layouts responsivos
  - Glassmorphism effects (backdrop-filter)
  - Custom animations y keyframes (@keyframes bounceIn, fadeInUp, etc.)
  - CSS Variables para theming consistente
  - Gradientes complejos y backdrop-filter
  - Transform y opacity para animaciones GPU-accelerated
- **JavaScript Vanilla** (ES6+) - Funcionalidad sin dependencias:
  - Lightbox personalizado de 2 columnas con navegación
  - Intersection Observer API para lazy loading y scroll animations
  - Filtrado dinámico de proyectos por categoría
  - Smooth scroll nativo
  - Contadores animados con incremento progresivo
  - Event listeners optimizados con { once: true }

---

## 📂 Estructura del Proyecto

```
Jorgepage/
├── index.html              # Página principal
├── styles.css              # Estilos globales y componentes (3700+ líneas)
├── script.js               # Lógica JavaScript (640+ líneas)
├── logo.jpeg               # Logo de la empresa
├── logojor.png             # Logo alternativo
├── kevincito.jpeg          # Imagen profesional soldadura (Sobre Nosotros)
├── JKC-Brochure.pdf        # Brochure descargable
├── JKCindustrial.pdf       # Catálogo industrial
├── images/
│   └── clientes/           # Logos de clientes (3)
│       ├── avon.png
│       ├── bimbo.png
│       └── biosidus.png
├── fotos/                  # Galería de proyectos (37 fotos totales)
│   ├── pulido/             # Pulidos industriales (16 fotos)
│   │   ├── Mirror_8/       # Pulido Espejo
│   │   ├── Brushed_4/      # Pulido Satinado
│   │   ├── Electropolish/  # Electropulido
│   │   └── Recovery/       # Recuperación superficies
│   ├── inoxidable_piping/  # Proyecto AYSA (6 fotos)
│   ├── calderas/           # Calderas (6 fotos)
│   ├── estructuras/        # Estructuras metálicas (4 fotos)
│   └── piping/             # Sistema piping (5 fotos)
└── README.md               # Este archivo
```

---

## 🎨 Paleta de Colores

```css
--primary-color: #004E92;    /* Azul Industrial */
--secondary-color: #F8931F;   /* Naranja Seguridad */
--dark-bg: #1B2631;          /* Fondo Oscuro */
--light-bg: #F4F6F7;         /* Fondo Claro */
```

---

## 🌐 Cómo Visualizar

### Opción 1: Doble Click
Abre directamente `index.html` con tu navegador

### Opción 2: Live Server (VS Code)
1. Instala la extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 3: Ruta Directa
```
file:///C:/Users/nicol/Documents/Paginas/Jorgepage/index.html
```

---

## 📱 Características de UX

- ✅ Animaciones suaves con fadeInUp
- ✅ Lightbox profesional con navegación por teclado (flechas, ESC)
- ✅ Scroll indicator animado
- ✅ Botones flotantes siempre accesibles: WhatsApp (verde oficial) y Scroll-to-top (aparece al hacer scroll)
- ✅ Scroll animations dramáticas con Intersection Observer (fade, slide, scale)
- ✅ Imagen profesional en "Sobre Nosotros" con badge certificado
- ✅ Contadores animados (15 años, 40+ proyectos, 100% compromiso)
- ✅ Formulario de contacto funcional con EmailJS (envío automático a jkcindustriales@gmail.com)
- ✅ Feedback visual completo: loading, success, error
- ✅ Google Maps integrado
- ✅ Lazy loading de imágenes con blur effect
- ✅ Transiciones fluidas en todos los elementos
- ✅ Hover effects premium en cards y botones
- ✅ Colores de marca consistentes (WhatsApp verde #25D366)

---

## 📞 Información de Contacto

- **Dirección**: Río Atuel 1353, Presidente Derqui, Buenos Aires, Argentina
- **Teléfono**: +54 9 11 3128-3798
- **Email**: jkcindustriales@gmail.com ✅ (Formulario web funcional)
- **WhatsApp**: Botón flotante con link directo

---

## 👨‍💻 Desarrollado Por

**Nicolás Ariel Nogueroles**  
Portfolio: [https://portfolio-tau-seven-38.vercel.app/](https://portfolio-tau-seven-38.vercel.app/)

---

## 📝 Changelog

### **Versión 2.7 - 02 de Febrero 2026**

#### ✨ Nueva Funcionalidad
- **Formulario de Contacto Funcional con EmailJS**
  - Integración completa con EmailJS para envío automático de emails
  - Emails llegan a: jkcindustriales@gmail.com
  - Credenciales configuradas: Service ID, Template ID, Public Key
  
#### 🎨 Mejoras de UX
- **Feedback Visual Completo**
  - Loading spinner animado durante envío
  - Mensajes de éxito (verde) y error (rojo) con auto-desaparición
  - Deshabilitación del botón durante envío (previene spam)
  - Reset automático del formulario tras envío exitoso
  
#### 🔧 Implementación Técnica
- **SDK de EmailJS:** Agregado en index.html antes del cierre de </body>
- **JavaScript:** +83 líneas en script.js con manejo completo del formulario
- **CSS:** +41 líneas en styles.css para estilos de mensajes y spinner
- **Validación:** HTML5 validation + prevención de múltiples envíos
- **Manejo de errores:** Mensajes claros con sugerencia de WhatsApp como alternativa

---

### **Versión 2.6 - 28 de Enero 2026**

#### 🐛 Correcciones Críticas y Mejoras UX

**1. Corrección: Sección Metodología Invisible**
- **Bug identificado**: Llave CSS duplicada `}` en línea 3606 de styles.css
- **Efecto**: Los steps de metodología (01-04) permanecían con opacity: 0
- **Causa raíz**: La llave extra cerraba prematuramente el bloque `.process-step`, invalidando el selector `.visible`
- **Solución**: Eliminada la llave duplicada
- **Resultado**: Animaciones funcionando correctamente
  - Imagen de metodología: slide desde derecha con scale
  - Steps: cascada desde izquierda con delays (0.15s, 0.3s, 0.45s, 0.6s)
  - Efecto de convergencia bilateral restaurado

**2. Botones Flotantes Ahora Visibles Globalmente**
- **Bug identificado**: Estilos de `.whatsapp-float` y `.scroll-top` estaban dentro del media query móvil
- **Efecto**: Botones solo visibles en dispositivos <768px (móviles)
- **Solución**: Creada sección global "FLOATING BUTTONS" con estilos base
- **Mejoras implementadas**:
  
  **Botón WhatsApp Flotante:**
  - Position fixed: bottom 30px, right 30px
  - Color oficial: #25d366 (verde WhatsApp)
  - Tamaño: 60px (desktop), 55px (móvil)
  - Animación entrada: `bounceIn` con rebote suave
  - Hover: scale(1.15) + rotate(5deg) + cambio a #128C7E
  - Sombra: rgba(37, 211, 102, 0.4) → 0.6 en hover
  - z-index: 2000 (siempre visible)

  **Botón Scroll-to-Top:**
  - Position fixed: bottom 30px, right 105px (al lado de WhatsApp)
  - Color: var(--primary-color) con cambio a var(--secondary-color) en hover
  - Tamaño: 50px (desktop), 45px (móvil)
  - Aparece después de 500px de scroll con fade + slide up
  - Hover: translateY(-5px) con sombra intensa
  - Click: smooth scroll al inicio de página
  - Flecha animada: se mueve -3px adicionales en hover

**3. Botón WhatsApp CTA con Identidad de Marca**
- **Bug identificado**: Botón "WhatsApp Directo" en sección CTA con texto ilegible
- **Problema**: Color heredado del fondo, apenas visible sin hover
- **Solución**: Estilos globales con colores WhatsApp y `!important`
- **Mejoras visuales**:
  - Estado normal: background #25D366 + texto blanco
  - Estado hover: background #128C7E + lift 4px + scale 1.05
  - Display: inline-flex con gap 0.5rem (alineación perfecta)
  - Border-radius: 50px (píldora redondeada)
  - Padding: 1rem 2rem (espacioso y clickeable)
  - Sombra: rgba(37, 211, 102, 0.3) → 0.5 en hover
  - Ícono: rota 15° y escala 110% en hover
  - Transición: cubic-bezier(0.4, 0, 0.2, 1) para suavidad
  - Responsive: padding y tamaños ajustados en móvil

#### 🎨 Mejoras de Accesibilidad
- Botones flotantes siempre accesibles en todas las resoluciones
- Colores de marca consistentes (WhatsApp verde oficial)
- Animaciones suaves con feedback visual claro
- Hover states bien definidos para interactividad
- z-index optimizado para visibilidad garantizada

#### 📊 Optimizaciones Técnicas
- Eliminadas definiciones CSS duplicadas
- Estilos movidos de media queries a sección global
- Código CSS más limpio y mantenible
- Responsive design sin duplicación de código
- Animaciones GPU-accelerated (transform + opacity)

---

### **Versión 2.5 - 28 de Enero 2026**

#### 🎨 Mejoras Visuales Implementadas
- **Lazy Loading Avanzado**
  - Intersection Observer para carga eficiente de imágenes
  - Carga anticipada: 50px antes de ser visibles
  - Estados visuales: loading (blur 5px), loaded, error
  - Efecto shimmer en placeholders
  - Fade-in animado al completar carga (600ms)
  - Optimización de performance con threshold 0.01
  
- **Transiciones Mejoradas entre Proyectos**
  - Fade out/in coordinado con timing preciso (300ms)
  - Scale animation: 1 → 0.95 → 1 durante transición
  - Loading indicator elegante (spinner naranja animado)
  - Protección contra clicks múltiples con flag isTransitioning
  - Cubic-bezier timing function para suavidad
  
- **Animaciones Lightbox Profesionales**
  - Entrada cinematográfica con lightboxFadeIn (400ms)
  - Backdrop blur progresivo: 0px → 10px
  - Content slide-up con scale: translateY(30px) + scale(0.95)
  - Transiciones GPU-accelerated (transform + opacity)
  - Salida coordinada con fade out suave
  
#### 🎭 Efectos Visuales Agregados
- `@keyframes lightboxFadeIn` - Entrada del lightbox
- `@keyframes contentSlideUp` - Animación del contenido
- `@keyframes spin` - Loading spinner
- `@keyframes fadeInImage` - Fade-in de imágenes
- `@keyframes shimmer` - Efecto placeholder

#### 📊 Mejoras de Performance
- CSS transitions optimizadas (GPU compositing)
- Intersection Observer API nativa
- Transform y opacity para animaciones fluidas
- Backdrop-filter con fallback

---

### **Versión 2.4 - 28 de Enero 2026**

#### ➕ Nuevo Proyecto: Integración AYSA Argentina
- **Agregado proyecto crítico de integración de equipos**
  - Cliente: AYSA Argentina (Agua y Saneamientos Argentinos)
  - Trabajo: Instalación de intercambiador de calor en circuito de vapor
  - 6 fotos del proceso completo
  
- **Detalles Técnicos del Proyecto:**
  - Integración de equipos: Caldera → Pulmón amortiguador → Intercambiador
  - Piping en acero inoxidable 304/316L
  - Soldadura TIG (GTAW) en todas las uniones
  - Conexiones bridadas clase 150 (ASME B16.5)
  - Conexiones roscadas NPT en instrumentación
  - Pruebas hidrostáticas y neumáticas
  - Certificación AWS D1.6 de soldadores
  - Inspección radiográfica en uniones críticas
  - Aseguramiento de continuidad operativa

#### 📊 Actualización de Estadísticas
- Total de proyectos: 4 → 5
- Total de fotos: 31 → 37 (+6)
- Categoría: Instalaciones (ya existente)

---

### **Versión 2.3 - 28 de Enero 2026**

#### 🔄 Reorganización Estructural de Proyectos
- **Consolidación de proyectos relacionados para mejor coherencia**
  - Proyectos reducidos de 9 a 4 (más organizados y completos)
  - Mantienen las 31 fotos totales, mejor distribuidas
  
- **Calderas Unificadas:**
  - Fusionado "Mantenimiento Integral" + "Reparación Mayor"
  - Ahora: **"Mantenimiento y Reparación Integral de Calderas"**
  - 6 fotos totales con proceso completo
  - Agregado detalle de esmerilado y soldadura certificada
  
- **Estructuras Consolidadas:**
  - Fusionado "Montaje en Altura" + "Estructuras Pesadas"
  - Ahora: **"Fabricación y Montaje de Estructuras Metálicas en Altura"**
  - 4 fotos totales mostrando proceso completo
  - Combina fabricación (15 ton) + montaje vertical (25m)
  
- **Pulidos Unificados:**
  - 4 proyectos separados → 1 proyecto integral
  - Ahora: **"Pulidos Industriales de Alta Precisión"**
  - 16 fotos mostrando todos los tipos de pulidos
  - Detalle de 4 técnicas: Espejo, Satinado, Electropulido, Recuperación
  
- **Filtros Simplificados:**
  - Categorías: Todos, Calderas, Instalaciones, Estructuras, Pulidos
  - Eliminados: "Montajes" y "Mantenimiento" (ahora integrados)

#### 📊 Nueva Estructura
| Proyecto | Fotos | Categoría |
|----------|-------|-----------|
| Calderas | 6 | calderas |
| Piping | 5 | instalaciones |
| Estructuras | 4 | estructuras |
| Pulidos | 16 | pulidos |
| **TOTAL** | **31** | **4 proyectos** |

---

### **Versión 2.2 - 28 de Enero 2026**

#### ✨ Nueva Categoría: Pulidos Industriales
- **Expansión de Galería: +4 proyectos de pulidos** (16 fotos totales)
  - Pulido Espejo AISI 316L con acabado Mirror #8
  - Pulido Satinado Direccional (Brushed #4) en tanques
  - Electropulido para equipamiento sanitario (ASME BPE)
  - Recuperación de superficies con pulido mecánico
  
- **Información Técnica Detallada por Proyecto:**
  - Tipo de superficie y material (AISI 316L, 304, etc.)
  - Técnicas utilizadas (mecánico, electroquímico, químico)
  - Acabados específicos (espejo, satinado, electropolish)
  - Rugosidad superficial alcanzada (Ra en micrones)
  - Normativas aplicadas (ASTM A480, FDA, ASME BPE)
  - Equipamiento y proceso paso a paso
  - Certificaciones y controles de calidad
  
- **Nuevo Filtro de Categoría:**
  - Agregado botón "Pulidos" en sistema de filtros
  - Total de proyectos aumentado de 5 a 9
  - Total de fotos: 31 imágenes en galería

---

### **Versión 2.1 - 27 de Enero 2026**

#### 🐛 Correcciones Críticas
- **Bug Fix: Lightbox no visible en Desktop**
  - Problema: Los estilos del lightbox estaban solo dentro de un media query móvil (@media max-width: 768px)
  - Solución: Movidos todos los estilos base del lightbox fuera de media queries
  - Resultado: Lightbox ahora funciona correctamente en todas las resoluciones
  
- **Bug Fix: Estilos duplicados y conflictivos**
  - Eliminados múltiples bloques duplicados de estilos del lightbox
  - Removidos estilos obsoletos que causaban conflictos de posicionamiento
  - Código CSS optimizado y organizado

#### 🎨 Mejoras Visuales del Lightbox

**Flechas de Navegación de Imágenes:**
- Flecha izquierda: 15px del borde (bien posicionada)
- Flecha derecha: 5px del borde (en el límite sin invadir panel de texto)
- Fondo más oscuro (rgba(0, 0, 0, 0.7)) para mejor contraste
- Bordes más visibles (rgba(255, 255, 255, 0.3))
- Hover mejorado con escala de 1.15
- Íconos SVG más grandes (26px)
- Backdrop blur aumentado (8px)
- Sombras más pronunciadas

**Botones de Navegación de Proyectos:**
- Diseño completamente renovado con estilo industrial
- Fondo: Color naranja con opacidad (rgba(248, 147, 31, 0.1))
- Bordes sólidos de 2px en color naranja (--secondary-color)
- Texto en blanco con fuente Montserrat peso 600
- Hover effect: transformación hacia arriba y sombra naranja
- Íconos SVG de 20px con stroke-width 2.5
- Responsive: tamaño reducido en móviles (0.85rem)

**Botón de Cerrar:**
- Estilos restaurados correctamente
- Tamaño: 50px con fondo oscuro semi-transparente
- Hover: color rojo (#dc2626) con rotación de 90°
- Z-index alto (10010) para estar siempre accesible

#### 📐 Layout del Lightbox
- Grid explícito: Imagen columna 1, Info columna 2
- Proporción 1.2fr (imagen) : 0.8fr (info)
- Gap de 2rem entre columnas
- Altura de imagen: 80vh en desktop, 50vh en móviles
- Panel de info con scroll personalizado (scrollbar naranja)

#### 🔧 Optimizaciones Técnicas
- CSS reorganizado con sección dedicada "LIGHTBOX STYLES (DESKTOP & MOBILE)"
- Eliminadas definiciones duplicadas que causaban bugs
- Media queries móviles simplificados con solo ajustes específicos
- Estilos base aplicables a todas las resoluciones

---

### **Versión 2.0 - Rediseño Premium (10 de Enero 2026)**

#### ✨ Hero Section
- Logo animado como protagonista con entrada cinematográfica
- Efecto flotante continuo y glow pulsante alrededor del logo
- Barra de estadísticas con glassmorphism effect
- Título con gradiente dorado en segunda línea
- 3 features con íconos (Certificaciones, Seguridad, Puntualidad)
- Círculos animados en el fondo
- 3 botones CTA rediseñados con íconos SVG
- Scroll indicator mejorado (mouse animado + texto)
- Z-index optimizado para prevenir superposiciones

#### 🎨 Lightbox Profesional
- Rediseño completo a layout de 2 columnas (60/40)
- Panel lateral con información detallada:
  - Badge de categoría
  - Título y descripción expandida
  - Especificaciones (Cliente, Duración)
  - Lista de detalles técnicos con checkmarks
- Scroll personalizado con barra naranja
- Contador de fotos reubicado (bottom overlay)
- Navegación con tamaño fijo de imágenes (sin saltos)
- Botones más grandes y visibles
- Responsive: 1 columna apilada en móviles

#### 📸 Galería Expandida
- Agregadas 2 fotos adicionales al proyecto de Piping (total: 5)
- Total: 15 fotos distribuidas en 5 proyectos
- Descripciones técnicas detalladas por proyecto
- Información de cliente y duración

#### 🎯 Correcciones de UX
- Logos con tamaño máximo controlado (45px altura)
- Iconos SVG con medidas fijas (!important)
- Espaciado hero optimizado (8rem margin-bottom en botones)
- Botón cerrar lightbox con mejor z-index
- Scroll indicator sin conflictos con botones

#### 🔧 Optimizaciones CSS
- Glassmorphism effects (backdrop-filter: blur)
- Gradientes modernos en backgrounds
- Animaciones con keyframes personalizados
- Variables CSS mejoradas
- Responsive refinado con 3 breakpoints

---

## 🔮 Trabajo Futuro / Roadmap

### **Próximas Actualizaciones Planificadas**

#### 📱 Optimizaciones Móviles (Prioridad Alta)
- **Gestos Táctiles**
  - Swipe left/right para navegación en lightbox
  - Pinch-to-zoom en imágenes
  - Pull-to-refresh opcional
  
- **Performance**
  - Optimización de carga en conexiones lentas
  - Reducción de tamaño de bundle
  - Lazy loading más agresivo en móvil
  - Compresión de imágenes adaptativa
  
- **UX Móvil**
  - Mejora de tap targets (mínimo 44x44px)
  - Reducción de animaciones en dispositivos de gama baja
  - Testing exhaustivo en iOS y Android
  - Optimización de menú hamburguesa
  - Mejora de lightbox en pantallas pequeñas

#### 📧 Formulario de Contacto Funcional (Prioridad Media) - ✅ COMPLETADO v2.7
- **Backend y Validación** ✅
  - Integración con EmailJS (200 emails/mes gratis)
  - Validación HTML5 + prevención de spam
  - Emails llegan automáticamente a jkcindustriales@gmail.com
  
- **UX y Feedback Visual** ✅
  - Loading spinner durante envío
  - Mensajes de éxito/error con auto-desaparición
  - Reset automático del formulario
  - Deshabilitación del botón durante envío
  
- **Seguridad** ✅
  - Protección básica anti-spam de EmailJS
  - Rate limiting del lado del servidor
  - Conexión HTTPS segura

#### 🔍 SEO y Analytics (Prioridad Baja)
- Meta tags optimizados (Open Graph, Twitter Cards)
- Schema.org markup para proyectos
- Google Analytics 4 integration
- Sitemap XML y robots.txt
- Performance optimization (PageSpeed 90+)

---

## ✅ Mejoras Completadas

### 📧 Formulario de Contacto (v2.7) - ✅ Implementado
- ✅ Integración EmailJS funcional
- ✅ Emails automáticos a jkcindustriales@gmail.com
- ✅ Loading spinner y feedback visual
- ✅ Mensajes de éxito/error con auto-desaparición
- ✅ Prevención de spam (botón disabled)
- ✅ Reset automático del formulario
- ✅ Manejo robusto de errores

### 🐛 Correcciones y UX (v2.6) - ✅ Implementado
- ✅ Sección metodología visible (bug CSS resuelto)
- ✅ Botones flotantes globales (WhatsApp + Scroll-to-top)
- ✅ Botón WhatsApp CTA con identidad de marca
- ✅ Animaciones bounceIn para botones flotantes
- ✅ Colores oficiales de WhatsApp implementados

### 🎨 Mejoras Visuales (v2.5) - ✅ Implementado
- ✅ Lazy loading avanzado con Intersection Observer
- ✅ Transiciones suaves entre proyectos con fade/scale
- ✅ Animaciones cinematográficas en lightbox
- ✅ Loading indicators y efectos shimmer
- ✅ Backdrop blur progresivo

---

## 📄 Licencia

Proyecto privado para JKC Montajes Industriales.  
© 2025 - Todos los derechos reservados.
