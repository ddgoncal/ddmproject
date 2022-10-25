//import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Pokecard from '../components/Pokecard';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

function About(params) {
  const counter = useSelector(state => state.counter.value);
  const [users, setUsers] = useState({});
  const [dependencia, setdependencia] = useState(false);
  console.log(params.itemId);
  const post = {userId: 1, title: 'title', body: 'isto e um post'};

  const fazFetchComDependencia = useCallback(() => {
    if (dependencia) {
      console.log('Executou');
      fecthAxiosData();
    }
    console.log('Entra aqui na mesma');
  }, [dependencia]);

  useEffect(() => {
    fazFetchComDependencia();
  }, [fazFetchComDependencia]);

  const clearData = () => {
    setUsers({});
    setdependencia(!dependencia);
    fazFetchComDependencia();
  };

  const fecthAxiosData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // eslint-disable-next-line eqeqeq
        setUsers(response.data);
      })
      .catch(error => { console.log("deu erro") });
  };

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {});
  };

  const renderItem = ({item}) => {
    return <Pokecard name={item.username} type={item.email} />;
  };

  return (
    <ScrollView>
      <Text style={styles.text}>O meu counter: {counter}</Text>
      <Text>Isto e a nova pagina {params.itemId}</Text>
      <Button title="Fetch data" color="green" onPress={fetchData} />
      <Button title="Axios data" color="green" onPress={fecthAxiosData} />
      <Button title="Clear Data" color="blue" onPress={clearData} />

      <FlatList
        renderItem={renderItem}
        data={users}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default About;
