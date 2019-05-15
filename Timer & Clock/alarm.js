function setAlarm(){
    localStorage.setItem('alarm', correctTime(hour.value,minutes.value,seconds.value));
    alarmIsSet.innerHTML = "Alarm is set successful on " + correctTime(hour.value,minutes.value,seconds.value);
    setTimeout(() => {
      alarmIsSet.innerHTML = ""
    },4000);
  }

  function checkAlarm(){
     //this = showTimeAndCheckAlarmEveryMinutes();      // тут я хотел передать контектс не не создавать снова переменные ниже

    
     let timeNow = new Date(),
      hours = timeNow.getHours(),
      minutes = timeNow.getMinutes(),
      seconds = timeNow.getSeconds(),
      timeOfAlarm = localStorage.getItem("alarm");
    if (correctTime(timeNow.getHours(),timeNow.getMinutes(),timeNow.getSeconds()) === timeOfAlarm){   // alarm . it compares in local storage
        alarmIsSet.innerHTML = "Alarm,alarm!"
        setTimeout(() => { 
        alarmIsSet.innerHTML = ""
        },5000)
        audio.play(); 
    }
  }

