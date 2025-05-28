// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons, Feather } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const productImg = require('../../assets/images/product.png');

// const ProductDetailScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const product = route.params?.product || {
//     name: 'FORD GT40 MKI - LE MANS - WINNER',
//     price: '$220.0',
//     description: 'Named as GT or Grand Touring car, the Ford made GT 40 were produced in the UK and was based on the British made Lola MK6 model with inputs from John ...',
//     scale: '1:18',
//     brand: 'Ford',
//     period: '1947-1970',
//     year: '1966',
//     country: 'USA',
//     rating: 4.5,
//     discount: '15% off',
//   };

//   return (
//     <View style={styles.container}>
//       {/* Top Section */}
//       <View style={styles.topSection}>
//         {/* Left icons */}
//         <View style={styles.leftIcons}>
//           <TouchableOpacity style={styles.iconBtn}>
//             <Ionicons name="heart-outline" size={22} color="#FE320A" />
//           </TouchableOpacity>
//           <View style={styles.ratingBox}>
//             <Ionicons name="star" size={16} color="#FFD700" />
//             <Text style={styles.rating}>{product.rating}</Text>
//           </View>
//         </View>
//         {/* Discount badge */}
//         <View style={styles.discountBadge}>
//           <Text style={styles.discountText}>{product.discount}</Text>
//         </View>
//         {/* Product image with zoom */}
//         <View style={styles.imageWrap}>
//           <Image source={productImg} style={styles.productImg} />
//           <TouchableOpacity style={styles.zoomBtn} onPress={() => navigation.navigate('ProductZoomScreen', { product })}>
//             <Feather name="zoom-in" size={22} color="#fff" />
//           </TouchableOpacity>
//         </View>
//         {/* Price */}
//         <View style={styles.priceWrap}>
//           <Text style={styles.price}>{product.price}</Text>
//           <Text style={styles.priceLabel}>Price</Text>
//         </View>
//         {/* Back button */}
//         <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#222" />
//         </TouchableOpacity>
//       </View>
//       {/* Bottom Section */}
//       <View style={styles.bottomSection}>
//         <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.scale}>Scale : {product.scale}</Text>
//           <Text style={styles.description}>{product.description}</Text>
//           <Text style={styles.specsTitle}>Specifications</Text>
//           <View style={styles.specsRow}>
//             <View style={styles.specCol}><Text style={styles.specLabel}>Brand</Text><Text style={styles.specValue}>{product.brand}</Text></View>
//             <View style={styles.specCol}><Text style={styles.specLabel}>Period</Text><Text style={styles.specValue}>{product.period}</Text></View>
//           </View>
//           <View style={styles.specsRow}>
//             <View style={styles.specCol}><Text style={styles.specLabel}>Year</Text><Text style={styles.specValue}>{product.year}</Text></View>
//             <View style={styles.specCol}><Text style={styles.specLabel}>Country</Text><Text style={styles.specValue}>{product.country}</Text></View>
//           </View>
//         </ScrollView>
//         <View style={styles.bottomBar}>
//           <TouchableOpacity style={styles.cartBtn}>
//             <Text style={styles.cartBtnText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <View style={styles.bottomPriceBox}>
//             <Text style={styles.bottomPrice}>{product.price}</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F7C88C',
//   },
//   topSection: {
//     flex: 1.1,
//     backgroundColor: '#F7C88C',
//     borderBottomLeftRadius: 60,
//     borderBottomRightRadius: 60,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     position: 'relative',
//     paddingBottom: 0,
//   },
//   leftIcons: {
//     position: 'absolute',
//     left: 24,
//     top: 60,
//     alignItems: 'center',
//     zIndex: 2,
//   },
//   iconBtn: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 8,
//     marginBottom: 12,
//     elevation: 2,
//   },
//   ratingBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 14,
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     elevation: 2,
//   },
//   rating: {
//     marginLeft: 4,
//     color: '#222',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   discountBadge: {
//     position: 'absolute',
//     top: 60,
//     right: 32,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 2,
//     zIndex: 2,
//     elevation: 2,
//   },
//   discountText: {
//     color: '#FE320A',
//     fontWeight: 'bold',
//     fontSize: 13,
//   },
//   imageWrap: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//     width: '100%',
//   },
//   productImg: {
//     width: 260,
//     height: 130,
//     borderRadius: 18,
//     backgroundColor: '#fff',
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 0,
//   },
//   zoomBtn: {
//     position: 'absolute',
//     right: 60,
//     bottom: 10,
//     backgroundColor: '#FE320A',
//     borderRadius: 20,
//     padding: 8,
//     zIndex: 2,
//     elevation: 2,
//   },
//   priceWrap: {
//     alignItems: 'center',
//     marginTop: 8,
//     marginBottom: 10,
//   },
//   price: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#222',
//   },
//   priceLabel: {
//     color: '#888',
//     fontSize: 13,
//     marginTop: -4,
//   },
//   backBtn: {
//     position: 'absolute',
//     top: 60,
//     left: 24,
//     zIndex: 3,
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 6,
//     elevation: 2,
//     opacity: 0, // visually hidden, use left icons for back
//   },
//   bottomSection: {
//     flex: 1.2,
//     backgroundColor: '#22223B',
//     borderTopLeftRadius: 60,
//     borderTopRightRadius: 60,
//     marginTop: -60,
//     paddingTop: 36,
//     paddingHorizontal: 24,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   scale: {
//     color: '#F7C88C',
//     fontSize: 13,
//     marginBottom: 8,
//   },
//   description: {
//     color: '#fff',
//     fontSize: 14,
//     marginBottom: 16,
//   },
//   specsTitle: {
//     color: '#F7C88C',
//     fontWeight: 'bold',
//     fontSize: 15,
//     marginBottom: 8,
//   },
//   specsRow: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   specCol: {
//     flex: 1,
//   },
//   specLabel: {
//     color: '#F7C88C',
//     fontSize: 13,
//   },
//   specValue: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   bottomBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F7C88C',
//     borderRadius: 16,
//     padding: 10,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   cartBtn: {
//     flex: 1,
//     backgroundColor: '#FE320A',
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   cartBtnText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   bottomPriceBox: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 18,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   bottomPrice: {
//     color: '#FE320A',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
// });

// export default ProductDetailScreen; 



import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';



const ProductDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params?.product || {
    name: 'FORD GT40 MKI - LE MANS - WINNER',
    price: '$220.0',
    description: 'Named as GT or Grand Touring car, the Ford made GT 40 were produced in the UK and was based on the British made Lola MK6 model with inputs from John ...',
  };
  return (
    <View style={styles.container}>
      {/* Upper Card */}
      <View style={styles.upperCard}>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>15% off</Text>
          <TouchableOpacity style={styles.zoomBtn} onPress={() => navigation.navigate('ProductZoomScreen', { product })}>
             <Feather name="zoom-in" size={22} color="#fff" />
           </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://i.ibb.co/tqYXnL6/ford-gt.png' }}
          style={styles.carImage}
          resizeMode="contain"
        />
        <Text style={styles.price}>$ 220.0</Text>
      </View>

      {/* Lower Card */}
      <View style={styles.lowerCard}>
        <View style={styles.iconsRow}>
          <AntDesign name="heart" size={18} color="hotpink" style={styles.icon} />
          <FontAwesome name="tree" size={18} color="green" style={styles.icon} />
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.title}>FORD GT40 MKI - LE MANS - WINNER</Text>
        <Text style={styles.scale}>Scale : 1:18</Text>
        <Text style={styles.description}>
          Named as 'GT' or Grand Touring car, the Ford made GT 40 were produced in the UK and was based on the
          British made Lola MK6 model with inputs from John...
        </Text>

        <Text style={styles.specTitle}>Specifications</Text>

        <View style={styles.specRow}>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>Ford</Text>
            <Text style={styles.specLabel}>BRAND</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>1947-1970</Text>
            <Text style={styles.specLabel}>PERIOD</Text>
          </View>
        </View>
        <View style={styles.specRow}>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>1966</Text>
            <Text style={styles.specLabel}>SCALE</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specValue}>USA</Text>
            <Text style={styles.specLabel}>MATERIAL</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to Cart</Text>
          <Text style={styles.cartPrice}>$ 220.0</Text>
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
});

export default ProductDetailScreen;
