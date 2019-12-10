import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { theme } from '../constants';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons';

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

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <FontAwesome name='home' size={30} color={theme.colors.tertiary} />
      )
    }
  },
  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <Ionicons name='md-heart' size={30} color={theme.colors.tertiary} />
      )
    }
  },
  History: {
    screen: HistoryUpComing
  },
  Alert: {
    screen: NotificationReadScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons
          name='bell'
          size={30}
          color={theme.colors.tertiary}
        />
      )
    }
  },
  Profile: {
    screen: MyProfile,
    navigationOptions: {
      tabBarIcon: () => (
        <FontAwesome name='user' size={30} color={theme.colors.tertiary} />
      )
    }
  }
});

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    defaultNavigationOptions: {
      //   headerStyle: () => (
      //   )
      // }
    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  // Loading: LoadingScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator
});

export default createAppContainer(AppSwitchNavigator);
