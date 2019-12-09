'use strict';

const companyDomainsService = require('../companyDomains/companyDomain.service');
const gasStationService = require('./gasStation.service');

exports.getAll = async ctx => {
    const { latitude, longitude, distance = 5, fuelType = 'reg', sortBy = 'price'} = ctx.params;
    const gasStations = await gasStationService.getStationsByGeolocation({latitude, longitude, distance, fuelType, sortBy});
    console.log(gasStations.length);

    const domainGasStations = await Promise.all(gasStations.map(async station => {
        const companyDomain = await companyDomainsService.getDomainByName(station.station);

        return {
            ...station,
            companyDomain
        }
    }));



    ctx.status = 200;
    ctx.body = domainGasStations;
};