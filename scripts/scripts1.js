 // Agregar un event listener al objeto window para escuchar el evento de desplazamiento (scroll)
window.addEventListener("scroll", function() { // Función anónima que se ejecuta cuando se desplaza la página
  let headerh1 = document.querySelector(".header-container h1"); // Seleccionar el elemento h1 dentro del contenedor con la clase header-container
  if (window.scrollY > 20) { // Si la posición vertical de la página es mayor a 20
    headerh1.textContent = "TFH"; // Cambiar el texto del elemento h1 a "TFH"
  }
  else {
    headerh1.textContent = "Teens Finance Hub"; // Cambiar el texto del elemento h1 a "Teens Finance Hub"
  }
});

// Seleccionar el elemento h1 dentro del contenedor con la clase header-container y convertirlo en un botón
let headerh1 = document.querySelector(".header-container h1");
headerh1.style.cursor = "pointer"; // Cambiar el cursor a pointer para indicar que es un botón

// Agregar un event listener al elemento h1 para escuchar el evento de clic
headerh1.addEventListener("click", function() {
  location.reload(); // Recargar la página cuando se hace clic en el elemento h1
});

// Seleccionar todos los elementos con las clases hover-item1, hover-item2, hover-item3 y hover-item4
document.querySelectorAll(".hover-item1 , .hover-item2 , .hover-item3 , .hover-item4")
.forEach(item => {
  item.style.cursor = "pointer"; // Cambiar el cursor a pointer para indicar que son interactivos
});

let button = document.querySelector(".Benefits-image img"); /* Declarar la variable button y asignarle el elemento .Benefits-image img*/
button.addEventListener("click", function() { /*Agregrar un EventListener para cuando se haga click sobre button*/
  let text = document.querySelector(".Benefits1 p"); /* Declarar la variable text y asignarle el elemento .Benefits1 p */
  let img = document.querySelector(".Benefits .Benefits1 img");
  let img2 = document.querySelector(".Benefits-image2 img");
  let text2 = document.querySelector(".Benefits1 h4")
  /*Si el contenido de text sea sobre Finanzas personales cambiar su contenido a Emprendimineto */
  if (text.textContent==="En la sección de Finanzas Personales, encontrarás información valiosa sobre cómo gestionar tu dinero, desde conceptos básicos como el ahorro y la inversión, hasta consejos prácticos para mantener un presupuesto equilibrado y alcanzar tus metas financieras."){
    text.textContent="En la seccion de Emprendimiento, encontraras informacion valiosa sobre como iniciar tu propio negocio, desde conceptos basicos como la idea de negocio, hasta consejos practicos para mantener un negocio exitoso y alcanzar tus metas empresariales.";
    img.src="../styles/images/welcome2.jpg";
    img2.src="../styles/images/indicador2.jpg";
    text2.textContent="Emprendimiento";
    /*Si no, pero si text es sobre Emprendimiento cambiar su contenido a Noticias y tendencias*/
  }else if (text.textContent==="En la seccion de Emprendimiento, encontraras informacion valiosa sobre como iniciar tu propio negocio, desde conceptos basicos como la idea de negocio, hasta consejos practicos para mantener un negocio exitoso y alcanzar tus metas empresariales."){
    text.textContent="En la seccion de Noticias y tendencias, encontraras noticas relacionadas al ambito financiero actuales para que te mantengas informado sobre lo que sucede en el mercado y tendencias en el emprendimiento para que sepas las acciones de los profesionales y sigas sus consejos";
    img.src="../styles/images/welcome3.webp";
    img2.src="../styles/images/indicador3.jpg";
    text2.textContent="Noticias y tendencias";
    /*Si no, regresar el contenido a Finanzas Personales */
  }else {
    text.textContent="En la sección de Finanzas Personales, encontrarás información valiosa sobre cómo gestionar tu dinero, desde conceptos básicos como el ahorro y la inversión, hasta consejos prácticos para mantener un presupuesto equilibrado y alcanzar tus metas financieras.";
    img.src="../styles/images/welcome1.webp";
    img2.src="../styles/images/indicador1.jpg";
    text2.textContent="Finanzas Personales";
  }
});

/*Animacion para los elementos .invitation y .invitation2*/
const observer = new IntersectionObserver((entries) => { /*Detecta automáticamente cuándo un elemento entra o sale del viewport. */
  entries.forEach(entry => {
    const element = entry.target;
    /*Cuando el elemento entra al campo de visión, se añade la clase visible, ejecutando la animación. */
    if (entry.isIntersecting) {
      // Añadimos la clase "visible" cuando el elemento está en el viewport
      element.classList.add('visible');
      /*Cuando sale del campo de visión, se elimina la clase visible, preparándolo para repetir la animación. */
    } else {
      // Eliminamos la clase "visible" cuando sale del viewport
      element.classList.remove('visible');
    }
  });
}, { threshold: 0.2 }); // Se activa cuando el 20% del elemento es visible

// Seleccionar los elementos a observar
const invitations = document.querySelectorAll('.invitation, .invitation2');
invitations.forEach(invite => observer.observe(invite));

// Agrega un evento "input" al campo de búsqueda para detectar cambios en tiempo real
document.getElementById('search').addEventListener('input', function() {
  // Obtiene el texto ingresado en el campo de búsqueda y lo convierte a minúsculas
  const searchTerm = this.value.toLowerCase();

  // Obtiene el contenedor donde se buscará el texto
  const content = document.getElementById('content');

  // Obtiene todos los párrafos dentro del contenedor
  const paragraphs = content.getElementsByTagName('p');

  // ====== Paso 1: Limpiar resaltado previo ======
  for (let paragraph of paragraphs) {
      // Restaura el contenido original del párrafo eliminando cualquier resaltado anterior
      paragraph.innerHTML = paragraph.textContent;
  }

  // ====== Paso 2: Resaltar coincidencias si hay un término de búsqueda ======
  if (searchTerm) {
      for (let paragraph of paragraphs) {
          // Obtiene el texto original del párrafo
          const text = paragraph.textContent;

          // Crea una expresión regular para encontrar el término de búsqueda (sin distinción entre mayúsculas y minúsculas)
          const regex = new RegExp(`(${searchTerm})`, 'gi');

          // Reemplaza el texto encontrado con una versión resaltada (envuelta en una etiqueta <span>)
          const newText = text.replace(regex, '<span class="highlight">$1</span>');

          // Actualiza el contenido del párrafo con la nueva versión resaltada
          paragraph.innerHTML = newText;
      }
  }
});