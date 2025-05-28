import React, { useState } from 'react';
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
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

const products = [
  {
    id: '1',
    name: 'Harness Unisex Long Sleeve',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '2',
    name: 'Harness Men Shirt',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '3',
    name: 'Harness Men Collar',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
  {
    id: '4',
    name: 'Harness Men Hoodie',
    price: '$2000',
    rating: 4.9,
    image: mainBanner,
  },
];

const ProductsScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  const [search, setSearch] = useState('');
  const [slideAnim] = useState(new Animated.Value(Dimensions.get('window').height));

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
      <View style={styles.filterRow}>
        {filters.map(f => (
          <TouchableOpacity key={f.key} style={styles.filterChip}>
            <Text style={styles.filterChipText}>{f.label}</Text>
            <Ionicons name="chevron-down" size={14} color="#FE320A" style={{ marginLeft: 2 }} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryRow}>
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
      </View>

      {/* Products Grid in ScrollView */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.productsGrid}>
          {products.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              onPress={() => handleProductPress(item)}
            >
              <Image source={item.image} style={styles.productImg} />
              <TouchableOpacity style={styles.heartBtn}>
                <Ionicons name="heart-outline" size={20} color="#FE320A" />
              </TouchableOpacity>
              <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.ratingBox}>
                  <Ionicons name="star" size={14} color="#FFD700" />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
});

export default ProductsScreen; 