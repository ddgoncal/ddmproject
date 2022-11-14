import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const FirebaseConfig = {
  apiKey: 'AIzaSyBHJRvhwsP20CBGeerlmp5nlLdisqd5Q_E',
  authDomain: 'firebaseapp',
  databaseURL: 'ddmproject-f7392',
  projectId: 'ddmproject-f7392',
  storageBucket: 'ddmproject-f7392.appspot.com',
  messagingSenderId: '1055433782606',
  appId: 'b308d4b9d990db06',
};

const firebaseInitilize = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(FirebaseConfig);
    console.log('Firebase initialized');
  } else {
    firebase.app();
    console.log('Firebase already initialized');
  }
};

const onUserAuthChange = (setIsUserLogged, setUser) => {
  auth().onAuthStateChanged(userAuth => {
    if (userAuth) {
      console.log('User logged in');
      console.log(userAuth);
      setIsUserLogged(true);
      setUser(userAuth);
      console.log(userAuth);
    } else {
      setIsUserLogged(false);
    }
  });
};

export {firebaseInitilize, onUserAuthChange};
