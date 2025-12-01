const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', productoRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ statusCode: 404, error: 'Ruta no encontrada' });
});

module.exports = app;
