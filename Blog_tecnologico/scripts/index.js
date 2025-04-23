// Sección para menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar clase activa al hacer clic en el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



//Sección del carrusel 
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    //Reponsive breakpoints
    breakpoints: {
        0: { 
            slidesPerView: 1
         },
        768: { 
            slidesPerView: 2
         },
        1024: { 
            slidesPerView: 3
         },
    }
  });

//Animación de frase del slogan
var words = ['innovación.', 'conectividad.', 'inspiración.', 'revolución.'],
          wordWrapper = document.getElementById('word'),
          wordWrapperContent = wordWrapper.innerHTML,
          addingWord = false,
          counter = 1;
      
      setInterval(function(){
      
        if(wordWrapperContent.length > 0 && !addingWord ) {
          wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
          wordWrapperContent = wordWrapper.innerHTML;
        } else {
          addingWord = true;
        }
      
        if( addingWord ){
          if( wordWrapperContent.length < words[counter].length  ) {
            wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
            wordWrapperContent = wordWrapper.innerHTML;
          } else {
            if( counter < words.length) {
              counter ++
            }
            addingWord = false;
          }
        }
      
        if( counter == words.length) {
          counter = 0;
        }
      
      }, 150);

//Script paara el video
