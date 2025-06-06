import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ordersApi } from '../services/api';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [selected, setSelected] = useState('card');
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!address.trim()) {
      Alert.alert('Error', 'Please enter your shipping address');
      return;
    }

    try {
      setLoading(true);
      const response = await ordersApi.create({
        street: address,
        city: 'Default City', // You might want to add more address fields
        state: 'Default State',
        zipCode: '00000',
        country: 'Default Country'
      });

      Alert.alert(
        'Success',
        'Your order has been placed successfully!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Orders');
            }
          }
        ]
      );
    } catch (error) {
      console.error('Checkout error:', error.response?.data || error.message);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Failed to process your order. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 28 }} />
      </View>
      
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <View style={styles.card}>
            <TextInput
              style={styles.addressInput}
              value={address}
              onChangeText={setAddress}
              placeholder="Enter your address"
              placeholderTextColor="#aaa"
              multiline
            />
          </View>

          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity 
            style={[styles.card, selected === 'card' && styles.selected]} 
            onPress={() => setSelected('card')}
          >
            <Ionicons name="card-outline" size={24} color={selected === 'card' ? '#FE320A' : '#333'} />
            <Text style={styles.cardText}>Credit/Debit Card</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.card, selected === 'paypal' && styles.selected]} 
            onPress={() => setSelected('paypal')}
          >
            <Ionicons name="logo-paypal" size={24} color={selected === 'paypal' ? '#FE320A' : '#333'} />
            <Text style={styles.cardText}>PayPal</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.card, selected === 'cod' && styles.selected]} 
            onPress={() => setSelected('cod')}
          >
            <Ionicons name="cash-outline" size={24} color={selected === 'cod' ? '#FE320A' : '#333'} />
            <Text style={styles.cardText}>Cash on Delivery</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>3 items</Text>
            <Text style={styles.cardText}>Total: $537.00</Text>
          </View>
        </ScrollView>
        
        <TouchableOpacity 
          style={[styles.checkoutButton, loading && styles.checkoutButtonDisabled]} 
          onPress={handleCheckout}
          disabled={loading}
        >
          <Text style={styles.checkoutText}>
            {loading ? 'PROCESSING...' : 'PLACE ORDER'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FE320A',
    marginTop: 20,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  selected: {
    borderWidth: 2,
    borderColor: '#FE320A',
  },
  cardText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
  },
  addressInput: {
    flex: 1,
    color: '#333',
    fontSize: 15,
    minHeight: 40,
    padding: 0,
    backgroundColor: 'transparent',
  },
  checkoutButton: {
    backgroundColor: '#FE320A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonDisabled: {
    backgroundColor: '#ccc',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CheckoutScreen; 