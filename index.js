let currentDay = document.querySelector("h2");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();
currentDay.innerHTML = `${day} ${hour}:${min}`;

function shangeCity(event) {
  event.preventDefault();
  let searchCurrentCity = document.querySelector(".input-city");
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${searchCurrentCity.value}`;
}
let searchCity = document.querySelector(".search-city");
searchCity.addEventListener("submit", shangeCity);

function changeTempToFFunction(event) {
  event.preventDefault();
  let tempF = document.querySelector("#temp");
  tempF.innerHTML = Math.round(19 * 1.8 + 32);
}
let changeTempToF = document.querySelector("#tempF");
changeTempToF.addEventListener("click", changeTempToFFunction);

function changeTempToСFunction(event) {
  event.preventDefault();
  let tempC = document.querySelector("#temp");
  tempC.innerHTML = Math.round((66 - 32) / 1.8);
}
let changeTempToС = document.querySelector("#tempC");
changeTempToС.addEventListener("click", changeTempToСFunction);
