'use strict';
jest.mock('node-fetch');
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');
import {fetchApi} from './fetchApi';

beforeAll(() => {
    global.fetch = fetch;
});

afterAll(() => {
   fetch.mockRestore();
});

describe('#fetchApi', () => {
    beforeEach(() => {
        fetch.mockReset();
    });

    test('should return ok status and json body', async function () {
        const json = {id: 1};
        fetch.mockResolvedValueOnce(new Response(JSON.stringify(json)));
        const result = await fetchApi({endPoint:''});
        expect(result).toEqual(json);
    });

    test('should throw an Error if response is not ok', async function () {
        fetch.mockResolvedValueOnce(new Response(JSON.stringify({message: 'Error'}), {status: 404}));
        //const test = await fetchApi({endPoint:''});
        //console.log(test);
        await expect(fetchApi({endPoint:''})).rejects.toThrow('Something went wrong');
    });
});


