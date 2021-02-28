import { geonamesAPI, weatherbitAPI, pixabayAPI, postData} from "./formHandler";
import { createNewTrip } from "./newTrip";
import { getDaysLeft, reformatDate, formValidation } from "./helper";

//Global variables


let newTrip = {};
let tripList = document.querySelector(".trip");
let modal = document.querySelector(".modal");

// Check if local storage exists
let tripsArray = localStorage.getItem("trips")
  ? JSON.parse(localStorage.getItem("trips"))
  : [];
const tripData = JSON.parse(localStorage.getItem("trips"));

//Handle the main function for form submit


export const handleSubmit = async (e) => {
  e.preventDefault();

  const from = document.forms["travel-form"]["from"].value;
  const to = document.forms["travel-form"]["to"].value;
  const departDate = document.getElementById("departDate").value;
  const returnDate = document.getElementById("returnDate").value;

  if (formValidation(from, to, departDate, returnDate)) {
    openModal();
    console.log(departDate);

    // Check if departure date is less or greater than 16 days away
    //If more than 16 days away then use current weather forecast from API 

    let daysLeft = getDaysLeft(Date.now(), departDate);
    let futureWeather = daysLeft < 15 ? daysLeft : 15;

    await geonamesAPI(to).then((geoData) => {
      newTrip.city = geoData.geonames[0].name;
      newTrip.country = geoData.geonames[0].countryName;
      newTrip.lat = geoData.geonames[0].lat;
      newTrip.lon = geoData.geonames[0].lng;
    });

    await weatherbitAPI(newTrip.lat, newTrip.lon).then((weatherData) => {
      newTrip.currentMinTemp = Math.floor(weatherData.data[0].min_temp);
      newTrip.currentMaxTemp = Math.floor(weatherData.data[0].max_temp);
      newTrip.currentTemp = weatherData.data[0].temp;
      newTrip.description = weatherData.data[0].weather.description;
      newTrip.icon = weatherData.data[0].weather.icon;
      newTrip.currentDate = reformatDate(weatherData.data[0].datetime);

      newTrip.futureMinTemp = Math.floor(
        weatherData.data[futureWeather].min_temp
      );
      newTrip.futureMaxTemp = Math.floor(
        weatherData.data[futureWeather].max_temp
      );
      newTrip.futureTemp = weatherData.data[futureWeather].temp;
      newTrip.futureDescription =
        weatherData.data[futureWeather].weather.description;
      newTrip.futureIcon = weatherData.data[futureWeather].weather.icon;
    });

    await pixabayAPI(newTrip.city, newTrip.country).then((photo) => {
      newTrip.photo = photo.hits[0].webformatURL;
    });

    // Additional trip data to add to the global object
    newTrip.departing = reformatDate(departDate);
    newTrip.returning = reformatDate(returnDate);
    newTrip.countdown = daysLeft;
    newTrip.length = getDaysLeft(returnDate, departDate);
    newTrip.id = Date.now();

    // Pass API data through to the HTML template to add a new trip entry to the UI
    createNewTrip(modal, newTrip, "modal");
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  } else {
    alert("Missing information in form.");
  }
};

