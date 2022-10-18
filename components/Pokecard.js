import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Pokecard(props) {
  let {name, type, image, onPressPokecard} = props;

  return (
    <TouchableOpacity onPress={onPressPokecard}>
      <View style={true ? styles.poke_container_two : styles.poke_container}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.description}>Type: {type}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  poke_container: {
    width: 180,
    height: 250,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#e5e5e5',
  },
  poke_container_two: {
    width: 180,
    height: 250,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#f20000',
  },
  title: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2020e5',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  description: {
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default Pokecard;
