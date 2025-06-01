import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { productsApi, favoritesApi, cartApi } from '../services/api';

const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const response = await productsApi.getById(route.params?.product?._id);
      setProduct(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      await favoritesApi.add(product._id);
      setIsFavorite(true);
      Alert.alert('Success', 'Product added to favorites');
    } catch (error) {
      if (error.response?.status === 401) {
        Alert.alert('Error', 'Please login to add favorites');
      } else {
        Alert.alert('Error', error.response?.data?.message || 'Failed to add to favorites');
      }
    }
  };

  const handleAddToCart = async () => {
    try {
      await cartApi.add(product._id, 1);
      Alert.alert('Success', 'Product added to cart');
    } catch (error) {
      if (error.response?.status === 401) {
        Alert.alert('Error', 'Please login to add to cart');
      } else {
        Alert.alert('Error', error.response?.data?.message || 'Failed to add to cart');
      }
    }
  };

  if (loading || !product) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Upper Card */}
      <View style={styles.upperCard}>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>{product.discount}</Text>
          <TouchableOpacity style={styles.zoomBtn} onPress={() => navigation.navigate('ProductZoomScreen', { product })}>
            <Feather name="zoom-in" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: product.image }}
          style={styles.carImage}
          resizeMode="contain"
        />
        <Text style={styles.price}>$ {product.price}</Text>
      </View>

      {/* Lower Card */}
      <View style={styles.lowerCard}>
        <View style={styles.iconsRow}>
          <TouchableOpacity onPress={handleAddToFavorites}>
            <AntDesign 
              name={isFavorite ? "heart" : "hearto"} 
              size={18} 
              color={isFavorite ? "hotpink" : "#fff"} 
              style={styles.icon} 
            />
          </TouchableOpacity>
          <FontAwesome name="tree" size={18} color="green" style={styles.icon} />
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>
        </View>

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.scale}>Scale : {product.scale}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <Text style={styles.specTitle}>Specifications</Text>

        <View style={styles.specRow}>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{product.brand}</Text>
            <Text style={styles.specLabel}>BRAND</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{product.period}</Text>
            <Text style={styles.specLabel}>PERIOD</Text>
          </View>
        </View>
        <View style={styles.specRow}>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{product.year}</Text>
            <Text style={styles.specLabel}>YEAR</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>{product.country}</Text>
            <Text style={styles.specLabel}>COUNTRY</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.cartText}>Add to Cart</Text>
          <Text style={styles.cartPrice}>$ {product.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    padding: 10,
  },
  upperCard: {
    backgroundColor: '#f4c28f',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  discountTag: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  carImage: {
    width: 180,
    height: 100,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  lowerCard: {
    backgroundColor: '#1b263b',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 15,
  },
  iconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 15,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#fff',
    marginLeft: 5,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scale: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 6,
  },
  description: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 10,
  },
  specTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  specItem: {
    flex: 1,
    alignItems: 'center',
  },
  specValue: {
    color: '#fff',
    fontWeight: 'bold',
  },
  specLabel: {
    color: '#ccc',
    fontSize: 11,
  },
  cartButton: {
    backgroundColor: '#f4c28f',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  cartText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartPrice: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
  },
});

export default ProductDetailScreen;
