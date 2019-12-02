import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const ButtonGradient = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={props.colors}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {props.text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default ButtonGradient

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 60,
    height: 63,
    width: 330,
    marginTop: 28,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 23,
    color: '#fff',
  }
})