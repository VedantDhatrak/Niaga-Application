import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={60} color="#fff" />
        </View>
        <Text style={styles.successText}>Order Successfully Booked!</Text>
        <Text style={styles.infoText}>Thank you for your purchase. Your order is being processed.</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.homeButtonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,227,193,0.95)',
    padding: 20,
  },
  checkCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FE320A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FE320A',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  homeButton: {
    backgroundColor: '#FE320A',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: 200,
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OrderSuccessScreen; 