const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const newYears = "1 Jan 2026";

function countTimer() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dias.innerHTML = days;
    horas.innerHTML = hours;
    minutos.innerHTML = minutes;
    segundos.innerHTML = seconds;

}

countTimer();
setInterval(countTimer, 1000);

document.addEventListener('contextmenu',function(event) {event.preventDefault();});
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        const teclasBloqueadas = ['c', 'C', 'x', 'X', 'u', 'U', 's', 'S', 'p', 'P'];
        if (teclasBloqueadas.includes(event.key)) {
            event.preventDefault();
        }
    }
});

alert("Copiar esta deshabilitado en esta página.");
