const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

const countdownTime = ()=>{

    const goalTime = new Date("Juni 28, 2022 00:00:00").getTime();
    const nowTime = new Date().getTime();
    const diff = goalTime - nowTime

    const sec = 1000;
    const min = sec * 60;
    const hrs = min * 60;
    const day = hrs * 24;

    const textDays = Math.floor(diff / day);
    const textHours = Math.floor((diff%day) / hrs);
    const textMinutes = Math.floor((diff%hrs) / min);
    const textSeconds = Math.floor((diff%min) / sec)

    days.innerHTML = textDays
    hours.innerHTML = textHours
    minutes.innerHTML = textMinutes
    seconds.innerHTML = textSeconds
    
}

countdownTime();
setInterval(countdownTime, 1000)
