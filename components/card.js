import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: 140,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  image: {
    height: 60,
    width: 60,
    marginLeft:16,
    marginTop: 6,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
  }
});

export default Card;
