/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *,
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import Feed from './screens/Feed';
import Login from './screens/Login';
import {Provider} from 'react-redux';
import {store} from './store';
import {useEffect, useState} from 'react';
import {firebaseInitilize, onUserAuthChange} from './services/Firebase';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [user, setUser] = useState(null);

  var qualquercoisa =
  useEffect(() => {
    firebaseInitilize();
    onUserAuthChange(setIsUserLogged, setUser);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isUserLogged ? (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{title: 'Pokecard'}}
              />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="Feed" component={Feed} />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
