import React from 'react';
import { useState } from 'react';
import {Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const BestButton = ( props ) => {
  console.log(props);
  var {isIncrement, counter, setcounter, texto} = props;

  const [buttonText, setbuttonText] = useState(texto);

  const onPressHandler = () => {
    setcounter(isIncrement ? counter + 1 : counter - 1);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.button_text}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  )

}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 30,
  },
  button_text: {
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    fontSize: 10,
  }}
);

export default BestButton;
