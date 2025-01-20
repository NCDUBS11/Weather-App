import { getWeatherData } from "./getWeather";
import { weatherList } from "./imageModule";

const form = document.getElementById("form");
const locationSubmitBtn = document.getElementById("locationSubmitBtn");
const locationDisplay = document.getElementById("locationDisplay");
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

function locationDisplayListener() {
  locationDisplay.addEventListener("click", () => {
    locationDisplay.style.display = "none";
    form.style.display = "flex";
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

  if (!weather) {
    locationInput.setCustomValidity("Location not found! Try again.");
    locationInput.reportValidity();
    return 0;
  }

  conditions.textContent = weather.conditions;
  temp.textContent = `${weather.temp}°F`;
  humidity.textContent = `${weather.humidity}%`;
  precipprob.textContent = `${weather.precipprob}%`;
  windspeed.textContent = `${weather.windspeed}mph`;
  console.log(weather.icon);
  console.log("attempting to change icon...");
  icon.src = getKeyPath(weatherList, weather.icon);

  locationDisplay.style.display = "flex";
  resolvedAddress.textContent = weather.resolvedAddress;
  form.style.display = "none";
  locationDisplayListener();
}

function getKeyPath(array, key) {
  for (const obj of array) {
    if (Object.keys(obj)[0] === key) {
      console.log("icon found!");
      return obj[key];
    }
  }
  console.log("icon not found");
  return 0;
}
