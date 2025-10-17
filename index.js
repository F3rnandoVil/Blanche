// filepath: c:\Users\ferna\Desktop\Blanche\index.js

document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar los enlaces de contacto en el footer
    const contactLinks = document.querySelectorAll('.footer-col:nth-child(4) a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // El preventDefault se mantiene solo para los links sin href real (como #)
            if (this.getAttribute('href') === '#') {
                 event.preventDefault();
                 const message = `Has hecho clic en: ${this.textContent}`;
                 alert(message);
            }
        });
    });

    // Función para manejar el botón "Explorar nuestra colección"
    const exploreButton = document.querySelector('.hero .btn');
    exploreButton.addEventListener('click', function(event) {
        // En lugar de alert, navegamos a la sección de productos
        event.preventDefault();
        document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
    });

    // Función para manejar el botón "Aprender más" en la sección "Nuestra Historia"
    const learnMoreButton = document.querySelector('.about .btn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Descubre más sobre nuestra historia y pasión por la repostería!');
    });

    // Nueva función para manejar el envío de la Forma de Contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Detiene el envío real del formulario
            
            // Recoger datos (simulación)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simulación de envío exitoso
            alert(`¡Gracias por tu mensaje, ${name}! Hemos recibido tu consulta y te contactaremos a ${email} pronto.`);
            
            // Opcional: limpiar el formulario después del envío
            contactForm.reset();
        });
    }
});