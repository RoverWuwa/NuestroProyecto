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


window.addEventListener('scroll', function() {
  // Obtiene la posición del scroll
  const scrollPosition = window.scrollY;

  // Obtén los elementos
  const invitation = document.getElementById('.invitation');
  const invitation2 = document.getElementById('.invitation2');

  // Calcula un desplazamiento basado en el scroll
  const offset = scrollPosition / 2; // Ajusta esta fórmula para un efecto más sutil o más dramático

  // Aplica el desplazamiento a los elementos
  invitation.style.transform = `translateY(${offset}px)`;
  invitation2.style.transform = `translateY(-${offset}px)`;
});