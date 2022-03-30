import Countdown from "./Countdown.js";

const newYearTime = new Countdown("31 December 2022 23:59:59 GMT-0300");
console.log(newYearTime.total);
const time = document.querySelectorAll("[data-time]");

function showTime() {
    time.forEach((time, index) => {
        time.innerHTML = newYearTime.total[index]
    });
}
showTime();
setInterval(showTime, 1000);
