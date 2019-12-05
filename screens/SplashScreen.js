import React from 'react';
import { Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import ButtonGradient from '../components/ButtonGradient';
import SocialAuthButton from '../components/SocialAuthButton';
import Divider from '../components/Divider';

import { theme } from '../constants';

const SplashScreen = ({ navigation }) => {
  const {
    primary,
    secondary,
    tertiary,
    black,
    lightBlack,
    gray,
    blue,
    lightBlue
  } = theme.colors;

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
          <ButtonGradient
            colors={[primary, secondary, tertiary]}
            text='LOGIN'
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </View>
        <View style={styles.rowContainer}>
          <ButtonGradient
            colors={[primary, secondary, tertiary]}
            text='REGISTER'
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
        <View style={styles.rowContainer}>
          <ButtonGradient
            colors={[black, lightBlack, gray]}
            text='LOGIN AS GUEST'
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
      </View>
    </View>
  );
};

SplashScreen.navigationOptions = {
  header: null
};

export default SplashScreen;

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
  formContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: theme.sizes.base
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});
