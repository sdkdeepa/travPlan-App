const getPixabayImage = async(city) => {
    const pixabay_secretkey = '17102936-c19945d4a1d94a873a7484fa4';
    const pixabay_Url = `https://pixabay.com/api/?key=${pixabay_secretkey}&q=${city}&image_type=photo`
    try {
        const response = await fetch(pixabay_Url);
        const cityData = await response.json();
        return cityData.hits[1].largeImageURL;
          }
    catch (e) {
        console.log();
    }
}

export {getPixabayImage}