import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderProcessingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OrderSuccess');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FE320A" />
        <Text style={styles.processingText}>Processing your order...</Text>
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
  },
  processingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#FE320A',
    fontWeight: 'bold',
  },
});

export default OrderProcessingScreen; 