// Sección para menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar clase activa al hacer clic en el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


