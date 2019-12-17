# gas-price-app
The Gas Price App displays a list of local gas stations and their prices

## Install

    $ git clone https://github.com/dfedynich/gas-price-app.git
    $ cd gas-price-app
    $ cd server
    $ npm install
    $ cd ..
    $ cd client
    $ npm install
    $ cd ..
    
## Start & watch

    $ npm start

## Simple build for production

    $ npm run build
    $ npm run server
    $ cd client
    $ npx http-server dist -p 8080 -o