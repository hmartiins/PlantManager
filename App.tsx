import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome></Welcome>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
