

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // If you want video, install expo-av
// // import { Video } from 'expo-av'; 

// const MainScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('../../assets/background.jpg')}
//       style={{ flex: 1 }}
//       resizeMode="cover"
//     >
//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>NIAGA</Text>
//         {/* <Image
//           source={require('../../assets/logo.png')}
//           style={styles.logo}
//         /> */}
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.page1}>
//           <View style={styles.navbar}>
//             <View style={styles.navRight}>
//               <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Text style={styles.navLink}>Home</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('Collections')}>
//                 <Text style={styles.navLink}>Collections</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
//                 <Text style={styles.navLink}>About Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//                 <Text style={styles.navLink}>Account</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={styles.centre}>
//             <View style={styles.centreLeft}>
//               <Text style={styles.paragraph}>
//                 Step up your style game with sneakers that blend comfort, durability,
//                 and cutting-edge design. Whether you're hitting the gym or the streets,
//                 find the perfect pair to elevate your look and performance!
//               </Text>
//             </View>
//             <View style={styles.centreRight}>
//               <Text style={styles.heading}>
//                 IDEAS as unique as you{"\n"}
//                 Dare to be different{"\n"}
//                 Elevate your IDEAS
//               </Text>
//             </View>
//           </View>

//            <Video
//           source={require('../../assets/SneakerEdit.mp4')} // put your video in assets folder
//           style={styles.video}
//           resizeMode="cover"
//           shouldPlay
//           isLooping
//           isMuted
//         /> 
//         </View>

//         <View style={styles.page2}>
//           <View style={styles.movingText}>
//             {[1, 2, 3].map((_, index) => (
//               <View key={index} style={styles.con}>
//                 <Text style={styles.word}>Unique</Text>
//                 <View style={styles.gola} />
//                 <Text style={styles.word}>Dare</Text>
//                 <View style={styles.gola} />
//                 <Text style={styles.word}>Elevate</Text>
//                 {index !== 2 && <View style={styles.gola} />}
//               </View>
//             ))}
//           </View>

//           <View style={styles.page2Bottom}>
//             <Text style={styles.bottomHeading}>
//               We are a group of design-driven, goal-focused creators, producers, and designers who
//               believe that the details make all the difference.
//             </Text>
//             <View style={styles.bottomPart2}>
//               <Image
//                 //   source={require('../assets/3d1.webp')} // move your webp to assets
//                 style={styles.sliderImage}
//               />
//               <Text style={styles.bottomParagraph}>
//                 We love to create, we love to solve, we love to collaborate, and we love to turn
//                 amazing ideas into reality. We’re here to partner with you through every step of the
//                 process and know that relationships are the most important things we build.
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.page3}>
//           <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.buttonText}>Start Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </ImageBackground>

//   );
// };

// export default MainScreen;



// const styles = StyleSheet.create({
//   headerContainer: {
//     alignItems: 'center',
//     justifyContent: 'center', paddingTop: 10
//   },
//   header: { padding: 20, color: 'white', fontSize: 23 },
//   logo: { width: 100, height: 100 },
//   container: {
//     flex: 1,
//     backgroundColor: 'bisque',
//     // color:'white'
//     // marginTop:60
//     padding: 20,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   main: {
//     paddingHorizontal: 40,
//   },
//   page1: {
//     minHeight: '100%',
//     width: '100%',
//     position: 'relative',
//   },
//   nav: {
//     paddingVertical: '2vw',
//     paddingHorizontal: '3vw',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   navRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '1vw', // Will handle with margin manually in React Native
//   },
//   navRightH4: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 2,
//     borderColor: 'rgba(128, 128, 128, 0.719)',
//     borderRadius: 50,
//     fontWeight: '500',
//     color: 'black',
//     fontSize: 18,
//     overflow: 'hidden',
//   },
//   navRightLink: {
//     color: '#000000bb',
//     textDecorationLine: 'none',
//     zIndex: 9,
//   },
//   centre: {
//     height: '60%',
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: 'black',
//     marginBottom: '2vh',
//   },
//   centreLeft: {
//     width: '30%',
//     padding: 10,
//     fontSize: 18, // 'larger' roughly equals 18
//   },
//   centreRight: {
//     height: '50%',
//     padding: 10,
//     fontSize: 24, // 'xx-large' roughly equals 24
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontFamily: 'Anton', // Needs linking in React Native fonts
//   },
//   heroShape: {
//     position: 'absolute',
//     width: '46vw',
//     height: '36vw',
//     right: 0,
//     top: '65vh',
//   },
//   hero1: {
//     backgroundColor: '#FE320A',
//     height: '100%',
//     width: '100%',
//     borderRadius: 1000, // 50% simulation
//     filter: 'blur(10px)', // Not natively supported, use react-native-blur
//     position: 'absolute',
//   },
//   hero2: {
//     backgroundColor: '#FE320A',
//     height: '30vw',
//     width: '30vw',
//     borderRadius: 1000,
//     position: 'absolute',
//   },
//   hero3: {
//     backgroundColor: '#FE320A',
//     height: '30vw',
//     width: '30vw',
//     borderRadius: 1000,
//     position: 'absolute',
//   },
//   page1Video: {
//     position: 'relative',
//     borderRadius: 30,
//     marginTop: '4vw',
//     width: '100%',
//   },
//   page2: {
//     minHeight: '100%',
//     width: '100%',
//     paddingVertical: '8vw',
//     position: 'relative',
//   },
//   movingText: {
//     overflow: 'scroll',
//     whiteSpace: 'nowrap', // In React Native, scrollView horizontal
//   },
//   movingTextH1: {
//     fontSize: '9vw',
//   },
//   gola: {
//     height: 70,
//     width: 70,
//     borderRadius: 35,
//     backgroundColor: '#FE320A',
//     marginVertical: '1vw',
//     marginHorizontal: '2vw',
//   },
//   page2Bottom: {
//     height: '80%',
//     width: '100%',
//     padding: '4.5vw',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     position: 'relative',
//     zIndex: 9,
//   },
//   page2BottomH1: {
//     fontSize: '4vw',
//     width: '50%',
//     lineHeight: '4vw',
//   },
//   bottomPart2: {
//     width: '20%',
//   },
//   bottomPart2Img: {
//     width: '100%',
//     borderRadius: 15,
//   },
//   bottomPart2P: {
//     fontWeight: '200',
//     marginTop: '2vw',
//     fontSize: '1vw',
//   },
//   gooey: {
//     height: '32vw',
//     width: '32vw',
//     position: 'absolute',
//     borderRadius: 1000,
//     backgroundColor: '#FF2D03', // use gradient separately in RN
//     top: '48%',
//     left: '25%',
//   },
//   page3: {
//     height: '50%',
//     width: '100%',
//   },
//   btnContainer: {
//     height: '10%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     padding: 20,
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: 'grey',
//     backgroundColor: 'white',
//   },
//   btnText: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   iconImg: {
//     height: 100,
//     width: 100,
//   },
// });





// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// // If you want video, install expo-av
// // import { Video } from 'expo-av'; 

// const MainScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={require('../../assets/background.jpg')}
//       style={{ flex: 1 }}
//       resizeMode="cover"
//     >
//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>NIAGA</Text>
//         {/* <Image
//           source={require('../../assets/logo.png')}
//           style={styles.logo}
//         /> */}
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.page1}>
//           <View style={styles.navbar}>
//             <View style={styles.navRight}>
//               <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//                 <Text style={styles.navLink}>Home</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('Collections')}>
//                 <Text style={styles.navLink}>Collections</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
//                 <Text style={styles.navLink}>About Us</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//                 <Text style={styles.navLink}>Account</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={styles.centre}>
//             <View style={styles.centreLeft}>
//               <Text style={styles.paragraph}>
//                 Step up your style game with sneakers that blend comfort, durability,
//                 and cutting-edge design. Whether you're hitting the gym or the streets,
//                 find the perfect pair to elevate your look and performance!
//               </Text>
//             </View>
//             <View style={styles.centreRight}>
//               <Text style={styles.heading}>
//                 IDEAS as unique as you{"\n"}
//                 Dare to be different{"\n"}
//                 Elevate your IDEAS
//               </Text>
//             </View>
//           </View>

//            {/* <Video
//           source={require('../../assets/SneakerEdit.mp4')} // put your video in assets folder
//           style={styles.video}
//           resizeMode="cover"
//           shouldPlay
//           isLooping
//           isMuted
//         />  */}
//         </View>

//         <View style={styles.page2}>
//           <View style={styles.movingText}>
//             {[1, 2, 3].map((_, index) => (
//               <View key={index} style={styles.con}>
//                 <Text style={styles.word}>Unique</Text>
//                 <View style={styles.gola} />
//                 <Text style={styles.word}>Dare</Text>
//                 <View style={styles.gola} />
//                 <Text style={styles.word}>Elevate</Text>
//                 {index !== 2 && <View style={styles.gola} />}
//               </View>
//             ))}
//           </View>

//           <View style={styles.page2Bottom}>
//             <Text style={styles.bottomHeading}>
//               We are a group of design-driven, goal-focused creators, producers, and designers who
//               believe that the details make all the difference.
//             </Text>
//             <View style={styles.bottomPart2}>
//               <Image
//                 //   source={require('../assets/3d1.webp')} // move your webp to assets
//                 style={styles.sliderImage}
//               />
//               <Text style={styles.bottomParagraph}>
//                 We love to create, we love to solve, we love to collaborate, and we love to turn
//                 amazing ideas into reality. We’re here to partner with you through every step of the
//                 process and know that relationships are the most important things we build.
//               </Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.page3}>
//           <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Home')}>
//             <Text style={styles.buttonText}>Start Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </ImageBackground>

//   );
// };

// export default MainScreen;



// const styles = StyleSheet.create({
//   headerContainer: {
//     alignItems: 'center',
//     justifyContent: 'center', paddingTop: 10
//   },
//   header: { padding: 20, color: 'white', fontSize: 23 },
//   logo: { width: 100, height: 100 },
//   container: {
//     flex: 1,
//     backgroundColor: 'bisque',
//     // color:'white'
//     // marginTop:60
//     padding: 20,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   main: {
//     paddingHorizontal: 40,
//   },
//   page1: {
//     minHeight: '100%',
//     width: '100%',
//     position: 'relative',
//   },
//   nav: {
//     paddingVertical: '2vw',
//     paddingHorizontal: '3vw',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   navRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '1vw', // Will handle with margin manually in React Native
//   },
//   navRightH4: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 2,
//     borderColor: 'rgba(128, 128, 128, 0.719)',
//     borderRadius: 50,
//     fontWeight: '500',
//     color: 'black',
//     fontSize: 18,
//     overflow: 'hidden',
//   },
//   navRightLink: {
//     color: '#000000bb',
//     textDecorationLine: 'none',
//     zIndex: 9,
//   },
//   centre: {
//     height: '60%',
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'space-between',
//     borderBottomWidth: 2,
//     borderColor: 'black',
//     marginBottom: '2vh',
//   },
//   centreLeft: {
//     width: '30%',
//     padding: 10,
//     fontSize: 18, // 'larger' roughly equals 18
//   },
//   centreRight: {
//     height: '50%',
//     padding: 10,
//     fontSize: 24, // 'xx-large' roughly equals 24
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontFamily: 'Anton', // Needs linking in React Native fonts
//   },
//   heroShape: {
//     position: 'absolute',
//     width: '46vw',
//     height: '36vw',
//     right: 0,
//     top: '65vh',
//   },
//   hero1: {
//     backgroundColor: '#FE320A',
//     height: '100%',
//     width: '100%',
//     borderRadius: 1000, // 50% simulation
//     filter: 'blur(10px)', // Not natively supported, use react-native-blur
//     position: 'absolute',
//   },
//   hero2: {
//     backgroundColor: '#FE320A',
//     height: '30vw',
//     width: '30vw',
//     borderRadius: 1000,
//     position: 'absolute',
//   },
//   hero3: {
//     backgroundColor: '#FE320A',
//     height: '30vw',
//     width: '30vw',
//     borderRadius: 1000,
//     position: 'absolute',
//   },
//   page1Video: {
//     position: 'relative',
//     borderRadius: 30,
//     marginTop: '4vw',
//     width: '100%',
//   },
//   page2: {
//     minHeight: '100%',
//     width: '100%',
//     paddingVertical: '8vw',
//     position: 'relative',
//   },
//   movingText: {
//     overflow: 'scroll',
//     whiteSpace: 'nowrap', // In React Native, scrollView horizontal
//   },
//   movingTextH1: {
//     fontSize: '9vw',
//   },
//   gola: {
//     height: 70,
//     width: 70,
//     borderRadius: 35,
//     backgroundColor: '#FE320A',
//     marginVertical: '1vw',
//     marginHorizontal: '2vw',
//   },
//   page2Bottom: {
//     height: '80%',
//     width: '100%',
//     padding: '4.5vw',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     position: 'relative',
//     zIndex: 9,
//   },
//   page2BottomH1: {
//     fontSize: '4vw',
//     width: '50%',
//     lineHeight: '4vw',
//   },
//   bottomPart2: {
//     width: '20%',
//   },
//   bottomPart2Img: {
//     width: '100%',
//     borderRadius: 15,
//   },
//   bottomPart2P: {
//     fontWeight: '200',
//     marginTop: '2vw',
//     fontSize: '1vw',
//   },
//   gooey: {
//     height: '32vw',
//     width: '32vw',
//     position: 'absolute',
//     borderRadius: 1000,
//     backgroundColor: '#FF2D03', // use gradient separately in RN
//     top: '48%',
//     left: '25%',
//   },
//   page3: {
//     height: '50%',
//     width: '100%',
//   },
//   btnContainer: {
//     height: '10%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     padding: 20,
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: 'grey',
//     backgroundColor: 'white',
//   },
//   btnText: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   iconImg: {
//     height: 100,
//     width: 100,
//   },
// });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Text style={styles.title}>NIAGA</Text>
      <View style={styles.container}>
        {/* //   <Text style={styles.title}>NIAGA</Text> */}
        <TouchableOpacity style={styles.profileIcon}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>

        <Text style={styles.headline}>Sneakers as unique as you{'\n'}Dare to be different{'\n'}Elevate your style</Text>
        <Text style={styles.description}>
          Step up your style game with sneakers that blend comfort, durability, and cutting-edge design. Whether you're hitting the gym or the streets, find the perfect pair to elevate your look and performance!
        </Text>

        <View style={styles.videoBox}>
          <Text style={styles.videoText}>VIDEO</Text>

        </View>

        <View style={styles.tags}>
          <Text style={styles.tagText}>Elevate</Text>
          <Text style={styles.dot}>●</Text>
          <Text style={styles.tagText}>Unique</Text>
          <Text style={styles.dot}>●</Text>
          <Text style={styles.tagText}>Dare</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
    // marginTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FE320A',
    // marginTop: 10,
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
    // backgroundColor: 'red'
  },
  description: {
    fontSize: 12,
    marginVertical: 15,
    color: '#333',
    width: 150
  },
  videoBox: {
    height: 120,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 10,
  },
  videoText: {
    fontSize: 16,
    fontWeight: 'bold',
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
