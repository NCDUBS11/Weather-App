//Fetch weather data

export async function getWeatherData() {
  const weatherData = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/fremont?key=6P8KSEDG4VVMNAH3G83WDLFGE",
    { mode: "cors" },
  );
  return weatherData.json().then((weatherData) => {
    return weatherData;
  });
}
