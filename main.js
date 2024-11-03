import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { productsDataFetcher } from "./api.js";

const productsData = await productsDataFetcher();
const { products } = productsData;

// document.querySelector("#app").innerHTML = ``;
