import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Card from '../components/Card';
import {theme} from '../constants';

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
