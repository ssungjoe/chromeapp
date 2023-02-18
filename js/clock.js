const clock = document.querySelector("#clock");

function getClockFormat(time){
    return String(time).padStart(2, "0");
}

function getClock() {
    const date = new Date();
    let hour = getClockFormat(date.getHours()),
        min = getClockFormat(date.getMinutes()),
        sec = getClockFormat(date.getSeconds());
    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);