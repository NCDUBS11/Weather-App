import "./styles.css";
import { initEventListeners } from "./updateUi";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

initEventListeners();
