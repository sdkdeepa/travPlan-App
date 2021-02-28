//Fetching API data from Weatherbit, Geonames and Pixabay


// This async function fetches the city name
export const geonamesAPI = async (city , country = "") => {
  const username = process.config.GEONAMES_USERNAME;
  const callUrl = `http://api.geonames.org/searchJSON?q=${city}&country=${country}&maxRows=1&username=${username}`;
  const res = await fetch(callUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in fetching the city from geonames API:", error);
  }
};


// Get weather data from Weatherbit API
export const weatherbitAPI = async (lat, lon) => {
  const api_key = process.config.WEATHERBIT_API_KEY;
  const callUrl = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lon}&key=${api_key}`;
  const res = await fetch(callUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error  in fetching the Weatherbit API:", error);
  }
};

// Get an image of city from Pixabay API
export const pixabayAPI = async (city, country) => {
  const api_key = process.config.PIXABAY_API_KEY;
  const callUrl = `https://pixabay.com/api/?key=${api_key}&q=${city}+${country}&image_type=photo`;
  const res = await fetch(callUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in fetching the data from Pixabay API:", error);
  }
};

// POST API data to the server
 

export const postData = async (callUrl = "", data = {}) => {
  const res = await fetch(callUrl, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const getData = await res.json();
    return getData;
  } catch (err) {
    console.log("Error in Post the data to the server:", err);
  }
};