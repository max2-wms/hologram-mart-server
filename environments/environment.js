let environment;

switch ( process.env.NODE_ENV ) {
    case 'dev'      :   environment = {
                            MongoDB_URL: 'mongodb://localhost:27017'
                        };
                        break;

    case 'docker'   :   environment = {
                            MongoDB_URL: 'mongodb://db:27017'
                        };
                        break;

    default         :   environment = {
                            MongoDB_URL: 'mongodb://localhost:27017'
                        };
                        break;
}

environment.portNumber = 63145;
environment.dbName = 'tsn2';

module.exports = environment;