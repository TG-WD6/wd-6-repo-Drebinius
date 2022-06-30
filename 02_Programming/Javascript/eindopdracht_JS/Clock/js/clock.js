setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')


   

    function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio),
    setRotation(minuteHand, minutesRatio),
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


function loadTimeZoneList(){   
    let select = document.getElementById("dropdownTimeZone");
    select.innerHTML = ""; 
    let browserTimeZone = moment.tz.guess();
    let timeZones = moment.tz.names();
       timeZones.forEach((timeZone) =>{
       option = document.createElement("option");      
         option.textContent = `${timeZone} (GMT${moment.tz(timeZone).format('Z')})`; 
         option.value = timeZone;
         if (timeZone == browserTimeZone){
             option.selected = true;
         }
         select.appendChild(option);
       });
    
  }
/////////////////////////////digi
const clockSpan = document.querySelector('[data-digi-clock]')

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
     clockSpan.innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();