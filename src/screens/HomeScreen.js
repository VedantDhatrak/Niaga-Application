import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation, CommonActions } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    console.log('Back button pressed - attempting navigation');
    try {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        })
      );
      console.log('Navigation reset to Main screen');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* <StatusBar barStyle="light-content" backgroundColor="#000" /> */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <Pressable 
          onPress={handleBackPress}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed
          ]}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </Pressable>
        <Text style={styles.title}>HOME</Text>
      </View>
              {/* <View style={styles.topBar}>
          <TouchableOpacity><Text style={styles.icon}>←</Text></TouchableOpacity>
          <View style={styles.icons}>
            <Text style={styles.icon}>🛒</Text>
            <Text style={styles.icon}>❤️</Text>
            <Text style={styles.icon}>👤</Text>
          </View>
        </View> */}

      <View style={styles.container}>


        <View style={styles.banner}>
          <Image
            source={require('../../assets/images/mainBanner.webp')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.tabs}>
          <Text style={styles.tab}>NEW LAUNCH</Text>
          <Text style={styles.tab}>PREMIUM</Text>
          <Text style={styles.tab}>TOP SELLER</Text>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.products}>
          <View style={styles.productCard}>
            <View style={styles.productImage} />
            <Text>Product name</Text>
            <Text>product price</Text>
            <Text>product description</Text>
          </View>
          <View style={styles.productCard}>
            <View style={styles.productImage} />
            <Text>Product name</Text>
            <Text>product price</Text>
            <Text>product description</Text>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.buttonText}>CUSTOM</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE3C1',
    padding: 20, 
       borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // marginTop: 20,
  },
  header: {
    flexDirection: "column",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  backButtonPressed: {
    opacity: 0.7,
  },
  titleIcon: {
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#FE320A',    padding: 20, marginTop: 20,
       borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color:'#FE320A', textAlign:'center', marginTop:10,marginBottom:10
  },
  icons: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  banner: {
    backgroundColor: '#C4C4C4',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tab: {
    backgroundColor: '#FF3C00',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  products: {
    gap: 15,
    height:200
  },
  productCard: {
    width: 120,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  productImage: {
    backgroundColor: '#C4C4C4',
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  customButton: {
    marginTop: 20,
    backgroundColor: '#FF3C00',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:50
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  kuchtobhi:{height:20,width:300},
});
