import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native';

import ButtonGradient from '../components/ButtonGradient';
import InputText from '../components/InputText';

import { theme } from '../constants';

const PinCode = ({ navigation }) => {
  const { primary, secondary, tertiary } = theme.colors;
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/candado.png')} style={styles.logo} />
        <Text style={styles.forgetText}>FORGET YOUR{'\n'}PASSWORD?</Text>
      </View>
      <View style={styles.rowContainer}>
        <InputText name='enter pin code' />
      </View>
      <ButtonGradient
        colors={[primary, secondary, tertiary]}
        text='SUBMIT'
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('ChangePassword')}
      />
    </KeyboardAvoidingView>
  );
};

PinCode.navigationOptions = {
  header: null
};

export default PinCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.base
  },
  forgetText: {
    fontSize: 30,
    fontWeight: '600',
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.sizes.base * 3
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: theme.sizes.base
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});
