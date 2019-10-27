import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function SpotList({ tech }) {
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
