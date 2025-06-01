const Product = require('../models/Product');

const sampleProducts = [
    {
        name: "Vintage Car Model",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.5,
        category: "models",
        description: "Detailed 3D model of a classic vintage car, perfect for collectors and enthusiasts.",
        scale: "1:24",
        brand: "ModelCraft",
        period: "1950s",
        year: "1957",
        country: "USA",
        discount: "0%"
    },
    {
        name: "Steampunk Airship",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.8,
        category: "models",
        description: "Intricate steampunk airship model with moving parts and detailed interior.",
        scale: "1:32",
        brand: "SteamWorks",
        period: "Victorian",
        year: "1890",
        country: "UK",
        discount: "10%"
    },
    {
        name: "Ancient Temple",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.7,
        category: "models",
        description: "Majestic ancient temple model with detailed architectural elements and weathering effects.",
        scale: "1:100",
        brand: "AncientCraft",
        period: "Ancient",
        year: "500 BC",
        country: "Greece",
        discount: "0%"
    },
    {
        name: "Futuristic City",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.9,
        category: "models",
        description: "Stunning futuristic cityscape with glowing elements and modular buildings.",
        scale: "1:500",
        brand: "FutureTech",
        period: "Future",
        year: "2150",
        country: "Japan",
        discount: "15%"
    },
    {
        name: "Medieval Castle",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.6,
        category: "models",
        description: "Detailed medieval castle with working drawbridge and interior rooms.",
        scale: "1:72",
        brand: "MedievalCraft",
        period: "Medieval",
        year: "1200",
        country: "France",
        discount: "0%"
    },
    {
        name: "Space Station",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.8,
        category: "models",
        description: "Modular space station with detachable modules and LED lighting.",
        scale: "1:144",
        brand: "SpaceTech",
        period: "Future",
        year: "2100",
        country: "International",
        discount: "5%"
    },
    {
        name: "Dinosaur Skeleton",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.7,
        category: "models",
        description: "Detailed T-Rex skeleton model with poseable joints and base.",
        scale: "1:35",
        brand: "DinoCraft",
        period: "Prehistoric",
        year: "65M BC",
        country: "USA",
        discount: "0%"
    },
    {
        name: "Japanese Garden",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.9,
        category: "models",
        description: "Peaceful Japanese garden with miniature trees, pond, and traditional elements.",
        scale: "1:48",
        brand: "ZenCraft",
        period: "Traditional",
        year: "1600",
        country: "Japan",
        discount: "10%"
    },
    {
        name: "Steam Locomotive",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.8,
        category: "models",
        description: "Detailed steam locomotive with working parts and realistic weathering.",
        scale: "1:87",
        brand: "TrainCraft",
        period: "Industrial",
        year: "1880",
        country: "UK",
        discount: "0%"
    },
    {
        name: "Underwater City",
        price: 64.99,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3",
        rating: 4.9,
        category: "models",
        description: "Futuristic underwater city with glowing elements and transparent domes.",
        scale: "1:200",
        brand: "AquaTech",
        period: "Future",
        year: "2200",
        country: "International",
        discount: "20%"
    }
];

const seedProducts = async () => {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');
        
        // Insert new products
        const insertedProducts = await Product.insertMany(sampleProducts);
        console.log(`Successfully inserted ${insertedProducts.length} products`);
        
        // Verify products were inserted
        const count = await Product.countDocuments();
        console.log(`Total products in database: ${count}`);
        
        // Log first few products to verify
        const firstFew = await Product.find().limit(3);
        console.log('First few products:', firstFew);
        
        return insertedProducts;
    } catch (error) {
        console.error('Error seeding products:', error);
        throw error;
    }
};

module.exports = seedProducts; 