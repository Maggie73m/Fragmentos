function openPopup(popupId) {
    // Cierra cualquier popup abierto antes de abrir uno nuevo
    var openPopups = document.querySelectorAll('.popup-container');
    openPopups.forEach(function(popup) {
        if (popup.style.display === 'flex' && popup.id !== popupId) {
            closePopup(popup.id);
        }
    });

    var popup = document.getElementById(popupId);
    popup.style.display = 'flex';

    // Configura el carrusel si el popup tiene uno
    if (popupId === 'popup-calle' && typeof setupCarousel === 'function') {
        setupCarousel(popupId);
    }

    // Cierra el popup si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target === popup) {
            closePopup(popupId);
        }
    };

    // Previene que el evento de cerrar se dispare cuando se hace clic en el carrusel
    var carousel = popup.querySelector('.carousel');
    if (carousel) {
        carousel.onclick = function(event) {
            event.stopPropagation();
        };
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
    window.onclick = null;

    // Si hay un carrusel con intervalo, lo detiene
    if (popup && popup.carouselInterval) {
        clearInterval(popup.carouselInterval);
        popup.carouselInterval = null;
    }
}

function showImageForSixSeconds(imageId) {
    var image = document.getElementById(imageId);
    image.style.display = 'block'; // Muestra la imagen

    setTimeout(function() {
        image.style.display = 'none';
    }, 6000);
}
const imagenes = [
    "../img/frase1.png",
    "../img/frase2.png",
    "../img/frase3.png",
    "../img/frase4.png",
    "../img/frase5.png",
];

function mostrarImagenAleatoria() {
    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    const imagen = document.createElement('img');
    imagen.src = imagenAleatoria;
    imagen.style.position = 'absolute';
    imagen.style.left = Math.random() * 80 + '%';
    imagen.style.top = Math.random() * 80 + '%';
    imagen.style.cursor = 'pointer';

    imagen.onclick = function() {
        imagen.remove();
    };

    document.body.appendChild(imagen);
}

