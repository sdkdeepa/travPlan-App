const getweatherCordinates = async(lat, lng) => {
    const weatherApi = 'c8272f26591a440e82ae53282e0717fd';
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherApi}`
    try {
        const res = await fetch(weatherUrl);
        const traveldata = await res.json();
          return traveldata;
      } catch (e) {
        console.log(e);
      }
}

export{getweatherCordinates}