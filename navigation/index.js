import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

const screens = createStackNavigator(
  {
    LoginScreen,
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
