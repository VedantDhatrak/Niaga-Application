import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { cartApi, checkToken } from '../services/api';

const CartScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      loadCart();
    }, [])
  );

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const loadCart = async () => {
    try {
      setLoading(true);
      const hasToken = await checkToken();
      console.log('Has token:', hasToken); // Debug log
      
      if (!hasToken) {
        Alert.alert('Error', 'Please login to view cart');
        setLoading(false);
        return;
      }

      console.log('Loading cart...'); // Debug log
      const response = await cartApi.getAll();
      console.log('Cart response:', response.data); // Debug log
      setCartItems(response.data);
    } catch (error) {
      console.log('Cart error:', error.response?.status, error.response?.data); // Debug log
      if (error.response?.status === 401) {
        Alert.alert('Error', 'Please login to view cart');
      } else {
        Alert.alert('Error', error.response?.data?.message || 'Failed to load cart items');
      }
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    const sum = cartItems.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);
    setTotal(sum);
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      await cartApi.updateQuantity(productId, newQuantity);
      setCartItems(cartItems.map(item => 
        item.product._id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    } catch (error) {
      if (error.response?.status === 401) {
        Alert.alert('Error', 'Please login to update cart');
      } else {
        Alert.alert('Error', error.response?.data?.message || 'Failed to update quantity');
      }
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await cartApi.remove(productId);
      setCartItems(cartItems.filter(item => item.product._id !== productId));
    } catch (error) {
      if (error.response?.status === 401) {
        Alert.alert('Error', 'Please login to remove items');
      } else {
        Alert.alert('Error', error.response?.data?.message || 'Failed to remove item from cart');
      }
    }
  };

  const CartItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.product.image }} style={styles.productImage} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.productPrice}>${item.product.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => handleUpdateQuantity(item.product._id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Ionicons name="remove" size={20} color={item.quantity <= 1 ? "#ccc" : "#FF3C00"} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity 
            style={styles.quantityButton}
            onPress={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
          >
            <Ionicons name="add" size={20} color="#FF3C00" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleRemoveItem(item.product._id)}
      >
        <Ionicons name="trash-outline" size={24} color="#FF3C00" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          {loading ? (
            <Text style={styles.loadingText}>Loading...</Text>
          ) : cartItems.length === 0 ? (
            <Text style={styles.emptyText}>Your cart is empty</Text>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))
          )}
        </ScrollView>

        {/* Total and Checkout */}
        {!loading && cartItems.length > 0 && (
          <View style={styles.checkoutContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity 
              style={styles.checkoutButton} 
              onPress={() => navigation.navigate('Checkout')}
            >
              <Text style={styles.checkoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE3C1',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 15,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#FF3C00',
    fontWeight: '500',
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  deleteButton: {
    padding: 8,
  },
  checkoutContainer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 70,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3C00',
  },
  checkoutButton: {
    backgroundColor: '#FF3C00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
});

export default CartScreen;
