'use strict';

const provider = require('../../../pact/provider');
const { endPoints, getAllByGeo } = require('./gasStation.api');
const { somethingLike: like, eachLike } = require('@pact-foundation/pact').Matchers;

beforeAll(async () => {
    return await provider.setup();
});

afterAll(async () => {
   return await provider.finalize();
});

describe('#getGasStations', () => {
    test('should get gas station list from server', async function () {
        await provider.addInteraction({
            state: 'it has gas stations',
            uponReceiving: 'a request to retrieve gas stations list',
            withRequest: {
                method: 'GET',
                path: `${process.env.API_PATH}/${process.env.API_VERSION}${endPoints.get}/lat/32.953695/long/-117.132800`,
                query: {
                    'distance': '5',
                    'fuelType': 'reg',
                    'sortBy': 'distance'
                }
            },
            willRespondWith: {
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: {
                    stations: eachLike({
                        id: '1',
                        zip: '92126',
                        region: 'California',
                        distance: '2.1 miles',
                        address: '11205 Camino Ruiz',
                        prices: like({
                            regular: '3.83',
                            medium: '4.07',
                            premium: '4.11',
                            diesel: 'N/A'
                        })
                    }, {
                        min: 3
                    })
                }
            },
        });
        
        const gasStations = await getAllByGeo({latitude: '32.953695', longitude: '-117.132800'});
        expect(gasStations.length >= 3);
        await provider.verify()
    })
});