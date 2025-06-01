const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        enum: ['models', 'longsleeve', 'hoodies', 'shortsleeve', 'collar']
    },
    description: {
        type: String,
        required: true
    },
    scale: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        default: '0%'
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema); 