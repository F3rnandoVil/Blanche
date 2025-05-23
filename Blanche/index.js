// filepath: c:\Users\ferna\Desktop\Blanche\index.js

document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar los enlaces de contacto
    const contactLinks = document.querySelectorAll('.footer-col:nth-child(4) a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const message = `Has hecho clic en: ${this.textContent}`;
            alert(message);
        });
    });

    // Función para manejar el botón "Explorar nuestra colección"
    const exploreButton = document.querySelector('.btn');
    exploreButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Explora nuestra deliciosa colección de galletas!');
    });

    // Función para manejar el botón "Aprender más" en la sección "Nuestra Historia"
    const learnMoreButton = document.querySelector('.about .btn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Descubre más sobre nuestra historia y pasión por la repostería!');
    });
});