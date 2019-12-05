import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// set blue for Facebook button
//set lightBlue for Twitter button

const SocialAuthButton = ({ color, logo, text, onPress }) => {
  return (
    <TouchableOpacity style={styles[color]} onPress={onPress}>
      <Image source={logo} style={styles.logo} />
      <Text
        style={color === 'blue' ? styles.buttonBlue : styles.buttonLightBlue}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialAuthButton;

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  blue: {
    padding: 10,
    width: 160,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#3B5998',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 15
  },
  buttonLightBlue: {
    fontWeight: '600',
    color: '#0084b4',
    fontSize: 18
  },
  buttonBlue: {
    fontWeight: '600',
    color: '#3B5998',
    fontSize: 18
  },
  lightBlue: {
    padding: 10,
    width: 150,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0084b4',
    borderWidth: 1,
    borderRadius: 50
  }
});
