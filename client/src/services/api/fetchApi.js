import apiConfig from './api.config';

export async function fetchApi({endPoint}) {
    const url = `${apiConfig.apiUrl}${endPoint}`;
    const response = await fetch(url);

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong ...');
    }
};