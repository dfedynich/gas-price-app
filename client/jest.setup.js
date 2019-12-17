require('dotenv').config({ path: './.env.example' });

if(process.env.TEST_ENV !== 'unit') {
    console.log('GLOBAL FETCH');
    global.fetch = require('node-fetch');
}