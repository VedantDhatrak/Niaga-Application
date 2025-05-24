import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
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
