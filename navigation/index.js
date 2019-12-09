import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import ForgetPassword from '../screens/ForgetPasswordScreen';
import PinCode from '../screens/PinCode';
import ForgetPasswordSms from '../screens/ForgetPasswordSms';
import ChangePassword from '../screens/ChangePassword';
import RegisterScreen from './../screens/RegisterScreen';
import ForgetPasswordScreen from './../screens/ForgetPasswordScreen';
import HomeScreen from './../screens/HomeScreen';
import SavedScreen from './../screens/SavedScreen';
import LoadingScreen from './../screens/LoadingScreen';
import TabBarIcon from './../components/TabBarIcon';
import NotificationReadScreen from './../screens/NotificationReadScreen';
import MyProfile from './../screens/MyProfile';
import HistoryUpComing from './../screens/HistoryUpComing';

const AuthStackNavigator = createStackNavigator(
  {
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

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: <TabBarIcon />
    })
  },
  Saved: {
    screen: SavedScreen
  },
  History: {
    screen: HistoryUpComing
  },
  Alert: {
    screen: NotificationReadScreen
  },
  Profile: {
    screen: MyProfile
  }
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  // Loading: LoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator
});

export default createAppContainer(AppSwitchNavigator);
