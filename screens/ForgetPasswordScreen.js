import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import ButtonGradient from '../components/ButtonGradient';
import InputText from '../components/InputText'

const ForgetPassword = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/candado.png')} style={styles.logo} />
        <Text style={styles.forgetText}>
          FORGET YOUR{"\n"}PASSWORD?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputText name='EMAIL ID' />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgetPasswordSms')}
      >
        <Text style={styles.resetNumber}>
            Reset password by Phone Number?
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <ButtonGradient
          colors={['#FE77D6', '#FB4282', '#FF5959']}
          text='RESET'
        />
      </View>
    </View>
  );
};

ForgetPassword.navigationOptions = {
  header: null
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
  },  
  resetNumber: {
    color: '#B7B4B4',
    fontSize: 18,
    marginTop: 16,
  },
  forgetText: {
    fontSize: 30,
    fontWeight: '600',
    flexWrap: 'wrap',
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 14
  },
  logo: {
    marginBottom: 40,
    marginTop: 50,
    width: 80,
    height: 80
  },
});
