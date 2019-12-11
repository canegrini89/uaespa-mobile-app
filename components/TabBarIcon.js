import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../constants';


const TabBarIcon = ({ onPress }) => {
  const { primary, secondary, tertiary } = theme.colors;
  return (
    <TouchableOpacity onPress={onPress} style={styles.contImg}>
      <LinearGradient
        colors={[primary, secondary, tertiary]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.button}
      >
        <Image source={require('../assets/addEvent.png')}  style={{ width: 40, height: 40}} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  },
  button: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderColor: '#FFF',
    borderWidth: 2,
    elevation: 3,
  },
  contImg: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -40
  }
});
