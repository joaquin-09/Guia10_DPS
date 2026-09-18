import { useEffect, useState } from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { Pais } from './types';

const windowWidth = Dimensions.get('window').width;

const ListaPaises = ({ navigation }: any) => {

  const [countries, setCountries] = useState<Pais[]>([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async (): Promise<void> => {
    try {

      const response = await fetch(
        'https://65f9be823909a9a65b1942ac.mockapi.io/paises'
      );

      const data: Pais[] = await response.json();

      setCountries(data);

    } catch (error) {

      console.error('Error fetching countries:', error);

    }
  };

  const renderItem = ({ item }: { item: Pais }) => (

    <TouchableOpacity
      style={styles.countryCard}
      onPress={() =>
        navigation.navigate('DetallePais', {
          country: item,
        })
      }
    >

      <View style={styles.countryInfo}>

        <Image
          source={{ uri: item.bandera }}
          style={styles.flagImage}
        />

        <Text style={styles.countryName}>
          {item.nombre.espanol}
        </Text>

      </View>

    </TouchableOpacity>

  );

  return (

    <View style={styles.container}>

      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.countryList}
        numColumns={2}
      />

    </View>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  countryList: {
    padding: 10,
  },

  countryCard: {
    width: windowWidth / 2 - 15,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },

  countryInfo: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
  },

  flagImage: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    backgroundColor: '#f2f2f2',
  },

  countryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },

});

export default ListaPaises;