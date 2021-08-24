# Udacity-FEND-capstone-project

# How to run this app?

1. Run `npm install` in the terminal to get the packages required

2. Add credentials to env file - You will need to add your own API credentials to '.env' 
3. Development environment
      - `npm run build-dev`to run the webpack-dev-server with the development config
      - `npm start` script to start the express server
4. Prod environment
     - `npm run build-prod`to run the webpack-dev-server with the development config
     - `npm start` script to start the express server 
     - App runs in `http://localhost:3000/`

# Screenshot

![alt text](https://github.com/sdkdeepa/Udacity-FEND-capstone-project/blob/main/travPlan-home.png)
![alt text](https://github.com/sdkdeepa/Udacity-FEND-capstone-project/blob/main/travPlan-example.png)
![alt text](https://github.com/sdkdeepa/Udacity-FEND-capstone-project/blob/main/jest.png)

## Project Gif and Videos

![alt text](https://github.com/sdkdeepa/Udacity-FEND-capstone-project/blob/main/travPlan.gif)

https://www.youtube.com/watch?v=rUg9_IQwLlM

## References used:
- [Pixabay](https://pixabay.com/)
- [Logo creation](https://www.freelogodesign.ca/)
- [Geonames](https://www.geonames.org/)
- [Heroku Issue solved](https://stackoverflow.com/questions/55889110/how-do-i-have-geonames-api-work-with-https)
- [Weatherbit](https://www.weatherbit.io/)
- [W3Schools](https://www.w3schools.com/) `https://www.w3schools.com/howto/howto_css_form_on_image.asp`
- [App layout](https://wanderlog.com/)
- [JS Doc](https://jsdoc.app/)
- [Local storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/)
- [Adding multiple HTML to webpack](https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/)
- [Testing](https://zellwk.com/blog/endpoint-testing/)

## Images used here are from pixa bay

- [Background](https://cdn.pixabay.com/photo/2015/09/13/05/58/nautical-937738_1280.jpg)

# Development Environment and Architecture
## Architecture:
The project should have a structure like the one shown below. All files shown must be present (Webpack may be split into multiple config files, and names may differ) and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.

- Root:
  - `package.json`
  - `readme.md`
  - `webpack.config.js`
  - src folder
    - server folder
      - `server.js` (name will vary)
    - client folder
      - `index.js`
      - html/views folder
        - `index.html`
      - js folder
        - `app.js` (name will vary)
      - styles folder
        - `style.scss` (name will vary - may be broke into partials)

## Webpack
Webpack config should contain at least 3 scripts, express server, build and test. Additionally, dev server may be included.
## Testing
There should be at least one test for the express server and application javascript
## Offline capabilities
The project must have service workers installed.


# HTML & CSS
## Usability
All features are usable across modern desktop, tablet, and phone browsers.
## Styling
Styling is set up in a logical way. All interactive elements have hover states.
## HTML Structure
HTML structure should be indented properly with classes and ID’s that make sense.
## Visual Design
The design should clearly be different from the design used in projects 3 and 4.

# API and JS Integration
## Server
`src > server > server.js`
Server should be a near duplication of project 3 with the exception of additional added member: value pairs.    
## index.js
`src > client > index.js`
- At least one function should be imported.
- At least one event listener should be imported.
- (styles referenced in html/css)
## app.js
`src > client > js > app.js`
1. There should be URLS and API Keys for at least 3 APIs, including Geonames, Weatherbit, and Pixabay. You can feel free to use more than 3 APIs.
2. There should be a primary object with placeholder member value pairs.
3. There should be a primary function that is exported to index.js.
## Extend Options / Ways to Stand Out
At least one option from the Extend your Project/Ways to Stand Out sections have been added. Please add a Note to your reviewer which one you chose to implement, or add into your `README`.

# Documentation
## README
A README file is included detailing the app and all dependencies.
### Other requirements:
The Readme file should have non-default text in it that is specific to this project. It doesn’t have to be thorough, but should have some basic info. Bonus points if correct markdown is used.
## Comments
Comments are present and effectively explain longer code procedure when necessary.
## Code Quality
Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

# Suggestions to Make Your Project Stand Out!
At least one of these is required, but the rest are great additional ways to further customize and improve your project!

- Add end date and display length of trip.
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Allow user to add multiple destinations on the same trip.
- Pull in weather for additional locations.
- Allow the user to add hotel and/or flight data.
- Multiple places to stay? Multiple flights?
- Integrate the [REST Countries API](https://restcountries.eu/) to pull in data for the country being visited.
- Allow the user to remove the trip.
- Use [Local Storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) to save the data so that when they close, then revisit the page, their information is still there.
- Instead of just pulling a single day forecast, pull the forecast for multiple days.
- Incorporate icons into forecast.
- Allow user to Print their trip and/or export to PDF.
- Allow the user to add a todo list and/or packing list for their trip.
- Allow the user to add additional trips(this may take some heavy reworking, but is worth the challenge).
        a) Automatically sort additional trips by countdown.
        b) Move expired trips to bottom/have their style change so it’s clear it’s expired.
