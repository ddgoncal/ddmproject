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
import {Provider} from 'react-redux';
import {store} from './store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator>;
};

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Pokecard'}}
          />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
