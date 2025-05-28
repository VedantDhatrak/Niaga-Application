// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [agree, setAgree] = useState(false);

  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>N</Text>
        </View>
        <Text style={styles.header}>Create your account</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          placeholderTextColor="#666"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          keyboardType="email-address" 
          placeholderTextColor="#666"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          secureTextEntry 
          placeholderTextColor="#666"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm password" 
          secureTextEntry 
          placeholderTextColor="#666"
        />

        <View style={styles.checkboxContainer}>
          {/* <CheckBox value={agree} onValueChange={setAgree} /> */}
          {/* <Text style={styles.checkboxLabel}> I understand T&Cs & policy.</Text> */}
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>

        {/* <Text style={styles.orText}>or sign up with</Text> */}
        <View style={styles.socials}>
          {/* <Image source={require('./assets/google.png')} style={styles.icon} />
          <Image source={require('./assets/facebook.png')} style={styles.icon} />
          <Image source={require('./assets/twitter.png')} style={styles.icon} /> */}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.footerText}>
            Have an account? <Text style={styles.link}>SIGN IN</Text>
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: '#FFE3C1',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 100,
  },
  logo: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FE320A',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    color: '#333',
  },
  signUpButton: {
    backgroundColor: '#FE320A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#777',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  link: {
    color: '#FE320A',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
