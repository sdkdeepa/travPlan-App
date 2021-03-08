const getPixabayImage = async(city) => {
    const pixabay_secretkey = '';
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