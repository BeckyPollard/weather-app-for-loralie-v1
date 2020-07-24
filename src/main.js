import './style.scss';
import {
  helloWorld
} from './scriptPartials/helloWorld';

const app = {};

app.getWeather = () => {
  const key = 'ae1cb86f53ac6bf0f3f4c672b3f74d35';
  const cityID = '6167863';

  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`)
    .then(response => response.json())
    .then(data => {
      app.reportWeather(data);
    });

};

app.reportWeather = (w) => {
  const cityName = w.name;
  const celsius = (Math.round(parseFloat(w.main.temp) - 273.15));
  const fahrenheit = (Math.round(((parseFloat(w.main.temp) - 273.15) * 1.8) + 32));
  document.getElementById('cityName').innerHTML = cityName;
  document.getElementById('celsius').innerHTML = `${celsius}&deg;C`;
  document.getElementById('fahrenheit').innerHTML = `${fahrenheit}&deg;F`;
}

app.init = () => {
  app.getWeather();
}

document.addEventListener("DOMContentLoaded", function() {
  app.init();
});