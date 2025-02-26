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
    let welcomeImage = document.querySelector(".welcome-image"); // Seleccionar el elemento con la clase welcome-image
    if (welcomeImage.src.includes("styles/images/welcome1.webp")) { // Si la imagen del elemento welcome-image incluye "styles/images/welcome1.webp"
        welcomeImage.src = "styles/images/welcome2.jpg"; // Cambiar la imagen del elemento welcome2.jpg a "welcome.png"
    } else if (welcomeImage.src.includes("styles/images/welcome2.jpg")) {
        welcomeImage.src = "styles/images/welcome3.webp"; // Cambiar la imagen del elemento welcome-image a "bienvenido.png"
    } else if (welcomeImage.src.includes("styles/images/welcome3.webp")) { // Si la imagen del elemento welcome-image incluye "styles/images/welcome3.webp"
        welcomeImage.src = "styles/images/welcome1.webp"; // Cambiar la imagen del elemento welcome-image a "styles/images/welcome2.webp"
    }
});

document.querySelectorAll(".hover-item1 , .hover-item2 , .hover-item3 , .hover-item4")
.forEach(item => {item.style.cursor = "pointer";});