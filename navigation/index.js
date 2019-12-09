import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import PinCode from '../screens/PinCode';
import ForgetPasswordSms from '../screens/ForgetPasswordSms';
import ChangePassword from '../screens/ChangePassword';
import RegisterScreen from './../screens/RegisterScreen';
import ForgetPasswordScreen from './../screens/ForgetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const screens = createStackNavigator(
  {
    HomeScreen,
    SplashScreen,
    ForgetPasswordSms,
    ChangePassword,
    ForgetPasswordScreen,
    PinCode,
    RegisterScreen,
    LoginScreen,
    ForgetPassword
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {}
    }
  }
);

export default createAppContainer(screens);
