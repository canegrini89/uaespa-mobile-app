import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputText = ({ type, icon, name }) => {
  const [secureText, setSecureText] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.inputCont}>
        <TextInput
          style={[styles.input]}
          type={type}
          secureTextEntry={type === 'password' ? secureText : false}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={styles.icon}
          >
            <Ionicons name='md-eye' size={32} color='black' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    width: '100%'
  },
  inputCont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    height: 53,
    alignItems: 'center',
    paddingVertical: 5
  },
  icon: {
    flex: 3,
    position: 'absolute',
    right: 10
  },
  input: {
    flex: 1,
    color: '#424242',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
    fontSize: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 6,
    marginTop: 8,
    fontWeight: '800',
    color: '#FF5959',
    fontSize: 18,
    textTransform: 'uppercase'
  }
});
