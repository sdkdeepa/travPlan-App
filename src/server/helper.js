const dotenv = require('dotenv');

dotenv.config();

function apiKeys(varname) {
    const username= process.env.GEONAMES_USERNAME;
    const key= process.env.WEATHERBIT_API_KEY;
    const pixabaykey= process.env.PIXABAY_API_KEY;
    return varname;
}

export { apiKeys };