import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { productsApi, favoritesApi, cartApi, checkToken } from '../services/api';
import { showSuccessToast, showErrorToast } from '../utils/toast';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const mainBanner = require('../../assets/images/mainBanner.webp');

const categories = [
  { key: 'longsleeve', label: 'Long sleeve', icon: mainBanner },
  { key: 'hoodies', label: 'Hoodies', icon: mainBanner },
  { key: 'shortsleeve', label: 'Short sleeve', icon: mainBanner },
  { key: 'collar', label: 'Collar shirt', icon: mainBanner },
];

const filters = [
  { key: 'size', label: 'Size' },
  { key: 'rating', label: 'Rating' },
  { key: 'color', label: 'Color' },
  { key: 'price', label: 'Price' },
//   { key: 'gender', label: 'Gender' },
];

// Static products for testing
const staticProducts = [
  {
    _id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://i.ibb.co/tqYXnL6/ford-gt.png',
    rating: 4.5,
    category: 'shortsleeve',
    description: 'A comfortable and stylish white t-shirt made from 100% cotton.',
    scale: 'M',
    brand: 'Nike',
    period: '2023',
    year: '2023',
    country: 'USA',
    discount: '10% off'
  },
  {
    _id: '2',
    name: 'Black Hoodie',
    price: 49.99,
    image: 'https://i.ibb.co/tqYXnL6/ford-gt.png',
    rating: 4.8,
    category: 'hoodies',
    description: 'Warm and cozy black hoodie perfect for casual wear.',
    scale: 'L',
    brand: 'Adidas',
    period: '2023',
    year: '2023',
    country: 'Germany',
    discount: '15% off'
  },
  {
    _id: '3',
    name: 'Blue Long Sleeve',
    price: 39.99,
    image: 'https://i.ibb.co/tqYXnL6/ford-gt.png',
    rating: 4.3,
    category: 'longsleeve',
    description: 'Elegant blue long sleeve shirt for formal occasions.',
    scale: 'S',
    brand: 'Ralph Lauren',
    period: '2023',
    year: '2023',
    country: 'UK',
    discount: '5% off'
  },
  {
    _id: '4',
    name: 'Striped Collar Shirt',
    price: 45.99,
    image: 'https://i.ibb.co/tqYXnL6/ford-gt.png',
    rating: 4.6,
    category: 'collar',
    description: 'Classic striped collar shirt for a professional look.',
    scale: 'M',
    brand: 'Tommy Hilfiger',
    period: '2023',
    year: '2023',
    country: 'USA',
    discount: '20% off'
  }
];

const ProductsScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').height));

  useEffect(() => {
    loadProducts();
  }, [selectedCategory, search]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory !== 'all') {
        params.category = selectedCategory;
      }
      if (search) {
        params.search = search;
      }
      console.log('Fetching products with params:', params); // Debug log
      const response = await productsApi.getAll(params);
      console.log('Products API response:', response.data); // Debug log
      setProducts(response.data);
    } catch (error) {
      console.error('Error loading products:', error.response?.data || error.message); // Enhanced error logging
      Alert.alert('Error', 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = async (productId) => {
    try {
      const hasToken = await checkToken();
      if (!hasToken) {
        showErrorToast('Please login to add to favorites');
        return;
      }
      
      await favoritesApi.add(productId);
      showSuccessToast('Product added to favorites');
    } catch (error) {
      console.error('Add to favorites error:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        showErrorToast('Please login to add to favorites');
      } else {
        showErrorToast(error.response?.data?.message || 'Failed to add to favorites');
      }
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const hasToken = await checkToken();
      if (!hasToken) {
        showErrorToast('Please login to add to cart');
        return;
      }
      
      await cartApi.add(productId);
      showSuccessToast('Product added to cart');
    } catch (error) {
      console.error('Add to cart error:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        showErrorToast('Please login to add to cart');
      } else {
        showErrorToast(error.response?.data?.message || 'Failed to add to cart');
      }
    }
  };

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
    return () => {
      // Reset for next open
      slideAnim.setValue(Dimensions.get('window').height);
    };
  }, []);

  const handleBack = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      navigation.goBack();
    });
  };

  const handleProductPress = (item) => {
    navigation.navigate('ProductDetailScreen', { product: item });
  };

  const renderProductCard = (product) => (
    <TouchableOpacity
      key={product._id}
      style={styles.productCard}
      onPress={() => handleProductPress(product)}
    >
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{product.rating}</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.actionButton, styles.favoriteButton]}
            onPress={() => handleAddToFavorites(product._id)}
          >
            <Ionicons name="heart-outline" size={20} color="#FF3C00" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.cartButton]}
            onPress={() => handleAddToCart(product._id)}
          >
            <Ionicons name="cart-outline" size={20} color="#FF3C00" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Animated.View style={[styles.animatedContainer, { transform: [{ translateY: slideAnim }] }]}>  
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Unisex T-shirt"
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.filterBtn}>
          <Feather name="sliders" size={22} color="#FE320A" />
        </TouchableOpacity>
      </View>

      {/* Filter Row */}
      {/* <View style={styles.filterRow}>
        {filters.map(f => (
          <TouchableOpacity key={f.key} style={styles.filterChip}>
            <Text style={styles.filterChipText}>{f.label}</Text>
            <Ionicons name="chevron-down" size={14} color="#FE320A" style={{ marginLeft: 2 }} />
          </TouchableOpacity>
        ))}
      </View> */}

      {/* Category Tabs */}
      {/* <View style={styles.categoryRow}>
        <TouchableOpacity
          style={[styles.categoryTab, selectedCategory === 'all' && styles.categoryTabActive]}
          onPress={() => setSelectedCategory('all')}
        >
          <Text style={[styles.categoryLabel, selectedCategory === 'all' && styles.categoryLabelActive]}>All</Text>
        </TouchableOpacity>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.key}
            style={[styles.categoryTab, selectedCategory === cat.key && styles.categoryTabActive]}
            onPress={() => setSelectedCategory(cat.key)}
          >
            <Image source={cat.icon} style={styles.categoryIcon} />
            <Text style={[styles.categoryLabel, selectedCategory === cat.key && styles.categoryLabelActive]}>{cat.label}</Text>
          </TouchableOpacity>
        ))}
      </View> */}

      {/* Products Grid in ScrollView */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF3C00" />
          </View>
        ) : products.length === 0 ? (
          <Text style={styles.emptyText}>No products found</Text>
        ) : (
          <View style={styles.productsGrid}>
            {products.map(renderProductCard)}
          </View>
        )}
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: '#FFE3C1',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: '#FFE3C1',
  },
  backBtn: {
    marginRight: 8,
    padding: 6,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  filterBtn: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    backgroundColor: '#FFE3C1',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#FE320A',
  },
  filterChipText: {
    color: '#FE320A',
    fontWeight: '600',
    fontSize: 13,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 8,
    backgroundColor: '#FFE3C1',
  },
  categoryTab: {
    alignItems: 'center',
    marginRight: 18,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  categoryTabActive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FE320A',
  },
  categoryIcon: {
    width: 36,
    height: 36,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  categoryLabelActive: {
    color: '#FE320A',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 6,
    padding: 12,
    width: CARD_WIDTH,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    position: 'relative',
  },
  productImg: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
  },
  heartBtn: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
    minHeight: 36,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FE320A',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  rating: {
    fontSize: 13,
    color: '#222',
    marginLeft: 2,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 20,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productInfo: {
    padding: 15,
  },
  productPrice: {
    fontSize: 18,
    color: '#FF3C00',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  favoriteButton: {
    backgroundColor: '#FFF0F0',
  },
  cartButton: {
    backgroundColor: '#FFF0F0',
  },
});

export default ProductsScreen; 