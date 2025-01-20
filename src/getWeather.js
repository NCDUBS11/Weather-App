//Fetch weather data

export async function getWeatherData(query) {
  let queryLocation;

  if (query) {
    queryLocation = query;
  } else {
    queryLocation = "fremont";
  }

  const weatherData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}?key=6P8KSEDG4VVMNAH3G83WDLFGE`,
    { mode: "cors" },
  );
  return weatherData
    .json()
    .then((weatherData) => {
      return {
        resolvedAddress: weatherData.resolvedAddress,
        conditions: weatherData.currentConditions.conditions,
        temp: weatherData.currentConditions.temp,
        humidity: weatherData.currentConditions.humidity,
        precipprob: weatherData.currentConditions.precipprob,
        windspeed: weatherData.currentConditions.windspeed,
        icon: weatherData.currentConditions.icon,
      };
    })
    .catch((err) => {
      console.log(err);
      return 0;
    });
}
