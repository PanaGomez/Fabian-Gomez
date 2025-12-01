const config = require('../config');

const authMiddleware = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const authHeader = req.headers['authorization'];

    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    if (apiKey && apiKey === config.apiKey) {
        return next();
    }

    if (token && token === config.jwtSecret) {
        return next();
    }

    return res.status(401).json({ statusCode: 401, error: 'No autorizado' });
};

module.exports = authMiddleware;
