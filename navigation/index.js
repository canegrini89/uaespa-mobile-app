import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './../screens/HomeScreen';

const screens = createStackNavigator({
  HomeScreen
});

export default createAppContainer(screens);
