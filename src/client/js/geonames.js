export async function getGeonameLocation(city) {
    const userName = 'travel01'
    const url=`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${userName}`;
    try {
         const response = await fetch(url);
     // storing the location in an empty array
         const location = {};
         const traveldata = await response.json();
         location.lat = traveldata.geonames[0].lat;
         location.lng = traveldata.geonames[0].lng;
         location.country = traveldata.geonames[0].countryName;
         return location;
    } catch(e){
              console.log("Error in geonames api", e);
    }
  }

