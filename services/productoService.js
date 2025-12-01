const productoRepository = require('../repository/productoRepositoryMongo');

class ProductoService {
    async createProducto(data) {
        return await productoRepository.create(data);
    }

    async getAllProductos() {
        return await productoRepository.getAll();
    }

    async getProductoById(id) {
        return await productoRepository.getById(id);
    }

    async updateProducto(id, data) {
        // Validar incremento mínimo de stock si se actualiza stockAmount
        if (data.stockAmount !== undefined) {
            const productoActual = await productoRepository.getById(id);
            if (!productoActual) {
                throw new Error('Producto no encontrado');
            }
            
            const incremento = data.stockAmount - productoActual.stockAmount;
            
            // Si hay incremento, debe ser mínimo de 1
            if (incremento > 0 && incremento < 1) {
                throw new Error('El incremento mínimo de stock es 1');
            }
            
            // Validar que el nuevo valor sea >= 0
            if (data.stockAmount < 0) {
                throw new Error('El stockAmount no puede ser negativo');
            }
        }

        return await productoRepository.update(id, data);
    }

    async deleteProducto(id) {
        return await productoRepository.delete(id);
    }
}

module.exports = new ProductoService();
