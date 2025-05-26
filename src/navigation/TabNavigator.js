// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MainScreen from '../screens/MainScreen';
// import HomeScreen from '../screens/HomeScreen';
// import { StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import ModelScreen from '../screens/ModelScreen';



// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator      screenOptions={{
//     headerShown: false,
//     tabBarActiveTintColor: '#007AFF',
//     tabBarInactiveTintColor: '#8e8e93',
//     tabBarStyle: {
//       backgroundColor: 'transparent', // your red tab color
//       position: 'absolute',    // <--- VERY IMPORTANT
//       bottom: 0,
//       left: 0,
//       right: 0,
//       elevation: 0,            // remove shadow on Android
//       borderTopWidth: 0,       // remove border line
//       height: 60,              // optional: bigger height
//       borderRadius: 20, borderTopRightRadius:50,borderTopLeftRadius:50,       // round the corners
//       // marginHorizontal: 20,    // margin from left and right
//       // marginBottom: 10,        // margin from bottom
//     },
//     tabBarLabelStyle: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//   }}>
//       <Tab.Screen name="Main" component={MainScreen}   options={{
//           tabBarIcon: ({ color }) => <Ionicons name="map-outline" size={24} color={color} />,
//         }} />
//       <Tab.Screen name="Home" component={HomeScreen}          options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }} />
//       {/* <Tab.Screen name="Home" component={ModelScreen}          options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }} /> */}
//     </Tab.Navigator>
//   );
// }



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import FavouriteScreen from '../screens/FavouritesScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FE320A',
        tabBarInactiveTintColor: '#FFE4C4',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
          height: 60,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          overflow: 'hidden',
          paddingTop: 5
        },
        tabBarBackground: () => (
          <Image
            source={require('../../assets/background.jpg')}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Whislist"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Image, StyleSheet, View } from 'react-native';
// import MainScreen from '../screens/MainScreen';
// import HomeScreen from '../screens/HomeScreen';
// import { Ionicons } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// export default function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#007AFF',
//         tabBarInactiveTintColor: '#8e8e93',
//         tabBarStyle: {
//           backgroundColor: 'transparent', // ✅ Important to let image show
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           elevation: 0,
//           borderTopWidth: 0,
//           height: 60,
//           borderTopRightRadius: 50,
//           borderTopLeftRadius: 50,
//           overflow: 'hidden', // ✅ Needed to apply border radius on image background
//         },
//         tabBarBackground: () => (
//           <Image
//             source={require('../../assets/background.jpg')}
//             style={StyleSheet.absoluteFillObject} // ✅ Covers full tab bar
//             resizeMode="cover"
//           />
//         ),
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '600',
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Main"
//         component={MainScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="map-outline" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="home" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
