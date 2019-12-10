import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import ButtonGradient from '../components/ButtonGradient';
import SocialAuthButton from '../components/SocialAuthButton';
import Divider from '../components/Divider';
import InputText from './../components/InputText';

import { theme } from '../constants';

const LoginScreen = ({ navigation }) => {
  const { primary, secondary, tertiary, blue, lightBlue } = theme.colors;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image
          source={require('../assets/logoFont.png')}
          style={styles.logoFont}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.rowContainer}>
          <InputText name='email-id' />
        </View>
        <View style={styles.rowContainer}>
          <InputText name='password' type='password' />
        </View>
        <View style={styles.rowContainer}>
          <ButtonGradient
            colors={[primary, secondary, tertiary]}
            text='LOGIN'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Divider text='OR WITH' />
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
          <Text style={styles.bottomText}>Forget your password? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPasswordScreen')}
          >
            <Text style={styles.bottomText}>RESET NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  socialCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.sizes.base * 2
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    height: 180
  },
  logo: {
    width: 170,
    height: 170
  },
  logoFont: {
    width: 350,
    height: 60,
    top: 150,
    position: 'absolute'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: theme.sizes.base
  },
  bottomText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: theme.sizes.h3
  }
});
