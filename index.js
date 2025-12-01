const app = require('./app');
const config = require('./config');
const connectDB = require('./database/config');

// Connect to Database
connectDB();

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
