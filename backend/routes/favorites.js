const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Favorite = require('../models/Favorite');
const Product = require('../models/Product');

// Get all favorites for a user
router.get('/', auth, async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.user.id })
            .populate('product');
        res.json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a product to favorites
router.post('/:productId', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const favorite = new Favorite({
            user: req.user.id,
            product: req.params.productId
        });

        await favorite.save();
        res.status(201).json(favorite);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: 'Product already in favorites' });
        }
        res.status(500).json({ message: err.message });
    }
});

// Remove a product from favorites
router.delete('/:productId', auth, async (req, res) => {
    try {
        const favorite = await Favorite.findOneAndDelete({
            user: req.user.id,
            product: req.params.productId
        });

        if (!favorite) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        res.json({ message: 'Product removed from favorites' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 