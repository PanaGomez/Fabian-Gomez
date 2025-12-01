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
        // Business logic: increment minimum is 1 if updating stockAmount specifically?
        // Requirement says: "Al incrementar stock (updateStock): el incremento mínimo es 1"
        // But here we are doing a general update. If stockAmount is present, we should check it?
        // The requirement is a bit ambiguous if it means "adding to existing" or "setting new value".
        // "Al incrementar stock (updateStock)" sounds like a specific action, but the endpoint is PUT /:id which usually means replace/update fields.
        // I will assume standard update validation handled by Mongoose min:0.
        // If specific logic is needed for "increment", it might be a separate method or interpreted here.
        // Given "PUT /api/v1/productos/:id Edita campos del producto", I will stick to standard update.

        return await productoRepository.update(id, data);
    }

    async deleteProducto(id) {
        return await productoRepository.delete(id);
    }
}

module.exports = new ProductoService();
