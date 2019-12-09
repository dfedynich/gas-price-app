const app = require('../../app');
const request = require('supertest');

describe('Error handling', () => {
    let server;
    beforeEach(() => {
        app.use(async function() {
            throw new Error('Boom');
        });
        server = app.listen(3000);
    });

    afterEach(() => {
        server.close();
    });

    test('Should catch the error', async () => {
        const response = await request(server).get('/error');
        expect(response.status).toEqual(500);
        expect(response.body).toEqual({
            status: "failed",
            message: "Boom"
        });
    });
});