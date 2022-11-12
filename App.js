/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *,
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {AsyncStorage, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import Feed from './screens/Feed';
import Login from './screens/Login';
import {Provider} from 'react-redux';
import {store} from './store';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { useEffect,useState } from 'react';


const Stack = createNativeStackNavigator();

const FirebaseConfig = {
  apiKey: 'AIzaSyBHJRvhwsP20CBGeerlmp5nlLdisqd5Q_E',
  authDomain: 'firebaseapp',
  databaseURL: 'ddmproject-f7392',
  projectId: 'ddmproject-f7392',
  storageBucket: 'ddmproject-f7392.appspot.com',
  messagingSenderId: '1055433782606',
  appId: 'b308d4b9d990db06',
};

const App: () => Node = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [user, setUser] = useState(null);

  const firebaseInitilize = () => {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(FirebaseConfig);
      console.log('Firebase initialized');
    } else {
      firebase.app();
      console.log('Firebase already initialized');
    }
  };


  const checkUserLogged = () => {
    auth().onAuthStateChanged(userAuth => {
      if (userAuth) {
        setIsUserLogged(true);
        setUser(userAuth);
        console.log(userAuth);
      } else {
        setIsUserLogged(false);
      }
    });
  };

  useEffect(() => {
    firebaseInitilize();
    checkUserLogged();
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
