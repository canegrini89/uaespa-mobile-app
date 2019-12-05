import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGradient = ({ colors, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '100%' }}>
      <LinearGradient
        colors={colors}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonGradient;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginTop: 20,
    width: '100%'
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 23,
    color: '#fff'
  }
});
