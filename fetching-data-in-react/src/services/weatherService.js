// src/services/weatherService.js

const API_KEY = "8fb8e3880dee4c298dd23542252101";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

async function show(city) {
  //? modify the URL
  const url = `${BASE_URL}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// show("Bangkok");

export { show };
