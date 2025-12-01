const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async () => {
    if (config.dbProvider !== 'mongo') {
        console.log('Skipping MongoDB connection (DB_PROVIDER is not mongo)');
        return;
    }

    try {
        await mongoose.connect(config.mongoUri);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
