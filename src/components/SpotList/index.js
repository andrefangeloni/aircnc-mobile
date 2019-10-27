import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import { withNavigation } from 'react-navigation';

import api from '../../services/api';

import styles from './styles';

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      });
      setSpots(response.data);
    }
    loadSpots();
  }, [tech]);

  function handleNavigate(id) {
    navigation.navigate('Book', { id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Empresas que usam <Text style={styles.bold}>{tech}</Text>
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={spots}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url }}
            />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>
              {item.price ? `R$ ${item.price}/dia` : 'GRATUITO'}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleNavigate(item._id)}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default withNavigation(SpotList);
