const axios = require('axios');

const GeoNames = 'api.geonames.org/searchJSON?';
const weatherbit = 'api.weatherbit.io/v2.0/forecast';
const pixabayAPI = 'pixabay.com/api';

// function to aggrogate the geoNames route, api key and url with zip search
_fetchGeoNames = async (username, city ) => {
  // we build our data necessary for doing the fetch operation from weather api
 const url = `http://${GeoNames}${cityOrPostal}&maxRows=10&username=${username}`;
  return axios.get(url).then(response => {
    return response.data.postalCodes[0];
  });
};

// function to send lat/long to weatherbit 
_fetchWeatherBit = async (weatherbitKey, lat, long) => {
  const url = `https://${weatherbit}/${weatherbitKey}/${lat},${long}`;
  return axios.get(url).then(response => {
    return response.data.daily.data[0];
  });
};

_fetchPixabay =  async (pixabaykey, image) => {
  // data necessary for doing the fetch operation from pixabay api
  const url = `https://${pixabayAPI}/?key=${pixabaykey}&q=${image}`;
  return await axios.get(url).then(response => {
    if (response.data.totalHits != 0) {
      return response.data.hits[0].largeImageURL;
    } else {
      return { error: 'no results' };
    }
  });
};
