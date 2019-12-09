const got = require('got');
const { vendors: {
    gasFeed
} } = require('../../config');

exports.getStationsByGeolocation = async ({latitude, longitude, distance, fuelType, sortBy}) => {
    const { url, options } = getRequestParams({latitude, longitude, distance, fuelType, sortBy});
    const response = await got(url, options);

    return response.body.stations;
};

const getRequestParams = ({latitude, longitude, distance, fuelType, sortBy}) => ({
    url: `stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${gasFeed.authKey}.json`,
    options: {
        prefixUrl: gasFeed.apiUrl,
        responseType: 'json'
    }
});

