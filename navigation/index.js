import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import PinCode from '../screens/PinCode';
import ForgetPasswordSms from '../screens/ForgetPasswordSms';
import ChangePassword from '../screens/ChangePassword';

const screens = createStackNavigator(
  {
    LoginScreen,
    ChangePassword,
    ForgetPasswordSms,
    PinCode,
    ForgetPassword,
    SplashScreen,
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
