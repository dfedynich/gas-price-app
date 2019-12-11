import apiConfig from './api.config';

export async function fetchApi({endPoint}) {
    const response = await fetch(`${apiConfig.url}${endPoint}`);
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong ...');
    }
};