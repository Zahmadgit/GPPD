import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  PermissionsAndroid,

} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from './src/screens/Home';
import Account from './src/screens/Account';
import DeleteScreen from './src/screens/DeleteScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
  
      <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="DeleteScreen" component={DeleteScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  

  );
}


export default App;