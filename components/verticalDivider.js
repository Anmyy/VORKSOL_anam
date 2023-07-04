import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalDivider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: 1,
    backgroundColor: '#D3D3D3',
    marginVertical:'8%'
  },
});

export default VerticalDivider;
