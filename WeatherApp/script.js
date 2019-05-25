var humidity,
  weatherIcon,
  pressure,
  uvIndex,
  temperature,
  temperatureIcon,
  windBearing,
  windSpeed,
  weatherSummary,
  dayWeek,
  picture;

var button = document.getElementById('sendCity');
var input = document.getElementById('inputCity');
var city, object, object2, lati, lngi;

button.addEventListener('click', function() {
  fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=8ZFTRdT3HtRjOtMk8T4P4oZFyRwPLkr0&location=${
      input.value
    }`
  )
    .then(response => response.json())
    .then(data => displayCord(data.results[0].locations[0].latLng));
  input.value = '';
});

function displayCord(object) {
  if (object) {
    lati = object.lat;
    lngi = object.lng;

    showWeather(lati, lngi);
  } else {
    alert('nono');
  }
}

var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', function() {
  var vis = this.checked ? 'hidden' : 'visible';
  inputCity.style.visibility = vis;
  button.style.visibility = vis;

  if (button.style.visibility === 'visible') {
    humidity.innerHTML = '';
    pressure.innerHTML = '';
    temperature.innerHTML = '';
    console.log('clear all');
  } else if (button.style.visibility === 'hidden') {
    getWeather();
  }
});

window.onload = function() {
  humidity = document.getElementById('current-humidity');
  weatherIcon = document.getElementById('current-icon');
  pressure = document.getElementById('current-pressure');
  uvIndex = document.getElementById('current-uvIndex');
  temperature = document.getElementById('current-temperature');
  temperatureIcon = document.getElementById('temperature-icon');
  windBearing = document.getElementById('current-wind-bearing');
  windSpeed = document.getElementById('current-wind-speed');
  weatherSummary = document.getElementById('weather-summary');
  cityy = document.getElementById('cityy');
  dayWeek = document.getElementById('dayWeek');
  dayWeek.textContent = monthNow();
  picture = document.getElementById('picture');
};

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
      showWeather(lat, lng);
    });
  } else {
    window.alert('Could not get location');
  }
}
var object;

function showWeather(lat, lng) {
  var url =
    `https://api.darksky.net/forecast/762b52dd8214c039f54683fbcf95f4d0/${lat},${lng}` +
    `?format=jsonp&callback=displayWeather`;
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
  displayWeather(object);
}

function displayWeather(object) {
  if (object) {
    cityy.textContent = object.timezone.slice(object.timezone.indexOf('/') + 1);
    windSpeed.textContent = 'Wind ' + Math.round(object.currently.windSpeed) + 'km/h';
    humidity.innerHTML = humidityPercentage(object.currently.humidity) + '%';
    temperature.textContent = farenheitToCelcius(object.currently.temperature) + '°';
    changePic(object);
  }
}

function humidityPercentage(h) {
  return Math.round(h * 100);
}

function farenheitToCelcius(t) {
  return Math.round((t - 32) * 0.5556);
}

function monthNow() {
  var now = new Date();
  var day = now.getDay();
  if (day === 0) {
    return 'Sunday';
  } else if (day === 1) {
    return 'Monday';
  } else if (day === 2) {
    return 'Tuesday';
  } else if (day === 3) {
    return 'Wednesday';
  } else if (day === 4) {
    return 'Thursday';
  } else if (day === 5) {
    return 'Friday';
  } else if (day === 6) {
    return 'Saturday';
  }
}

function changePic(object) {
  if (object.currently.icon === 'clear-day' || object.currently.icon === 'clear-night') {
    document.images['picture'].src = 'img/sun.png';
  } else if (
    object.currently.icon === 'partly-cloudy-day' ||
    object.currently.icon === 'partly-cloudy-night'
  ) {
    document.images['picture'].src = 'img/cloudSun.png';
  } else if (object.currently.icon === 'cloudy') {
    document.images['picture'].src = 'img/cloud.png';
  } else if (object.currently.icon === 'rain') {
    document.images['picture'].src = 'img/rain.png';
  } else if (object.currently.icon === 'snow' || object.currently.icon === 'sleet') {
    document.images['picture'].src = 'img/snow.png';
  }
}
