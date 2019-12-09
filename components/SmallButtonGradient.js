import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SmallButtonGradient = ({ colors, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: '100%', height: '100%' }}>
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

export default SmallButtonGradient;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: '100%',
    paddingVertical: 4,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  }
});
