const getweatherCordinates = async(lat, lng) => {
    const weatherApi = '';
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