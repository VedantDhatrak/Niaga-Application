const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    }
}, { timestamps: true });

// Ensure a user can't have duplicate products in cart
cartSchema.index({ user: 1, product: 1 }, { unique: true });

module.exports = mongoose.model('Cart', cartSchema); 