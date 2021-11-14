const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const nextYear = new Date().getFullYear() + 1
const newYearDate = '1 Jan ' + nextYear.toString();

function countdown() {
    const newYearsCalendarDate = new Date(newYearDate);
    const currentDate = new Date();

    const diff = newYearsCalendarDate - currentDate;

    const Totalseconds = diff / 1000;

    const days = Math.floor(Totalseconds / 3600 / 24);

    const hours = Math.floor(Totalseconds / 3600) % 24;

    const minutes = Math.floor(Totalseconds / 60) % 60;

    const seconds = Math.floor(Totalseconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
