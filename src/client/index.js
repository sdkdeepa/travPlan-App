import { getGeonameLocation } from './js/geonames';
import { getPixabayImage } from './js/pixabay';
import { getweatherCordinates } from './js/weatherbit';
import './styles/style.scss';

const moment = require('moment');
const recentData = (plandata) => {
    let div = document.createElement('div');
    div.classList.add('travel-container');
    document.getElementById('add').appendChild(div);
    div.innerHTML = `<div class="travel" id='img' style="background-image: url('${plandata.image}');"></div>
   <div class="travel" id='info'>
      <div class="travel" id="to"> Travel plan to:  <span class="same">${plandata.city}, ${plandata.country}</span>
      </div></br>
      <div class="travel" id="departure_date">Leaving On:  <span class="same">${plandata.departure_date} </br></span>
      </div> </br>
      <div class="travel" id="return_date"> Coming Back:  <span class="same">${plandata.return_date}</span>
      </div> </br>
      <div class="travel" id="temp"> Temperature:  <span class="same">${plandata.temp}°C </span>
      </div></br>
      <div class="travel" id="rem"> Number of Days for Departure:  <span class="same">${plandata.daysremaining} days </span>
      </div></br>
      <div class="travel" id="des"> Weather Forecast:  <span class="same">${plandata.description} </span>
      </div>
    </div>`;

    document.getElementById('delete').addEventListener('click', (err) => {
        err.preventDefault();
        div.remove();
    });
}

const plandata = {};

const savetravel = async (error) => {
    const city = document.getElementById('city').value;
    const departureDate = document.getElementById('dep').value;
    const returnDate = document.getElementById('ret').value;

    const dateFormat = (date) => {
        // reference: https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/
        const format = moment(date).format('LL');
        return format;
    }
    //calculating the number of days remaining from the current date to the future date
    const daysremaining = (departure_date, date) => {
        const totalDays = new Date(departure_date).getTime() - new Date().getTime();
        return Math.ceil(totalDays / 86400000); 
    }

    error.preventDefault();
    plandata.city = city[0].toUpperCase() + city.slice(1);
    plandata.getGeonameLocation = await getGeonameLocation(plandata.city);
    plandata.image = await getPixabayImage(plandata.city);
    plandata.departure_date = dateFormat(departureDate);
    plandata.return_date = dateFormat(returnDate);
    plandata.daysremaining = daysremaining(plandata.departure_date, new Date());
    plandata.lat = plandata.getGeonameLocation.lat;
    plandata.lng = plandata.getGeonameLocation.lng;
    plandata.country = plandata.getGeonameLocation.country;
    plandata.getweatherCordinates = await getweatherCordinates(plandata.lat, plandata.lng);
    plandata.temp = plandata.getweatherCordinates.data[plandata.daysremaining].high_temp;
    plandata.description = plandata.getweatherCordinates.data[plandata.daysremaining].weather.description;
    console.log(plandata);
    recentData(plandata);
}

document.getElementById('save').addEventListener('click', savetravel);