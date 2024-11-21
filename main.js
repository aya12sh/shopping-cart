import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { productsDataFetcher } from "./api.js";

const productsData = await productsDataFetcher();
const { products } = productsData;
const productsContainerEl = document.querySelector(".e-cards-container")
products.map((product) => {
  const cardEl = document.createElement("div")
  cardEl.classList.add("sh-card")



  productsContainerEl.appendChild(cardEl)
})

// document.querySelector("#app").innerHTML = ``;
