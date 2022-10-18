import React from 'react';
import {Text} from 'react-native';

function About(params) {
  console.log(params.itemId);
  return <Text>Isto e a nova pagina {params.itemId}</Text>;
}

export default About;
