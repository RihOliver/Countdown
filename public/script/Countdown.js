//constantes relativas a cada elemento do contador
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

const specialDay = "4 Sep 2022";

function countdown() {
    const specialDayDate = new Date(specialDay); // const que representa a data do speciaDay
    const currentDate = new Date(); //const para a data atual

    const totalSeconds = (specialDayDate - currentDate) / 1000; //const que representa o total de segundos.

    const days = Math.floor(totalSeconds / 3600 / 24); //const que pega o total de segundos divide por 3600(segundos em 1 hora) e depois por 24(horas)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days; //Para retornar o texto contido no elemento
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(min);
    secEl.innerHTML = formatTime(sec);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
