
let starttimer = 0;
let endtimer = 0;
let timerinterval = 0;

function timeToString(time){
    const date = new Date(time);
    const heure = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${minutes}:${seconds}.${milliseconds}`
}

function startTimer(){
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
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
