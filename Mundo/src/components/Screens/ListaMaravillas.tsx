import React, {
  useEffect,
  useState,
} from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { Maravilla } from './types';

const ListaMaravillas = ({ navigation }: any) => {

  const [places, setPlaces] = useState<Maravilla[]>([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async (): Promise<void> => {

    try {

      const response = await fetch(
        'https://65f9be823909a9a65b1942ac.mockapi.io/maravillas'
      );

      const data: Maravilla[] = await response.json();

      setPlaces(data);

    } catch (error) {

      console.error(
        'Error fetching wonders:',
        error
      );

    }

  };

  const renderItem = ({
    item,
  }: {
    item: Maravilla;
  }) => (

    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Consejos', {
          tips: item,
        })
      }
    >

      <View style={styles.Lista}>

        <Image
          source={{ uri: item.imagen }}
          style={styles.ImagenM}
        />

        <View style={styles.ListaText}>

          <Text style={styles.TextNombre}>
            {item.nombre}
          </Text>

          <Text style={styles.TextPais}>
            {item.pais}
          </Text>

        </View>

      </View>

    </TouchableOpacity>

  );

  return (

    <View style={styles.container}>

      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  ImagenM: {
    width: 100,
    height: 50,
    marginRight: 10,
  },

  Lista: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  ListaText: {
    alignItems: 'flex-start',
    padding: 10,
  },

  TextNombre: {
    fontSize: 20,
  },

  TextPais: {
    fontSize: 15,
    color: 'gray',
  },

});

export default ListaMaravillas;