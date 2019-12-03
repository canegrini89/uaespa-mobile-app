import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import ButtonGradient from '../components/ButtonGradient';
import InputText from '../components/InputText'

const ChangePassword = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/candado.png')} style={styles.logo} />
        <Text style={styles.forgetText}>
          FORGET YOUR{"\n"}PASSWORD?
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputText name='NEW PASSWORD' type='password' />
        <InputText name='RETYPE NEW PASSWORD' type='password' />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGradient
          colors={['#FE77D6', '#FB4282', '#FF5959']}
          text='SUBMIT'
        />
      </View>
    </View>
  );
};

ChangePassword.navigationOptions = {
  header: null
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
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
