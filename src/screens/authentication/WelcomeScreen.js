import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.overlay}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>N</Text>
          </View>
          <Text style={styles.title}>HOPE FOR HUMANITY</Text>
          <Text style={styles.subtitle}>Welcome to Niaga</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.link}>Get Started</Text>
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
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  overlay: {
    alignItems: 'center',
    marginTop: '50%',
  },
  logo: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  link: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

// //welcomeScreen
// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// const WelcomeScreen = () => {
//   return (
//     <ImageBackground
//       // source={require('../../assets/images/mainBanner.webp')}
//       source={require('../../../assets/background.jpg')}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}>
//         <View style={styles.logo}>
//           <Text style={styles.logoText}>N</Text>
//         </View>
//         <Text style={styles.title}>HOPE FOR HUMANITY</Text>
//         <Text style={styles.subtitle}>Welcome to Niaga</Text>
//       </View>
//       <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.link}>SIGN IN</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   overlay: {
//     flex: 1,
//     // backgroundColor: 'rgba(0, 128, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginBottom: 10,
//   },
//   logoText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     // color: 'green',
//   },
//   title: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default WelcomeScreen;
