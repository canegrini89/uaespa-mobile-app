import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { theme } from '../constants';

const Divider = ({ text }) => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerCont}></View>
      <Text style={styles.middleText}>{text}</Text>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  middleText: {
    position: 'absolute',
    fontSize: 18,
    padding: 5,
    color: theme.colors.bottomText,
    backgroundColor: theme.colors.white
  },
  dividerCont: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    borderWidth: 1,
    borderColor: theme.colors.bottomText,
    borderBottomColor: theme.colors.bottomText
  },
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.sizes.base * 2
  }
});
