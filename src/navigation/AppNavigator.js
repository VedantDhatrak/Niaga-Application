import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import MainScreen from '../screens/MainScreen';
import WelcomeScreen from '../screens/authentication/WelcomeScreen';
import SignInScreen from '../screens/authentication/SignInScreen';
import SignUpScreen from '../screens/authentication/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const onNavigationStateChange = (state) => {
    console.log('Navigation State Changed:', state);
  };

  return (
    <NavigationContainer onStateChange={onNavigationStateChange}>
      {/* <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            gestureEnabled: false
          }}
        /> */}
           <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="TabNavigator" 
          component={TabNavigator}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Checkout" 
          component={require('../screens/CheckoutScreen').default}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="OrderProcessing" 
          component={require('../screens/OrderProcessingScreen').default}
          options={{
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="OrderSuccess" 
          component={require('../screens/OrderSuccessScreen').default}
          options={{
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TabNavigator from './TabNavigator';
// import MainScreen from '../screens/MainScreen';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {/* Main entry point is Tab Navigator */}
//       <Stack.Screen name="Tabs" component={TabNavigator} />

//       {/* Add MainScreen here to access it globally */}
//       <Stack.Screen name="MainScreen" component={MainScreen} />
//     </Stack.Navigator>
//   );
// }
