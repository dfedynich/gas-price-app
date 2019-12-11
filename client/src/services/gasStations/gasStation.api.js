import { fetchApi } from '../api/fetchApi';
import GasStationModel from './gasStation.model';
const endPoints = {
    get: '/gas-stations/radius/',
};

export async function getAllByGeo({latitude, longitude}) {
    const endPoint = `${endPoints.get}${latitude}/${longitude}/5/reg/price`;
    //const {stations} = await fetchApi(endPoint);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const {stations} = {
                stations: [{
                    id: '1',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },{
                    id: '2',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },{
                    id: '3',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },{
                    id: '4',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },{
                    id: '5',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },{
                    id: '6',
                    name: 'Shell',
                    zip: '92126',
                    logo: null,
                    region: 'California',
                    distance: '2.1 miles',
                    address: '11205 Camino Ruiz',
                    prices: {
                        regular: '3.83',
                        medium: '4.07',
                        premium: '4.11',
                        diesel: 'N/A'
                    }
                },
                    {
                        id: '7',
                        name: 'Shell',
                        zip: '92126',
                        logo: null,
                        region: 'California',
                        distance: '2.1 miles',
                        address: '11205 Camino Ruiz',
                        prices: {
                            regular: '3.83',
                            medium: '4.07',
                            premium: '4.11',
                            diesel: 'N/A'
                        }
                    },{
                        id: '8',
                        name: 'Shell',
                        zip: '92126',
                        logo: null,
                        region: 'California',
                        distance: '2.1 miles',
                        address: '11205 Camino Ruiz',
                        prices: {
                            regular: '3.83',
                            medium: '4.07',
                            premium: '4.11',
                            diesel: 'N/A'
                        }
                    },{
                        id: '9',
                        name: 'Shell',
                        zip: '92126',
                        logo: null,
                        region: 'California',
                        distance: '2.1 miles',
                        address: '11205 Camino Ruiz',
                        prices: {
                            regular: '3.83',
                            medium: '4.07',
                            premium: '4.11',
                            diesel: 'N/A'
                        }
                    }]
            };
            const modelGasStations = stations.map(x => new GasStationModel(x));
            resolve(modelGasStations);
        }, 1250);
    });
    //const modelGasStations = stations.map(x => new GasStationModel(x));
    //return modelGasStations;
}