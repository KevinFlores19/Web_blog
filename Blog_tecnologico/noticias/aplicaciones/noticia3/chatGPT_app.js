// Sección para menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar clase activa al hacer clic en el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Carrusel V2.0
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const description = document.querySelector('.carousel-description');
    let currentIndex = 0;
    let autoplayInterval;
    
    // Función para actualizar el carrusel
    function updateCarousel() {
        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;
            slide.classList.toggle('active', isActive);
            
            // Actualizar descripción cuando el slide está activo
            if(isActive) {
                description.style.opacity = 0;
                setTimeout(() => {
                    description.textContent = slide.getAttribute('data-description');
                    description.style.opacity = 1;
                }, 300);
            }
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Navegación con botones
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
        resetAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
        resetAutoplay();
    });
    
    // Navegación con indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.getAttribute('data-index'));
            updateCarousel();
            resetAutoplay();
        });
    });
    
    // Función para reiniciar autoplay
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Función para iniciar autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);
    }
    
    // Iniciar autoplay
    startAutoplay();
    
    // Pausar autoplay al interactuar
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        startAutoplay();
    });
    
    // Inicializar con el primer slide
    updateCarousel();
});