        // Here you would add the Zapworks Mattercraft integration code
        document.addEventListener('DOMContentLoaded', function() {
            // Simulating the 3D model rotation
            const cookieModel = document.querySelector('.cookie-model');
            
            // Add interactive rotation on mouse move
            document.addEventListener('mousemove', function(e) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                
                cookieModel.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
            
            // Reset rotation when mouse leaves
            document.addEventListener('mouseleave', function() {
                cookieModel.style.transform = 'rotateY(0) rotateX(0)';
            });
        });