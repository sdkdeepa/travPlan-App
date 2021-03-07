/* Steps
Setup empty JS object to act as endpoint for all routes
Express to run server and routes
Start up an instance of app
Dependencies 
Middleware
Here we are configuring express to use body-parser as middle-ware.
Cors for cross origin allowance
Initialize the main project folder
Spin up the server
Callback to debug
Initialize all route with a callback function
Callback function to complete GET '/all'
Post Route 
*/

// global variables

import {
    _updateUI,
    _getDates,
    _fetchPixabay,
    _fetchWeatherBit,
    _loadingState,
    _fetchGeoNames,
  } from './components';
  var slimCardElm = document.getElementById('slim-card');
  
  _loadingState('none');
  
  if(slimCardElm) {
    slimCardElm.style.display = 'none';
  }
  
  export const performAction = async (e) => {
    e.preventDefault();
    
    _loadingState('block');
    // check what text was put into the form field
    let today = new Date().getTime();
    let city = document.getElementById('city').value;
    let depart = new Date(document.getElementById("departing").value).getTime();
    let retur = new Date(document.getElementById("returning").value).getTime();
    let allDates = {
      dates: {
        depart,
        retur,
        today
      }
    };
    const leftDays = _getDates(allDates.dates);
    let myData = {
      dates: leftDays
    }
  
    await _fetchGeoNames(city).then(response => {
      _fetchWeatherBit(response.lat, response.lng).then(res => {
        myData = {
          ...myData,
          weather: {
            weatherSum: res.summary,
            weatherTemp: res.temperatureLow
          }
        }
  
        _updateUI(myData)
      })
  
      _fetchPixabay(response.placeName).then(res => {
        myData = {
          ...myData,
          img: res,
          placeName: response.placeName,
        }
  
        _updateUI(myData)
      })
    });
  }