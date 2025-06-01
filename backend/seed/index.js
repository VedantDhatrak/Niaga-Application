const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedProducts = require('./products');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/niagaMobile', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected');
    return seedProducts();
})
.then(() => {
    console.log('Seeding completed');
    process.exit(0);
})
.catch(err => {
    console.error('Error:', err);
    process.exit(1);
}); 