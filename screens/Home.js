import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BestButton from '../components/BestButton';
import Pokecard from '../components/Pokecard';
import pokemonList from '../components/defaultprops';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function Home() {
  console.log(counter);

  const counter = useSelector(state => state.counter.value);
  const pokemonData = pokemonList.pokemon;
  const navigation = useNavigation();

  const onPressPokecard = () => {
    navigation.navigate('About');
  };

  const renderPokeData = () => {
    const poke = [];
    pokemonData.forEach(element => {
      poke.push(
        <Pokecard
          key={element.id}
          name={element.name}
          type={element.type}
          image={element.image}
          onPressPokecard={onPressPokecard}
        />,
      );
    });
    return poke;
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.text}>O meu counter: {counter}</Text>
        <Text style={styles.text}>Eu sou o Amadeu</Text>
        <View style={styles.buttons_container}>
          <BestButton
            texto="Incrementar"
            isIncrement
          />
          <BestButton
            texto="Decrementare"
          />
        </View>
        {renderPokeData()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons_container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default Home;
