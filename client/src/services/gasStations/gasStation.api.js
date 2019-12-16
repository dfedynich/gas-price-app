import { fetchApi } from '../api/fetchApi';
import GasStationModel from './gasStation.model';

export const endPoints = {
    get: '/gas-stations',
};

export async function getAllByGeo({latitude, longitude}) {
    const endPoint = `${endPoints.get}/lat/${latitude}/long/${longitude}?distance=5&fuelType=reg&sortBy=distance`;
    const { stations } = await fetchApi({endPoint});

    const modelGasStations = stations.map(x => new GasStationModel(x));
    return modelGasStations;
}