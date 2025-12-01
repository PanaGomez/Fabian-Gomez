require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    dbProvider: process.env.DB_PROVIDER || 'mongo',
    mongoUri: process.env.MONGO_URI,
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET
};
