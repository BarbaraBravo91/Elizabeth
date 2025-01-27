function toggleMenu() {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
}

let currentIndex = 0; // Índice de la imagen actual
const imgElement = document.getElementById("slideshow-image"); // Selecciona el nuevo <img> para el slideshow

// Función para mostrar la imagen actual
function showImage(index) {
  imgElement.src = imageUrls[index]; // Cambia la imagen
}

// Función para iniciar el slideshow
function startSlideshow() {
  showImage(currentIndex); // Muestra la primera imagen

  // Configura un intervalo para mostrar la próxima imagen cada 3 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageUrls.length; // Incrementa el índice y reinicia si llega al final
    showImage(currentIndex); // Muestra la siguiente imagen
  }, 2000); // Cambia la imagen cada 3000 ms (3 segundos)
}

// Llama a la función para iniciar el slideshow
startSlideshow();

const logos = document.querySelector(".company-logos");
const clonedLogos = logos.cloneNode(true); // Clona los logos
logos.parentNode.appendChild(clonedLogos);

/*/ Seleccionamos el contenedor de los logos de las empresas
const companyLogosContainer = document.querySelector('.company-logos');

// Clonamos los logos para crear un efecto de carrusel
const clonedLogos = companyLogosContainer.innerHTML;
companyLogosContainer.innerHTML += clonedLogos; // Duplicamos el contenido

let translateXValue = 0;

// Función para mover los logotipos
function moveLogos() {
    translateXValue -= 0.5; // Velocidad de desplazamiento
    companyLogosContainer.style.transform = `translateX(${translateXValue}px)`;

    // Reseteamos la posición cuando se sale de la vista
    if (Math.abs(translateXValue) >= companyLogosContainer.scrollWidth / 2) {
        translateXValue = 0; // Restablecemos a la posición inicial
    }

    requestAnimationFrame(moveLogos); // Llamamos a la función en el siguiente frame
}

// Iniciamos el movimiento
moveLogos();
//
/*/
// script.js
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const itemWidth = 700; // Debe coincidir con el width en CSS

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
