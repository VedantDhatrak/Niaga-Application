import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';


const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" style={styles.titleIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.circle}>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.buttonText}>Log-Out</Text>
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
    marginTop: 80,
  },
  header: {
    flexDirection: "column",
    // backgroundColor:'green' 
  },
  titleIcon: { padding: 10, position: 'absolute' },
  circle: {
    height: 150,
    width: 150, backgroundColor: 'black',
    borderRadius: 100, position: 'absolute',
    zIndex: 1,
    top: 10,
    left: 130,
    // borderColor:'red',borderWidth:2
  },

  customButton: {
    marginTop: 490,
    backgroundColor: '#FF3C00',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
