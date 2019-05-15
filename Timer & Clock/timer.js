function setTimer(){
    let timerId = setInterval(() => {         //save setInterval in variable, for we can stop timer
     if (+timer.value < 0 || +timer.value !== Math.round(+timer.value)){                      // not less 0 and integer
       clearInterval(timerId);
       timer.value = "";
       timerIsUp.innerHTML = "only positive & integer numbers";
       setTimeout(() => {
         timerIsUp.innerHTML = ""
       },1500)
       return;
     }
     else if (+timer.value === 0){                    // timer = 0 when it end
       clearInterval(timerId);                   
       audio.play(); 
       timerIsUp.innerHTML = "Timer is up!" 
       setTimeout(() => { 
         timerIsUp.innerHTML = ""
       },5000)  
       return;                                       // when timer end value will be 0, not -1;
     }
       --timer.value;
     },1000);
   };
   