import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'


const Divider = (props) => {
  return (
    <View style={styles.dividerCont}>
      <Text style={styles.orWith}>
       {props.text}
      </Text>
    </View>
  )
}

export default Divider


const styles = StyleSheet.create({
  dividerCont: {
    width: '50%',
    borderBottomWidth: 2,
    borderBottomColor: '#7B7A7A',
    height: 1,
    top: 555,
    position: 'absolute',
  },
  orWith: {
    top: -22,
    padding: 10,
    position: 'absolute',
    left: 55,
    fontSize: 18,
    color: '#7B7A7A',
    backgroundColor: '#FFF',
  },
})