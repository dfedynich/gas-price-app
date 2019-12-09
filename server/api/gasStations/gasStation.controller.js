'use strict';

const companyDomainsService = require('../companyDomains/companyDomain.service');
const gasStationService = require('./gasStation.service');

exports.getAll = async ctx => {
    const { latitude, longitude, distance = 5, fuelType = 'reg', sortBy = 'price'} = ctx.params;
    const gasStations = await gasStationService.getStationsByGeolocation({latitude, longitude, distance, fuelType, sortBy});
    console.log(gasStations.length);

    const domainGasStations = await Promise.all(gasStations.map(async station => {
        const companyDomain = await companyDomainsService.getDomainByName(station.station);
        const newGasStation = getGasStation({
            ...station,
            companyDomain
        });

        return newGasStation;
    }));

    ctx.status = 200;
    ctx.body = domainGasStations;
};

const getGasStation = (station) => ({
    id: station.id,
    name: station.companyDomain.name,
    logo: station.companyDomain.logo,
    zip: station.zip,
    prices: {
        regular: station.reg_price,
        midGrade: station.mid_price,
        premium: station.pre_price,
        diesel: station.diesel_price
    },
    address: station.address,
    region: station.region,
    distance: station.distance
});