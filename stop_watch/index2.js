//This java script code is for creating a stop watch using the real time 
let clock = document.getElementById("clock");
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let interval;

function updateTime(){
    let currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/3600000 % 60);
    let minutes = Math.floor(elapsedTime/60000 % 60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milliseconds = Math.floor(elapsedTime%1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    let updatedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    clock.textContent = updatedTime;

}

function startTimer(){
    if(!isRunning){
        startTime = new Date().getTime() - elapsedTime;
        interval = setInterval(updateTime);
        isRunning = true;
    }
    
    
}
function stopTimer(){
    if(isRunning){
        clearInterval(interval);
        elapsedTime = new Date().getTime() - startTime;
        isRunning = false;
    }
    
}

function resetTimer(){
    clearInterval(interval);
     startTime = 0;
     elapsedTime = 0;
     isRunning = false;
    
    document.getElementById("clock").textContent = `00:00:00.00`;
}