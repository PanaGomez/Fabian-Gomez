const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    producto: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    stockAmount: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    fechaIngreso: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});

module.exports = mongoose.model('Producto', productoSchema);
