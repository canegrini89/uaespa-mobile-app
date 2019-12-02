import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './../screens/HomeScreen';

const screens = createStackNavigator(
  {
    HomeScreen
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
