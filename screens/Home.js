import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BestButton from '../components/BestButton';
import Pokecard from '../components/Pokecard';
import pokemonList from '../components/defaultprops';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [counter, setcounter] = useState(0);
  const pokemonData = pokemonList.pokemon;
  const navigation = useNavigation();

  const onPressPokecard = () => {
    navigation.navigate('About', {itemId: 80});
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
        <View style={styles.buttons_container}>
          <BestButton
            texto="Incrementar"
            setcounter={setcounter}
            isIncrement
            counter={counter}
          />
          <BestButton
            texto="Decrementare"
            setcounter={setcounter}
            counter={counter}
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
