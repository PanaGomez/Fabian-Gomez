const productoService = require('../services/productoService');
const albumsService = require('../services/albumsService');

class ProductoController {
    async create(req, res) {
        try {
            const producto = await productoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(400).json({ statusCode: 400, error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const productos = await productoService.getAllProductos();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({ statusCode: 500, error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const producto = await productoService.getProductoById(req.params.id);
            if (!producto) {
                return res.status(404).json({ statusCode: 404, error: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ statusCode: 500, error: error.message });
        }
    }

    async update(req, res) {
        try {
            const producto = await productoService.updateProducto(req.params.id, req.body);
            if (!producto) {
                return res.status(404).json({ statusCode: 404, error: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(400).json({ statusCode: 400, error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const producto = await productoService.deleteProducto(req.params.id);
            if (!producto) {
                return res.status(404).json({ statusCode: 404, error: 'Producto no encontrado' });
            }
            res.status(200).json({ message: 'Producto eliminado' });
        } catch (error) {
            res.status(500).json({ statusCode: 500, error: error.message });
        }
    }

    async getAlbumsCsv(req, res) {
        try {
            const csv = await albumsService.getAlbumsCsv();
            res.header('Content-Type', 'text/csv');
            res.attachment('albums_15.csv');
            res.send(csv);
        } catch (error) {
            res.status(500).json({ statusCode: 500, error: 'Error generando CSV' });
        }
    }
}

module.exports = new ProductoController();
