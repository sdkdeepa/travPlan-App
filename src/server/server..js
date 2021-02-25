const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

// Dependencies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Init main project folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Create empty object to save API data
let projectData = [];

// Add new trip entry to the server
app.post("/addTrip", (req, res) => {
  const entry = req.body;
  projectData.push(entry);
});

//Deleting existing trip entry from the server

// Reference: https://www.codota.com/code/javascript/functions/express/Express/delete
app.post("/delete", (req, res) => {
  let{id}=req.body;
  projectData=projectData.filter((myPlan) => myPlan.id !==id);
});

//spin the server at port 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`travPlan app listening on port ${port}!`);
});