import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Divider from '../components/Divider';
import ButtonGradient from '../components/ButtonGradient'
import SocialAuthButton from '../components/SocialAuthButton'
import InputText from '../components/InputText'

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
        <InputText name='EMAIL-ID' type='username' />
        <InputText name='PASSWORD' type='password' icon={require('../assets/ojo.png')}/>
        <ButtonGradient colors={['#FE77D6', '#FB4282', '#FF5959']} text='LOGIN'/>
      </View>
      <Divider text='OR WHIT' />
      <View style={styles.socialCont}>
        <SocialAuthButton text='FACEBOOK' logo={require('../assets/facebook.png')} color='blue'/>
        <SocialAuthButton text='TWITTER' logo={require('../assets/twitter.png')} color='lightBlue' />
      </View>
      <Text style={styles.text}>
        Forget your password? RESET NOW
      </Text>
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
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 80,
  },
  text: {
    marginTop: 10,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '800'
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
