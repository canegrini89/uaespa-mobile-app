import React from 'react';
<<<<<<< HEAD

import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Card from '../components/Card';
import {theme} from '../constants';
import { View, Text } from 'react-native';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Card />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroud,
  },

});
