import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import Divider from '../components/Divider';
import ButtonGradient from '../components/ButtonGradient'
import SocialAuthButton from '../components/SocialAuthButton'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
          <Image
          source={require('../assets/logoFont.png')}
          style={styles.logoFont}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonGradient colors={['#FE77D6', '#FB4282', '#FF5959']} text='LOGIN'/>
        <ButtonGradient colors={['#FE77D6', '#FB4282', '#FF5959']} text='REGISTER'/>
        <ButtonGradient colors={['#000000', '#393939', '#898989']} text='LOGIN AS GUEST'/>
      </View>
      <Divider text='OR WHIT' />
      <View style={styles.socialCont}>
        <SocialAuthButton text='FACEBOOK' logo={require('../assets/facebook.png')} color='blue'/>
        <SocialAuthButton text='TWITTER' logo={require('../assets/twitter.png')} color='lightBlue' />
      </View>
  </View>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  socialCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70
  },
  buttonContainer: {
    marginTop: 70,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 14,
  },
  logo: {
    width: 170,
    height: 170,
  },
  logoFont: {
    width: 350,
    height: 60,
    top: 150,
    position: 'absolute',
  },
});
