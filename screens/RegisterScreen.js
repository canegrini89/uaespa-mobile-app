import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

import InputText from './../components/InputText';
import SocialAuthButton from '../components/SocialAuthButton';
import Divider from '../components/Divider';
import ButtonGradient from './../components/ButtonGradient';

import { theme } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }) => {
  const { primary, secondary, tertiary, blue, lightBlue } = theme.colors;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.rowContainer}>
          <InputText name='first name' />
          <InputText name='last name' />
        </View>
        <View style={styles.rowContainer}>
          <InputText name='country' />
          <InputText name='phone number' />
        </View>
        <View style={styles.rowContainer}>
          <InputText name='email-id' />
        </View>
        <View style={styles.rowContainer}>
          <InputText name='password' type='password' />
        </View>
        <View style={styles.rowContainer}>
          <ButtonGradient
            colors={[primary, secondary, tertiary]}
            text='REGISTER'
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Divider text='OR' />
        <View style={styles.socialCont}>
          <SocialAuthButton
            text='FACEBOOK'
            logo={require('../assets/facebook.png')}
            color={blue}
          />
          <SocialAuthButton
            text='TWITTER'
            logo={require('../assets/twitter.png')}
            color={lightBlue}
          />
        </View>
        <View style={{ ...styles.rowContainer, justifyContent: 'center' }}>
          <Text style={styles.bottomText}>Already have and account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.bottomText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

RegisterScreen.navigationOptions = {
  header: null
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: theme.sizes.base
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  socialCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 180
  },
  bottomText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: theme.sizes.h3
  }
});
