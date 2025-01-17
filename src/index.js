import "./styles.css";
import { getWeatherData } from "./getWeather";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

console.log(await getWeatherData());
