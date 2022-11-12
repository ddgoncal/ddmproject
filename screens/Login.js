import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, TextInput, View } from 'react-native'
import { firebase } from '@react-native-firebase/auth';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        Alert.alert('Success');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Error creating user');
    });
  };

  const LoginUser = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      console.log(result);
      Alert.alert('Success');
    })
    .catch(error => {
      console.log(error);
      Alert.alert("password or email is incorrect");
    });
  };

  return (
    <View>
      <TextInput placeholder='Email' onChangeText={setEmail}></TextInput>
      <TextInput placeholder='Password' onChangeText={setPassword}></TextInput>
      <Button title="SignIn" onPress={onSignIn}></Button>
      <Button title="Login" onPress={LoginUser}></Button>
    </View>
  )
}

Login.propTypes = {}

export default Login;
