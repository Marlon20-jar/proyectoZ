require('dotenv').config();

export default{ 
SECRET: 'repositorio-api'
};

const config = {
    appConfig: {
    host: process.env.APP_HOST,
    port: process.env.PORT 
    }
};

module.exports = config