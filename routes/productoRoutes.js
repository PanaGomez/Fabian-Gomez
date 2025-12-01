const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.post('/productos', productoController.create);
router.get('/productos', productoController.getAll);
router.get('/productos/:id', productoController.getById);
router.get('/albums/csv', productoController.getAlbumsCsv);

// Protected routes
router.put('/productos/:id', authMiddleware, productoController.update);
router.delete('/productos/:id', authMiddleware, productoController.delete);

module.exports = router;
