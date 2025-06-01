const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get all cart items for a user
router.get('/', auth, async (req, res) => {
    try {
        const cartItems = await Cart.find({ user: req.user._id })
            .populate('product');
        res.json(cartItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add or update a product in cart
router.post('/:productId', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const quantity = req.body.quantity || 1;

        const cartItem = await Cart.findOneAndUpdate(
            { user: req.user._id, product: req.params.productId },
            { quantity },
            { new: true, upsert: true }
        );

        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update quantity of a cart item
router.patch('/:productId', auth, async (req, res) => {
    try {
        const { quantity } = req.body;
        if (!quantity || quantity < 1) {
            return res.status(400).json({ message: 'Invalid quantity' });
        }

        const cartItem = await Cart.findOneAndUpdate(
            { user: req.user._id, product: req.params.productId },
            { quantity },
            { new: true }
        );

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove a product from cart
router.delete('/:productId', auth, async (req, res) => {
    try {
        const cartItem = await Cart.findOneAndDelete({
            user: req.user._id,
            product: req.params.productId
        });

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.json({ message: 'Product removed from cart' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 