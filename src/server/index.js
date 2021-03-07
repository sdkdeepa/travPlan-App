// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

require('./components');
dotenv.config({path: './.env'})

// http://api.geonames.org/

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 3000;

app.listen(port, () => console.log(`Server running! Running on localhost: ${port}!`));

console.log("Your Geoname keys are",process.env.username)
console.log( "Your Weathebit app api key", process.env.key)
console.log( "Your Weathebit app api key", process.env.pixabaykey)

app.get('/geonames', (req, res) => {
  const {
    zip
  } = req.query;

  _fetchGeoNames(process.env.username, city).then(response => {
    res.end(JSON.stringify(response));
  });
});


app.get('/weatherbit', (req, res) => {
  const {
    lat,
    long
  } = req.query;

  _fetchWeatherBit(process.env.key, lat, long).then(response => {
    res.end(JSON.stringify(response));
  }).catch(error => console.log(error))
});


app.get('/pixabay', (req, res) => {
  const {
    picture
  } = req.query.image;

  _fetchPixabay(process.env.pixabaykey, picture).then(response => {
    res.end(JSON.stringify(response));
  });
});