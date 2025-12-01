const Producto = require('../models/producto');

class ProductoRepositoryMongo {
    async create(data) {
        const producto = new Producto(data);
        return await producto.save();
    }

    async getAll() {
        return await Producto.find();
    }

    async getById(id) {
        return await Producto.findById(id);
    }

    async update(id, data) {
        return await Producto.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async delete(id) {
        return await Producto.findByIdAndDelete(id);
    }
}

module.exports = new ProductoRepositoryMongo();
