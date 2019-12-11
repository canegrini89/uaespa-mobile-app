import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Image } from 'react-native';

const Banner = (props) => {
  return (
    <TouchableOpacity style={{  height:props.height, width: '100%' }}>
      <Image 
        style={styles.banner}
        source={{ uri: props.image}}
      />
      <View 
        style={{
          position: 'absolute',
          top: '33%',
          width: '100%',
          height: 100,
          backgroundColor: props.back,
      }}>
        <Text style={styles.textOne}>
          {props.textOne}
        </Text>
        <Text style={styles.textTwo}>
          {props.textTwo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: '100%'
  },
  textOne: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 15,
  },
  textTwo: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center'
  },
  hero: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    height: 80,
    backgroundColor: 'transparent',
  },
});
