
let starttimer = 0;
let elapsedTime = 0;
let listTours = [];
let timerInterval = null;

function timeToString(time){
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2,'0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startTimer(){
    let listTours = [];
    if (!timerInterval) {
        starttimer = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = setupElapsedTime();
            document.getElementById('timer').textContent = timeToString(elapsedTime);
        }, 10);
    }
}

function stopTimer(){
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer(){
    stopTimer();
    elapsedTime = 0;
    document.getElementById('timer').textContent = "00:00:00.000";
}

function setupElapsedTime(){
    elapsedTime = Date.now() - starttimer;
    return elapsedTime
}

function saveTimer(){
    setupElapsedTime()
    return setupElapsedTime()
}

function toursTimer(){
    list = list + setupElapsedTime()
}