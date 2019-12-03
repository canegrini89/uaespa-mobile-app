import React from 'react'
import {
  TextInput,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'


const InputText = (props) => {
  return (
    <View>
      <Text style={styles.text}>
        {props.name}
      </Text>
      <View style={styles.inputCont}>
        <TextInput 
          style={styles.input}
          type={props.type}
          secureTextEntry={props.type === 'password' ? true : false}
        />
        <Image
          source={props.icon}
          style={styles.icon} />    
      </View>
    </View>
  )
}

export default InputText


const styles = StyleSheet.create({
inputCont: {
  flexDirection: 'row',
  justifyContent: 'center',
  borderRadius: 50,
  borderColor: '#000',
  borderWidth: 1,
  height: 53,
  alignItems: 'center',
},
icon: {
  marginRight: 10,
  padding: 5,
  width: 30,
  height: 30
},
input: {
  flex: 1,
  paddingLeft: 0,
  color: '#424242',
  fontWeight: '600',
  textAlign: 'center',
  width: '100%'
},
text: {
  textAlign: 'center',
  marginBottom: 2,
  marginTop: 8,
  fontWeight: '800',
  color: '#FF5959',
  fontSize: 18
},
})