// =========================================
// GLOBAL VARIABLES & DATA
// =========================================

// Projects Data
const projectsData = [
    {
        title: 'Mantenimiento y Reparación Integral de Calderas',
        description: 'Servicio completo de mantenimiento preventivo, correctivo y reparaciones mayores en calderas industriales de alta capacidad. Incluye desde inspección técnica y limpieza profunda hasta intervenciones especializadas en cuerpo de presión con reemplazo completo de tubería, esmerilado, soldadura certificada y pruebas no destructivas.',
        category: 'calderas',
        client: 'Industrias Farmacéutica y Textil',
        duration: '4-5 semanas',
        details: [
            'Inspección completa con análisis termográfico',
            'Limpieza química profunda de tubos y cámara de combustión',
            'Apertura y limpieza completa del cuerpo de presión',
            'Reemplazo completo de 120 tubos de fuego con esmerilado previo',
            'Soldadura certificada AWS D1.1 en placas tubulares',
            'Mandrilado de tubos con control dimensional',
            'Calibración de sistemas de control y seguridad',
            'Reemplazo de válvulas y componentes críticos desgastados',
            'Pruebas hidrostáticas a 1.5 veces presión de trabajo',
            'Inspección con ensayos no destructivos (END)',
            'Certificación de funcionamiento por organismo habilitado',
            'Capacitación al personal de planta'
        ],
        images: [
            'fotos/caldera_mantenimiento/01_caldera.jpeg',
            'fotos/caldera_mantenimiento/02_caldera.jpeg',
            'fotos/caldera_mantenimiento/03_caldera.jpeg',
            'fotos/caldera_mantenimiento/04_caldera.jpeg',
            'fotos/caldera_mantenimiento/05_caldera.jpeg',
            'fotos/caldera_mantenimiento/06_caldera.jpeg'
        ]
    },
    {
        title: 'Instalación de Sistema de Piping Industrial',
        description: 'Diseño, fabricación y montaje de sistema completo de tuberías para distribución de fluidos en planta industrial. Incluye cañerías de acero inoxidable, válvulas de control, soportería y aislamiento térmico según normas ASME.',
        category: 'instalaciones',
        client: 'Planta Alimenticia',
        duration: '6 semanas',
        details: [
            'Diseño de ingeniería con cálculo de pérdidas de carga',
            'Fabricación de soportería y estructuras auxiliares',
            'Montaje de más de 200 metros de cañería',
            'Instalación de válvulas de control automático',
            'Pruebas de presión y estanqueidad',
            'Aislamiento térmico con aluminio corrugado',
            'Certificación con trazabilidad de materiales'
        ],
        images: [
            'fotos/cañerias_colector/IMG-20251116-WA0021.jpg',
            'fotos/cañerias_colector/IMG-20251116-WA0023.jpg',
            'fotos/cañerias_colector/IMG-20251116-WA0025.jpg',
            'fotos/cañerias_colector/IMG-20251116-WA0027.jpg',
            'fotos/cañerias_colector/IMG-20251116-WA0029.jpg'
        ]
    },
    {
        title: 'Integración de Intercambiador de Calor - Planta AYSA',
        description: 'Proyecto de integración especializada para instalación y conexión de nuevo intercambiador de calor en circuito de vapor existente. Trabajo realizado en planta AYSA Argentina con vinculación entre caldera, pulmón amortiguador y equipo de intercambio térmico. Sistema de piping en acero inoxidable con soldadura TIG de alta calidad, asegurando continuidad operativa del servicio crítico sin interrupciones.',
        category: 'instalaciones',
        client: 'AYSA Argentina (Agua y Saneamientos Argentinos)',
        duration: '5 semanas',
        details: [
            'Integración de nuevo intercambiador de calor al circuito existente',
            'Vinculación entre caldera, pulmón amortiguador y equipo de intercambio',
            'Piping en acero inoxidable 304/316L para servicio de vapor',
            'Soldadura TIG (GTAW) en todas las uniones de tuberías',
            'Conexiones bridadas clase 150 según norma ASME B16.5',
            'Conexiones roscadas NPT en instrumentación y accesorios',
            'Pruebas hidrostáticas y neumáticas antes de puesta en marcha',
            'Certificación de soldadores calificados según AWS D1.6',
            'Inspección radiográfica (RX) en uniones críticas',
            'Aislamiento térmico en líneas de vapor',
            'Aseguramiento de continuidad operativa del servicio',
            'Comisionado y puesta en marcha supervisada'
        ],
        images: [
            'fotos/inoxidable_piping/01_inox_pip.jpeg',
            'fotos/inoxidable_piping/02_inox_pip.jpeg',
            'fotos/inoxidable_piping/03_inox_pip.jpeg',
            'fotos/inoxidable_piping/04_inox_pip.jpeg',
            'fotos/inoxidable_piping/05_inox_pip.jpeg',
            'fotos/inoxidable_piping/06_inox_pip.jpeg'
        ]
    },
    {
        title: 'Fabricación y Montaje de Estructuras Metálicas en Altura',
        description: 'Proyecto integral que combina fabricación en taller de estructuras pesadas y montaje especializado en altura. Incluye cálculo estructural, fabricación con control de calidad, tratamiento superficial, montaje vertical con equipos de izaje especializados, y trabajo en altura con personal certificado hasta 25 metros.',
        category: 'estructuras',
        client: 'Industrias Automotriz y Química',
        duration: '8 semanas',
        details: [
            'Cálculo estructural y planos de fabricación',
            'Fabricación de 15 toneladas de estructura metálica',
            'Perfiles de acero estructural A36 y A572',
            'Soldadura GMAW certificada según norma AWS D1.1',
            'Personal certificado en trabajo en altura (IRAM 3836)',
            'Montaje de estructuras hasta 25 metros de altura',
            'Instalación de plataformas y escaleras marineras',
            'Granallado y pintura epoxi anticorrosiva tricapa',
            'Montaje con grúa de 50 toneladas',
            'Nivelación y anclaje con resina epoxi',
            'Inspección de calidad por terceros',
            'Documentación as-built completa'
        ],
        images: [
            'fotos/montaje_cañerias_torres/IMG-20250730-WA0017.jpeg',
            'fotos/montaje_cañerias_torres/IMG-20250818-WA0045.jpg',
            'fotos/montaje_cañerias_torres/IMG-20250818-WA0046.jpg',
            'fotos/montaje_cañerias_torres/IMG-20250818-WA0047.jpg'
        ]
    },
    {
        title: 'Pulidos Industriales de Alta Precisión',
        description: 'Servicios especializados de pulido industrial para múltiples aplicaciones y sectores. Ofrecemos diferentes técnicas de acabado superficial: pulido espejo para aplicaciones farmacéuticas, satinado direccional para industria alimenticia, electropulido para equipamiento sanitario, y recuperación de superficies deterioradas. Cada técnica está certificada según normativas internacionales (ASTM, FDA, ASME BPE).',
        category: 'pulidos',
        client: 'Industrias Farmacéutica, Alimenticia, Biotecnológica y Petroquímica',
        duration: '2-4 semanas',
        details: [
            '🔹 PULIDO ESPEJO (Mirror #8): Acabado espejo AISI 316L según ASTM A480, rugosidad Ra < 0.4 μm, apto para ambientes GMP',
            '🔹 PULIDO SATINADO (Brushed #4): Acabado direccional uniforme 120-150 grit, certificación FDA Food Grade',
            '🔹 ELECTROPULIDO: Proceso electroquímico, Ra < 0.25 μm, reducción adherencia bacteriana 99.8%, normativa ASME BPE',
            '🔹 RECUPERACIÓN DE SUPERFICIES: Remoción de corrosión severa, restauración completa, extensión vida útil 5-8 años',
            'Proceso mecánico progresivo con 6 etapas (80 a 1200 grit)',
            'Pulido final con pasta de diamante y fieltro',
            'Desengrasado y pasivado químico post-pulido',
            'Tratamiento antioxidante y sellado protector',
            'Control dimensional y de rugosidad superficial',
            'Equipamiento: Pulidoras orbitales y amoladoras especializadas',
            'Aplicable en acero inoxidable 304, 316L y otros materiales',
            'Certificaciones y trazabilidad completa del proceso'
        ],
        images: [
            'fotos/pulido/IMG-20251229-WA0090.jpg',
            'fotos/pulido/IMG-20251229-WA0094.jpg',
            'fotos/pulido/IMG-20251229-WA0114.jpg',
            'fotos/pulido/IMG-20251229-WA0117.jpg',
            'fotos/pulido/IMG-20251229-WA0118.jpg',
            'fotos/pulido/IMG-20251229-WA0123.jpg',
            'fotos/pulido/IMG-20251229-WA0124.jpg',
            'fotos/pulido/IMG-20251229-WA0126.jpg',
            'fotos/pulido/IMG-20251229-WA0127.jpg',
            'fotos/pulido/IMG-20251229-WA0128.jpg',
            'fotos/pulido/IMG-20251229-WA0131.jpg',
            'fotos/pulido/IMG-20251229-WA0132.jpg',
            'fotos/pulido/IMG-20251229-WA0133.jpg',
            'fotos/pulido/IMG-20251229-WA0135.jpg',
            'fotos/pulido/IMG-20251229-WA0136.jpg',
            'fotos/pulido/IMG-20251229-WA0137.jpg'
        ]
    }
];

// Lightbox Globals
let currentProjectIndex = 0;
let currentImageIndex = 0;
let currentGallery = [];
let isTransitioning = false; // Flag para prevenir clicks múltiples durante transiciones

// =========================================
// LAZY LOADING ADVANCED
// =========================================

// Lazy Loading con Intersection Observer
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Si la imagen ya tiene src y está completa, marcarla como loaded
                    if (img.complete && img.src) {
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                        return;
                    }
                    
                    // Agregar clase de carga solo si hay data-src
                    if (img.dataset.src) {
                        img.classList.add('lazy-loading');
                        img.src = img.dataset.src;
                    }
                    
                    // Cuando termine de cargar
                    img.addEventListener('load', () => {
                        img.classList.remove('lazy-loading');
                        img.classList.add('lazy-loaded');
                    }, { once: true });
                    
                    img.addEventListener('error', () => {
                        img.classList.remove('lazy-loading');
                        img.classList.add('lazy-error');
                    }, { once: true });
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// =========================================
// CORE FUNCTIONS
// =========================================

// Load Projects into Grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return; // Guard clause

    if (projectsData.length > 0) {
        projectsGrid.innerHTML = '';
        projectsData.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            projectCard.setAttribute('data-index', index);

            const thumbnail = project.images[0];
            const count = project.images.length;

            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${thumbnail}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <span class="project-category">${project.category}</span>
                        <h3 class="project-title">${project.title}</h3>
                        <div class="gallery-indicator">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            Ver galería (${count} fotos)
                        </div>
                    </div>
                </div>
            `;

            projectCard.addEventListener('click', () => {
                openLightbox(index);
            });
            projectsGrid.appendChild(projectCard);
        });
    }
}

// Lightbox: Open
function openLightbox(projectIndex, startImageIndex = 0) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || typeof projectsData === 'undefined' || !projectsData[projectIndex]) {
        console.error('Error opening lightbox: invalid project or element missing');
        return;
    }

    currentProjectIndex = projectIndex;
    const project = projectsData[projectIndex];

    // Safely populate gallery
    if (project.images && project.images.length > 0) {
        currentGallery = project.images.map(img => ({
            src: img,
            title: project.title,
            description: project.description
        }));
    } else if (project.image) {
        currentGallery = [{
            src: project.image,
            title: project.title,
            description: project.description
        }];
    } else {
        return;
    }

    currentImageIndex = (startImageIndex >= 0 && startImageIndex < currentGallery.length) ? startImageIndex : 0;
    
    // Limpiar thumbnails del proyecto anterior
    const thumbnailsContainer = document.getElementById('lightboxThumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
    }
    
    updateLightboxImage();

    lightbox.classList.add('active');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Inicializar gestos táctiles para imágenes y proyectos
    initLightboxTouchGestures();
    initProjectSwipeGestures();
    
    // Actualizar indicador de proyecto
    updateProjectIndicator();
}

// Lightbox: Close
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
        currentGallery = [];
        currentImageIndex = 0;
    }
}

// Lightbox: Update Content with Smooth Transitions
function updateLightboxImage() {
    if (currentGallery.length === 0 || isTransitioning) return;

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxContent = document.querySelector('.lightbox-content');

    if (!lightboxImage) return;

    const image = currentGallery[currentImageIndex];
    const project = projectsData[currentProjectIndex];

    isTransitioning = true;

    // Fade out actual image
    lightboxImage.style.opacity = '0';
    lightboxImage.style.transform = 'scale(0.95)';
    
    // Agregar loading indicator
    lightboxContent.classList.add('loading');

    setTimeout(() => {
        // Set new content
        lightboxImage.src = image.src;
        lightboxImage.alt = image.title;

        // Update Text Info con fade
        const catEl = document.querySelector('.lightbox-category');
        const titEl = document.querySelector('.lightbox-title');
        const descEl = document.querySelector('.lightbox-description');

        if (catEl) catEl.textContent = project.category;
        if (titEl) titEl.textContent = project.title;
        if (descEl) descEl.textContent = project.description;

        // Update Details List
        const detailsList = document.querySelector('.lightbox-details ul');
        if (detailsList) {
            detailsList.innerHTML = project.details.map(detail => `<li>${detail}</li>`).join('');
        }

        // Specs
        const specItems = document.querySelectorAll('.spec-item .spec-value');
        if (specItems.length >= 2) {
            if (project.client) specItems[0].textContent = project.client;
            if (project.duration) specItems[1].textContent = project.duration;
        }

        if (lightboxCounter) {
            lightboxCounter.textContent = `Proyecto ${currentProjectIndex + 1}/${projectsData.length} • Foto ${currentImageIndex + 1}/${currentGallery.length}`;
        }
        
        // Actualizar thumbnails
        updateThumbnails();

        // Load handler con fade in
        lightboxImage.onload = () => {
            lightboxContent.classList.remove('loading');
            lightboxImage.style.opacity = '1';
            lightboxImage.style.transform = 'scale(1)';
            isTransitioning = false;
        };

        lightboxImage.onerror = () => {
            lightboxContent.classList.remove('loading');
            // SVG Fallback inline
            lightboxImage.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%2218%22%20height%3D%2218%22%20rx%3D%222%22%20ry%3D%222%22%2F%3E%3Ccircle%20cx%3D%228.5%22%20cy%3D%228.5%22%20r%3D%221.5%22%2F%3E%3Cpolyline%20points%3D%2221%2015%2016%2010%205%2021%22%2F%3E%3C%2Fsvg%3E';
            lightboxImage.style.opacity = '0.5';
            lightboxImage.style.transform = 'scale(1)';
            isTransitioning = false;
        };

        if (lightboxImage.complete && lightboxImage.naturalWidth > 0) {
            lightboxContent.classList.remove('loading');
            lightboxImage.style.opacity = '1';
            lightboxImage.style.transform = 'scale(1)';
            isTransitioning = false;
        }
    }, 300); // Delay para fade out
}

// Populate and update thumbnails
function updateThumbnails() {
    const thumbnailsContainer = document.getElementById('lightboxThumbnails');
    if (!thumbnailsContainer || currentGallery.length === 0) return;
    
    // Solo popular thumbnails la primera vez que se abre el proyecto
    if (thumbnailsContainer.children.length === 0) {
        thumbnailsContainer.innerHTML = '';
        
        currentGallery.forEach((img, index) => {
            const thumbDiv = document.createElement('div');
            thumbDiv.className = 'thumbnail-item';
            thumbDiv.dataset.index = index;
            
            const thumbImg = document.createElement('img');
            thumbImg.src = img.src;
            thumbImg.alt = `Thumbnail ${index + 1}`;
            thumbImg.loading = 'lazy';
            
            thumbDiv.appendChild(thumbImg);
            thumbnailsContainer.appendChild(thumbDiv);
            
            // Click handler
            thumbDiv.addEventListener('click', () => {
                currentImageIndex = index;
                updateLightboxImage();
            });
        });
    }
    
    // Actualizar estado activo
    const allThumbs = thumbnailsContainer.querySelectorAll('.thumbnail-item');
    allThumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
    
    // Auto-scroll para mantener thumbnail activo visible
    const activeThumb = thumbnailsContainer.querySelector('.thumbnail-item.active');
    if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

// Lightbox: Navigation
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    updateLightboxImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
}

function nextProject() {
    let nextProjectIndex = (currentProjectIndex + 1) % projectsData.length;
    openLightbox(nextProjectIndex, 0);
}

function prevProject() {
    let prevProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    openLightbox(prevProjectIndex, 0);
}

// Update Active Nav Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link'); // Define navLinks here to match usage
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}


// =========================================
// INITIALIZATION (DOMContentLoaded)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            updateActiveNavLink();
        });
    }

    // 2. Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        // Toggle menu
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer click en el overlay (::before pseudo-element)
        // Detectar clicks fuera del menú
        navMenu.addEventListener('click', (e) => {
            // Si el click fue en el ::before (overlay), cerrar el menú
            const rect = navMenu.getBoundingClientRect();
            if (e.clientX < rect.left) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Listener global para clicks fuera
        document.addEventListener('touchend', (e) => {
            if (navMenu.classList.contains('active')) {
                const rect = navMenu.getBoundingClientRect();
                const touchX = e.changedTouches[0].clientX;
                const touchY = e.changedTouches[0].clientY;
                
                // Si el touch fue fuera del menú y no en el botón toggle
                if ((touchX < rect.left || touchX > rect.right || 
                     touchY < rect.top || touchY > rect.bottom) &&
                    !menuToggle.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        }, { passive: true });

        // También para clicks de mouse (desktop/tablet)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // 3. Load Projects
    loadProjects();

    // 3.5. Initialize Lazy Loading
    initLazyLoading();

    // 4. Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.project-card').forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = 'block';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });

    // 5. Lightbox & Navigation
    const lightboxCloseBtn = document.getElementById('lightboxClose');
    const lbNext = document.getElementById('lightboxNext');
    const lbPrev = document.getElementById('lightboxPrev');
    const nextProjBtn = document.getElementById('nextProject');
    const prevProjBtn = document.getElementById('prevProject');
    const lbOverlay = document.querySelector('.lightbox-overlay');

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lbNext) lbNext.addEventListener('click', nextImage);
    if (lbPrev) lbPrev.addEventListener('click', prevImage);
    if (nextProjBtn) nextProjBtn.addEventListener('click', nextProject);
    if (prevProjBtn) prevProjBtn.addEventListener('click', prevProject);

    // Close on overlay click (Prevent Bubbling Check)
    if (lbOverlay) {
        lbOverlay.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                closeLightbox();
            }
        });
    }

    // Keyboard Nav
    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });

    // 6. Scroll to Top
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) scrollTopBtn.classList.add('visible');
            else scrollTopBtn.classList.remove('visible');
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 7. Counter Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (target === 40 ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (target === 40 ? '+' : '');
            }
        }, 16);
    }

    // Intersection Observer for triggering animation when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});


console.log('%c🏭 JKC Montajes Industriales', 'font-size: 20px; color: #3FA9F5; font-weight: bold;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #2C3E50;');

// Utility: Debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// =========================================
// SCROLL ANIMATIONS
// =========================================

function initScrollAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar después de animar
                // animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2, // Aumentado de 0.15 a 0.2 (20% del elemento visible)
        rootMargin: '0px 0px -100px 0px' // Aumentado de -50px a -100px
    });

    // Observar todos los elementos con clases de animación
    const elementsToAnimate = document.querySelectorAll(`
        .section-header,
        .service-card,
        .project-card,
        .process-step,
        .process-image-col,
        .client-logo,
        .about-content,
        .about-visual,
        .about-hero-image,
        .timeline,
        .fade-in-up,
        .fade-in-left,
        .fade-in-right,
        .fade-in-down,
        .scale-in
    `);

    elementsToAnimate.forEach(el => {
        animationObserver.observe(el);
    });
}

// Inicializar scroll animations cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}


// =========================================
// TOUCH GESTURES FOR LIGHTBOX
// =========================================

// Flags para evitar inicialización múltiple
let imageGesturesInitialized = false;
let projectGesturesInitialized = false;

// Gestos para navegar entre IMÁGENES del mismo proyecto
function initLightboxTouchGestures() {
    if (imageGesturesInitialized) return; // Ya inicializado
    
    const lightboxImageContainer = document.querySelector('.lightbox-image-container');
    if (!lightboxImageContainer) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    lightboxImageContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightboxImageContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleImageSwipe();
    }, { passive: true });

    function handleImageSwipe() {
        const swipeThreshold = 50;
        const horizontalDiff = touchEndX - touchStartX;
        const verticalDiff = Math.abs(touchEndY - touchStartY);

        // Solo detectar swipe horizontal si el movimiento vertical es menor
        if (verticalDiff < 100) {
            if (horizontalDiff > swipeThreshold) {
                // Swipe derecha → imagen anterior
                prevImage();
            } else if (horizontalDiff < -swipeThreshold) {
                // Swipe izquierda → imagen siguiente
                nextImage();
            }
        }
    }
    
    imageGesturesInitialized = true;
}

// Gestos para navegar entre PROYECTOS (swipe en el panel de info)
function initProjectSwipeGestures() {
    if (projectGesturesInitialized) return; // Ya inicializado
    
    const lightboxInfo = document.querySelector('.lightbox-info');
    const swipeHint = document.getElementById('swipeHint');
    if (!lightboxInfo) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let isSwiping = false;
    let hasSwipedBefore = sessionStorage.getItem('hasSwipedProject');

    lightboxInfo.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        touchStartTime = Date.now();
        isSwiping = false;
    }, { passive: true });

    lightboxInfo.addEventListener('touchmove', (e) => {
        if (!isSwiping) {
            const currentX = e.changedTouches[0].clientX;
            const currentY = e.changedTouches[0].clientY;
            const deltaX = Math.abs(currentX - touchStartX);
            const deltaY = Math.abs(currentY - touchStartY);
            
            // Determinar dirección del gesto
            if (deltaX > deltaY && deltaX > 15) {
                // Es un swipe horizontal
                isSwiping = true;
                e.preventDefault(); // Prevenir scroll mientras se hace swipe
            }
        } else {
            e.preventDefault(); // Continuar previniendo scroll durante swipe
        }
    }, { passive: false }); // passive: false para poder usar preventDefault

    lightboxInfo.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const touchDuration = Date.now() - touchStartTime;
        
        // Solo procesar si fue un swipe horizontal detectado
        if (isSwiping && touchDuration < 500) { // Máximo 500ms para ser swipe
            const swipeDetected = handleProjectSwipe();
            
            // Ocultar hint después del primer swipe
            if (swipeDetected && swipeHint && !hasSwipedBefore) {
                swipeHint.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    swipeHint.style.display = 'none';
                }, 300);
                sessionStorage.setItem('hasSwipedProject', 'true');
            }
        }
        
        isSwiping = false;
    }, { passive: true });

    function handleProjectSwipe() {
        const swipeThreshold = 60; // Reducido para mejor respuesta
        const horizontalDiff = touchEndX - touchStartX;

        if (Math.abs(horizontalDiff) > swipeThreshold) {
            if (horizontalDiff > 0) {
                // Swipe derecha → proyecto anterior
                prevProject();
                return true;
            } else {
                // Swipe izquierda → proyecto siguiente
                nextProject();
                return true;
            }
        }
        return false;
    }
    
    // Ocultar hint automáticamente si el usuario ya swipeó antes
    if (hasSwipedBefore && swipeHint) {
        swipeHint.style.display = 'none';
    }
    
    projectGesturesInitialized = true;
}

// Actualizar indicador de proyecto actual
function updateProjectIndicator() {
    const indicator = document.getElementById('projectIndicator');
    if (!indicator) return;
    
    const totalProjects = projectsData.length;
    const currentNum = currentProjectIndex + 1;
    
    indicator.textContent = `Proyecto ${currentNum} de ${totalProjects}`;
    indicator.style.display = 'block';
}


// =========================================
// CONTACT FORM - EmailJS Integration
// =========================================

// Form Submit Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate required fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            let missingFields = [];
            if (!name) missingFields.push('Nombre');
            if (!email) missingFields.push('Email');
            if (!message) missingFields.push('Mensaje');
            
            showFormMessage('error', `❌ Por favor completa los siguientes campos: ${missingFields.join(', ')}`);
            return;
        }
        
        // Get form button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
            </svg>
            Enviando...
        `;
        
        // Prepare template params
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: document.getElementById('phone') ? document.getElementById('phone').value : 'No proporcionado',
            message: message,
            reply_to: email
        };
        
        // Send email via EmailJS
        emailjs.send('service_bsifr3s', 'template_k8jonu6', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                showFormMessage('success', '✅ ¡Mensaje enviado con éxito! Nos contactaremos pronto.');
                
                // Reset form
                contactForm.reset();
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                
            }, function(error) {
                console.error('FAILED...', error);
                
                // Show error message
                showFormMessage('error', '❌ Error al enviar el mensaje. Intenta nuevamente o contáctanos por WhatsApp.');
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            });
    });
}

// Show Form Message Helper - Modal Version
function showFormMessage(type, message) {
    // Remove existing message if any
    const existingMsg = document.querySelector('.form-modal-overlay');
    if (existingMsg) existingMsg.remove();
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'form-modal-overlay';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = `form-modal-content form-modal-${type}`;
    
    // Icon based on type
    const icon = type === 'success' 
        ? `<svg class="modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <circle cx="12" cy="12" r="10"></circle>
             <path d="M9 12l2 2 4-4"></path>
           </svg>`
        : `<svg class="modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <circle cx="12" cy="12" r="10"></circle>
             <line x1="15" y1="9" x2="9" y2="15"></line>
             <line x1="9" y1="9" x2="15" y2="15"></line>
           </svg>`;
    
    modalContent.innerHTML = `
        ${icon}
        <p class="modal-message">${message}</p>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Trigger animation
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        modalOverlay.classList.remove('active');
        setTimeout(() => modalOverlay.remove(), 300);
    }, 3000);
}
