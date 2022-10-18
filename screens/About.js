//import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import {Button, FlatList, ScrollView, Text, View} from 'react-native';
import Pokecard from '../components/Pokecard';

function About(params) {
  console.log(params.itemId);
  const [users, setUsers] = useState({});
  const [created, setCreated] = useState(false);
  const clearData = () => {
    setUsers({});
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setUsers(response.data);
      console.log("Correu outra vez!");
    });
  }, []);

  const onFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  };

  const onAxiosFetch = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      setUsers(response.data);
    });
  };

  const createPost = () => {
    const post = {userid: 1, title: 'Nosso post', body: 'Isto é a mensagem'};
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {post})
      .then(response => {
        if (response.status == 201) {
          setUsers({});
        };
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addCenas = () => {
    setCreated(!created);
  };

  const renderItem = ({ item }) => (
    <Pokecard name={item.body} type={item.title} />
  );


  return (
    <ScrollView>
      <Text>Isto e a nova pagina {params.itemId}</Text>
      <Button onPress={onFetch} title="Fetch data" color="green" />
      <Button onPress={onAxiosFetch} title="Axios fetch data" color="green" />
      <Button onPress={clearData} title="Clear data" color="red" />
      <Button onPress={createPost} title="create post" color="red" />
      <Button onPress={addCenas} title="renderizacao condicional" color="red" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {created && (
        <View>
          <Text>Funcionou!!!!!!</Text>
          <Button onPress={createPost} title="create post" color="red" />
        </View>
      )}
    </ScrollView>
  );
}

export default About;
