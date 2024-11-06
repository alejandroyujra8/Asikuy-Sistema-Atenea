// Definir la fecha de destino
let countDownDate = new Date("Oct 5, 2024 15:37:26").getTime();

// Actualizar el contador cada 1 segundo
let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Calcular días, horas y minutos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Mostrar los resultados en los divs correspondientes
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;

    // Si el conteo termina
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
    }
}, 1000);
