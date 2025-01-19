import { getWeatherData } from "./getWeather";
// import * as image from "./weatherIcons";

const form = document.getElementById("form");
const locationSubmitBtn = document.getElementById("locationSubmitBtn");
const resolvedAddress = document.getElementById("resolvedAddress");
const locationInput = document.getElementById("locationInput");
const conditions = document.getElementById("conditions");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const precipprob = document.getElementById("precipprob");
const windspeed = document.getElementById("windspeed");
const icon = document.getElementById("weatherIcon");

export function initEventListeners() {
  locationInputListener();
}

function locationInputListener() {
  locationInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputValidityCheck();
    }
  });
  locationSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputValidityCheck();
  });
}

function inputValidityCheck() {
  const regex = /^[A-Za-z]+$/;
  const cleanInput = locationInput.value.trim().toLowerCase();

  if (regex.test(cleanInput)) {
    locationInput.setCustomValidity("");
    locationInput.reportValidity();
    console.log(locationInput.validity.valid);
    if (locationInput.validity.valid) {
      updateUI(cleanInput);
      return 1;
    }
  } else {
    locationInput.setCustomValidity("Please enter city name only. No spaces.");
    locationInput.reportValidity();
    return 0;
  }
}

async function updateUI(input) {
  const weather = await getWeatherData(input);

  conditions.textContent = weather.conditions;
  temp.textContent = `${weather.temp}°F`;
  humidity.textContent = `${weather.humidity}%`;
  precipprob.textContent = `${weather.precipprob}%`;
  windspeed.textContent = `${weather.windspeed}mph`;
  console.log(weather.icon);
  // icon.src = `${image.weather.icon}.png`;
  // console.log(icon.src);
}
