let search = document.getElementById("txtsearch");
let searchIcon = document.getElementById("se");
let loc = document.getElementById("location");
let date = document.getElementById("datentime");
let wicon = document.getElementById("wicon");
let feelWeather = document.getElementById("feel-weather");

let tempValue = document.getElementById("temp-value");
let tempIcon = document.getElementById("temp-icon");
let tempConvert = document.getElementById("temp-feel");

let humidityValue = document.getElementById("humidity");
let windSpeed = document.getElementById("wind");

let today = new Date();
date.innerText = today.toLocaleDateString("en-US");

window.addEventListener("load", () => {
  let lat;
  let lon;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05444771df912d8bd08a70cb2605e17f`;
      showData(api);
    });
  }
});

searchIcon.addEventListener("click", () => {
  let cityName = search.value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05444771df912d8bd08a70cb2605e17f`;

  if (cityName) {
    showData(api);
  } else {
    alert("Enter City Name");
  }
});

function showData(api) {
  fetch(api)
    .then((respons) => {
      return respons.json();
    })
    .then((data) => {
      const { name } = data;
      const { temp } = data.main;
      const { id, icon, description } = data.weather[0];
      const { humidity } = data.main;
      const { speed } = data.wind;
      console.log(id, icon);
      if (id == 800 && icon == "01d") {
        wicon.src = "day.svg";
      } else if (id == 800 && icon == "01n") {
        wicon.src = "night.svg";
      } else if (id == 500) {
        wicon.src = "rainy-1.svg";
      } else if (id == 501) {
        wicon.src = "rainy-2.svg";
      } else if (id == 503 || id == 504) {
        wicon.src = "rainy-7.svg";
      } else if (id == 502 || id == 522) {
        wicon.src = "rainy-6.svg";
      } else if (id == 520) {
        wicon.src = "rainy-5.svg";
      } else if (id == 522 || id == 521 || id == 531) {
        wicon.src = "rainy-1.svg";
      } else if (id == 511) {
        wicon.src = "snowy-1.svg";
      } else if (id >= 200 && id <= 232) {
        wicon.src = "thunder.svg";
      } else if (id == 801 && icon == "02d") {
        wicon.src = "cloudy-day-1.svg";
      } else if (id == 801 && icon == "02n") {
        wicon.src = "cloudy-night-1.svg";
      } else if (id == 802 && icon == "03d") {
        wicon.src = "cloudy-day-2.svg";
      } else if (id == 802 && icon == "03n") {
        wicon.src = "cloudy-night-2.svg";
      } else if (id == 803 || (id == 804 && icon == "04d")) {
        wicon.src = "cloudy-day-3.svg";
      } else if (id == 803 || (id == 804 && icon == "04n")) {
        wicon.src = "cloudy-night-3.svg";
      } else if (id >= 600 && id <= 622) {
        wicon.src = "snowy-2.svg";
      } else if (id == 721) {
        wicon.src = "haze.svg";
      } else if (id == 741) {
        wicon.src = "fog.svg";
      } else if (id >= 300 && id <= 321) {
        wicon.src = "drizzle.svg";
      } else if (id == 701) {
        wicon.src = "mist.svg";
      } else if (id == 781) {
        wicon.src = "tornado.svg";
      } else if (id == 711) {
        wicon.src = "smoke.svg";
      }

      console.log(id, icon);
      loc.innerText = name;
      feelWeather.innerText = description;
      tempValue.innerText = Math.round(temp - 273);
      humidityValue.innerText = humidity;
      windSpeed.innerText = Math.round(speed * 3.6);
    });
}

tempConvert.addEventListener("click", () => {});
