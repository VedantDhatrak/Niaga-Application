import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Text style={styles.title}>NIAGA</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profileIcon}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>

        <Text style={styles.headline}>Sneakers as unique as you{'\n'}Dare to be different{'\n'}Elevate your style</Text>
        <Text style={styles.description}>
          Step up your style game with sneakers that blend comfort, durability, and cutting-edge design. Whether you're hitting the gym or the streets, find the perfect pair to elevate your look and performance!
        </Text>

        <View style={styles.videoBox}>
          <Video
            source={require('../../assets/SneakerEdit.mp4')}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            isLooping
            isMuted
          />
        </View>

        <View style={styles.tags}>
          <Text style={styles.tagText}>Elevate</Text>
          <Text style={styles.dot}>●</Text>
          <Text style={styles.tagText}>Unique</Text>
          <Text style={styles.dot}>●</Text>
          <Text style={styles.tagText}>Dare</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.buttonText}>start shopping</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE3C1',
    padding: 20,
    position: 'relative',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FE320A',
    textAlign: "center", marginTop: 10,
    marginBottom:10
  },
  profileIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  icon: {
    fontSize: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 60,
    lineHeight: 24, paddingVertical: 10,
  },
  description: {
    fontSize: 12,
    marginVertical: 15,
    color: '#333',
    width: 150
  },
  videoBox: {
    height: 200,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tagText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  dot: {
    color: 'red',
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#FF3C00',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor:'#FE320A',marginBottom:200
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
