document.addEventListener('DOMContentLoaded', function() {
    // Efecto de cursor personalizado
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        document.querySelectorAll('a, button, .btn-hover-effect, .card-hover-effect').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });
    }
    
    // Inicializar partículas
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ff2d2d" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ff2d2d", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Actualizar puntos de navegación al hacer scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navDots = document.querySelectorAll('.nav-dot');
        
        if (sections.length > 0 && navDots.length > 0) {
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navDots.forEach(dot => dot.classList.remove('active'));
                    if (navDots[index]) {
                        navDots[index].classList.add('active');
                    }
                }
            });
        }
    });
    
    // Efecto de aparición al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                el.classList.add('animated');
            }
        });
    };
    
    // Configurar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .service-card, .contact-info, .mission-card, .comment-card, .value-item');
    if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar
    
    // Toggle del tema oscuro
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    // Verificar preferencias del sistema y tema guardado
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Aplicar tema inicial
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<span class="material-icons">brightness_7</span>';
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<span class="material-icons">brightness_4</span>';
    }
    
    // Manejar clic en el botón de tema
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark 
            ? '<span class="material-icons">brightness_7</span>' 
            : '<span class="material-icons">brightness_4</span>';
    });
}
    
    // Mostrar precios al hacer clic en servicios
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        serviceCards.forEach(service => {
            service.addEventListener('click', function() {
                const serviceId = this.getAttribute('data-service');
                const priceElement = document.getElementById(`${serviceId}-price`);
                
                if (priceElement) {
                    // Ocultar todos los precios primero
                    document.querySelectorAll('.service-price').forEach(price => {
                        if (price !== priceElement) {
                            price.style.opacity = '0';
                            price.style.transform = 'translateY(-100%)';
                        }
                    });
                    
                    // Mostrar/ocultar el precio del servicio clickeado
                    if (priceElement.style.opacity === '1') {
                        priceElement.style.opacity = '0';
                        priceElement.style.transform = 'translateY(-100%)';
                    } else {
                        priceElement.style.opacity = '1';
                        priceElement.style.transform = 'translateY(0)';
                    }
                }
            });
        });
    }
    
    // Menú móvil
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <a href="#inicio" class="mobile-nav-link">Inicio</a>
            <a href="#habilidades" class="mobile-nav-link">Habilidades</a>
            <a href="#mision-vision" class="mobile-nav-link">Misión & Visión</a>
            <a href="#proyectos" class="mobile-nav-link">Proyectos</a>
            <a href="#educacion" class="mobile-nav-link">Educación</a>
            <a href="#servicios" class="mobile-nav-link">Servicios</a>
            <a href="#comentarios" class="mobile-nav-link">Comentarios</a>
            <a href="#contacto" class="mobile-nav-link">Contacto</a>
        `;
        document.body.appendChild(mobileMenu);
        
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }
});