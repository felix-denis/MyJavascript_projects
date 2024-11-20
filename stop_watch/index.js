let hours = 0;
let min = 0;
let sec = 0;
 
let interval;

function startTimer() {
  interval = setInterval(() => {
    sec++;
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hours++;
      min = 0;
    }
  

  hoursStrn = hours.toString().padStart(2, "0");
  minStrn = min.toString().padStart(2, "0");
  secStrn = sec.toString().padStart(2, "0");
 

  let updatedtime = `${hoursStrn}:${minStrn}:${secStrn}`;
  document.getElementById("clock").textContent = updatedtime;
}, 1000);
}

 

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
   hours = 0;
   min = 0;
   sec = 0;
  
  document.getElementById("clock").textContent = "00:00:00.00";
}
