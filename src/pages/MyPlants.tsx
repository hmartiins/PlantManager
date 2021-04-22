import { Jost_500Medium } from '@expo-google-fonts/jost';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Header } from '../components/Header';

import colors from '../styles/colors';

export function MyPlants() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: Jost_500Medium,
    backgroundColor: colors.background
  }
});
