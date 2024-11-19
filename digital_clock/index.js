 setInterval( () =>{
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    //To make the hours into 12 Hour clock;
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,"0");
    const min = now.getMinutes().toString().padStart(2, "0");
    const sec = now.getSeconds().toString().padStart(2, "0");
    
     
    
    const updatedTime = `${hours}:${min}:${sec}  ${meridian}`;
    
    document.getElementById("clock").textContent = updatedTime;
    
}, 1000);

 