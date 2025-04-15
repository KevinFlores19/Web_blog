// Sección para menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar clase activa al hacer clic en el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//Carrusel 2
const slides = document.querySelectorAll('.carousel img');
        const dots = document.querySelectorAll('.indicators .dot');
        const leftArrow = document.querySelector('.arrow.left');
        const rightArrow = document.querySelector('.arrow.right');
        const description = document.querySelector('.description');
        let currentSlide = 0;
        let isAnimating = false;
        const descriptions = [
            "Dentro de la app puedes planificar eventos de manera fácil y divertida. Los usuarios pueden crear y compartir invitaciones, y pedir confirmación de asistencia desde la app o por internet en cualquier dispositivo.",
            "Invites de Apple, te permite organizar tus fiestas por categorias, así como incluir mapa de locación del lugar de tu evento.",
            "Con Invites de Apple podrás ver nuevas formas de conectar con amigos. Invites te permite organizar eventos grupales con herramientas colaborativas como galeria compartida o playlist de Apple Music."
        ];

        function showSlide(index) {
            if (isAnimating || index === currentSlide) return;
            
            isAnimating = true;
            
            // Animación de fade out para la descripción
            description.classList.add('fade');
            
            setTimeout(() => {
                // Actualizar descripción
                description.textContent = descriptions[index];
                description.classList.remove('fade');
                
                // Marcar slide actual como "prev" para animación
                slides[currentSlide].classList.add('prev');
                slides[currentSlide].classList.remove('active');
                
                // Mostrar nuevo slide
                slides[index].classList.add('active');
                slides[index].classList.remove('prev');
                
                // Actualizar indicadores
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                currentSlide = index;
                isAnimating = false;
            }, 300);
        }

        function nextSlide() {
            const nextIndex = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            showSlide(prevIndex);
        }

        leftArrow.addEventListener('click', prevSlide);
        rightArrow.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (!dot.classList.contains('active')) {
                    showSlide(index);
                }
            });
        });

        // Auto-avance opcional (descomentar para activar)
        /*
        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        function pauseSlideShow() {
            clearInterval(slideInterval);
        }
        
        startSlideShow();
        
        // Pausar cuando el mouse está sobre el carrusel
        document.querySelector('.carousel').addEventListener('mouseenter', pauseSlideShow);
        document.querySelector('.carousel').addEventListener('mouseleave', startSlideShow);
        */