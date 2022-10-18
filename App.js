/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *,
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import About from './screens/About';
import Feed from './screens/Feed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Feed" component={Feed} />
  </Tab.Navigator>;
};

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title: 'Pokecard'}}
        />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
