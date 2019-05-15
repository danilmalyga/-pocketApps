let timer = getElementByIdFunction("timer"),
    buttonTimer = getElementByIdFunction("buttonTimer"),
    setAlarmButton = getElementByIdFunction("setAlarmButton"),
    alarmIsSet = getElementByIdFunction("alarmIsSet"),
    hour = getElementByIdFunction("hour"),
    minutes = getElementByIdFunction("minutes"),
    seconds = getElementByIdFunction("seconds"),
    timerIdd = getElementByIdFunction("timeId"),
    audio = getElementByIdFunction("timerSound"),
    timerIsUp = getElementByIdFunction("timerIsUp");

function getElementByIdFunction(id){
  return document.getElementById(`${id}`);
}

setInterval (function showTimeAndCheckAlarmEveryMinutes(){
  let timeNow = new Date(),
      hours = timeNow.getHours(),
      minutes = timeNow.getMinutes(),
      seconds = timeNow.getSeconds();

  time.innerHTML = correctTime(hours, minutes, seconds);      // we show time

  checkAlarm();
}
,1000);


function correctTime (hours,minutes,seconds){
switch(true){
  case (hours < 10) : hours = "0" + +hours;
  break;
  case (hours > 23) : hours = "00";
  break;
}
switch(true){
  case (minutes < 10) : minutes = "0" + +minutes;
  break;
  case (minutes > 59) : minutes = 59;
  break;
  default : minutes = +minutes;
}
switch(true){
  case (seconds < 10) : seconds = "0" + +seconds;
  break;
  case (seconds > 59) : seconds = 59;
  break;
  default : seconds = +seconds;
}
return String(hours) + ":" + String(minutes) + ":" + String(seconds);
}



setAlarmButton.addEventListener('click', setAlarm);
buttonTimer.addEventListener("click", setTimer);