import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import Navigation from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  }
});
