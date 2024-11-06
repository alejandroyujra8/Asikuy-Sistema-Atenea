document.addEventListener("DOMContentLoaded", function() {
    // Definir la fecha de destino para el contador regresivo
    let countDownDate = new Date("Oct 5, 2024 15:37:26").getTime();

    // Actualizar el contador cada 1 segundo
    let countdownInterval = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        // Calcular días, horas y minutos restantes
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        // Mostrar los resultados en los elementos correspondientes
        if(document.getElementById("days")) {
            document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        }
        if(document.getElementById("hours")) {
            document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        }
        if(document.getElementById("minutes")) {
            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        }

        // Finalizar el conteo cuando la fecha se ha alcanzado
        if (distance < 0) {
            clearInterval(countdownInterval);
            if(document.getElementById("days")) {
                document.getElementById("days").innerHTML = "00";
            }
            if(document.getElementById("hours")) {
                document.getElementById("hours").innerHTML = "00";
            }
            if(document.getElementById("minutes")) {
                document.getElementById("minutes").innerHTML = "00";
            }
        }
    }, 1000);

    // Lista de pacientes registrados (simulación)
    const pacientesRegistrados = [
        { nombre: "Alejandro Andres Yujra Paye", hora: "15:00 P.M", razon: "Tratamiento Dental" },
        // Puedes agregar más pacientes aquí para pruebas
    ];

    // Buscar y mostrar los datos del paciente en el formulario de cancelación
    const cancelForm = document.getElementById("cancelAppointmentForm");
    if(cancelForm) {
        cancelForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario

            const inputNombre = document.querySelector('#cancelAppointmentForm input[type="text"]').value;
            const appointmentDetails = document.getElementById("appointmentDetails");
            const paciente = pacientesRegistrados.find(p => p.nombre.toLowerCase() === inputNombre.toLowerCase());

            // Mostrar los datos del paciente o un mensaje predeterminado si no se encuentra
            if (paciente) {
                appointmentDetails.innerHTML = `
                    <div class="d-flex justify-content-between">
                        <span>${paciente.nombre}</span>
                        <span>${paciente.hora}</span>
                        <span>${paciente.razon}</span>
                    </div>
                `;
            } else {
                appointmentDetails.innerHTML = '<span class="placeholder-text">Inserte el nombre del paciente para ver su cita</span>';
            }
        });
    }

    // Mostrar o esconder el icono de confirmación en el checkbox de cancelación
    const confirmCancelCheckbox = document.getElementById("confirmCancel");
    if(confirmCancelCheckbox) {
        confirmCancelCheckbox.addEventListener("change", function() {
            const checkIcon = document.getElementById("checkIcon");
            if(checkIcon) {
                checkIcon.classList.toggle("d-none", !this.checked);
            }
            
            // Quitar el foco del checkbox después de un breve retraso
            setTimeout(() => {
                this.blur();
            }, 100); // El tiempo en milisegundos antes de quitar el enfoque
        });
    }

    // Función para hacer scroll suave al inicio de la página
    const backToTopBtn = document.getElementById("backToTopBtn");
    if(backToTopBtn) {
        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// Seleccionar elementos del header y los iconos
const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');
const userIcon = document.querySelector('.header-user-icon');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Cambiar el color del logo y el icono de usuario cuando se hace scroll hacia abajo
    if (scrollTop > 50) {
        logo.classList.add('logo-blue');
        userIcon.classList.add('logo-blue');
        header.classList.add('scrolled');
    } else {
        logo.classList.remove('logo-blue');
        userIcon.classList.remove('logo-blue');
        header.classList.remove('scrolled');
    }

    // Ocultar o mostrar el header basado en la dirección del scroll
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo, ocultar header
        header.classList.add('header-hidden');
    } else {
        // Scroll hacia arriba, mostrar header
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});
