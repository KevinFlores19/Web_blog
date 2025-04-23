// Sección para menu responsivo
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Alternar clase activa al hacer clic en el menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//Configuracion de FIREBASE 
//Configuración

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
    apiKey: "AIzaSyDtPnDhV4x8Jg9qkHg3u_w57VXB1wPHLn8",
    authDomain: "db-blog-tecnologico.firebaseapp.com",
    projectId: "db-blog-tecnologico",
    storageBucket: "db-blog-tecnologico.firebasestorage.app",
    messagingSenderId: "131964817269",
    appId: "1:131964817269:web:115495765469dfe05a0d3c"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Obtener referencia al servicio de Firestore
  const db = firebase.firestore();
  
  //Agregar Comentarios
  document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
  
    if (name && comment) {
      db.collection("comentarios").add({
        nombre: name,
        comentario: comment,
        fecha: firebase.firestore.FieldValue.serverTimestamp() // Orden cronológico
      })
      .then(() => {
        alert("Comentario publicado exitosamente!");
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
      })
      .catch((error) => {
        console.error("Error al agregar el comentario: ", error);
      });
    } else {
      alert("Por favor, completa ambos campos antes de comentar.");
    }
  });
  

  //Mostrar comentarios
  db.collection("comentarios")
  .orderBy("fecha", "desc") // Ordenar por fecha más reciente
  .onSnapshot((snapshot) => {
    const commentsContainer = document.querySelector("#comments-container");
    commentsContainer.innerHTML = ""; // Limpiar solo los comentarios, no el título

    snapshot.forEach((doc) => {
      const { nombre, comentario } = doc.data();
      const commentItem = document.createElement("li");
      commentItem.innerHTML = `<strong>${nombre}</strong>: ${comentario}`;
      commentsContainer.appendChild(commentItem);
    });
  });
