
const config = {
    env: process.env.NODE_ENV,
    server: {
        port: process.env.PORT || 3000,
        apiVersion: process.env.API_VERSION || 'v1',
    },
    orchestration: {
        routes: {
            gasStations: {
                // /stations/radius/(Latitude)/(Longitude)/(distance)/(fuel type)/(sort by)/apikey.json
                urlTemplate: 'http://devapi.mygasfeed.com/stations/radius/32.953695/-117.132800/8/reg/price/rfej9napna.json',
                authKey: 'rfej9napna'
            },
            logos: {
                urlTemplate: 'https://company.clearbit.com/v1/domains/find?name={name}',
                authKey: 'sk_8130ef1c64831dd09b2b44b0d8d6b542'
            }
        }
    }
};

module.exports = config;