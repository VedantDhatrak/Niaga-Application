import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const productImg = require('../../assets/images/product.png');

const ProductZoomScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params?.product || {
    name: 'FORD GT40 MKI - LE MANS - WINNER',
    price: '$220.0',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={28} color="#222" />
      </TouchableOpacity>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.scale}>Scale : 1:18</Text>
      <View style={styles.imageWrap}>
        <Image source={productImg} style={styles.productImg} />
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7C88C',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  closeBtn: {
    position: 'absolute',
    top: 48,
    right: 24,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
    zIndex: 2,
  },
  productName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
    marginTop: 10,
  },
  scale: {
    color: '#555',
    fontSize: 13,
    marginBottom: 10,
    textAlign: 'center',
  },
  imageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  productImg: {
    width: 320,
    height: 180,
    borderRadius: 18,
    backgroundColor: '#fff',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#22223B',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingVertical: 24,
  },
  price: {
    color: '#F7C88C',
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default ProductZoomScreen; 