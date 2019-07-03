import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../features/Login/LoginScreen';
import SignInScreen from '../features/Login/SignInScreen';
import SignUpScreen from '../features/Login/SignUpScreen';
import AfoScreen from '../features/AllForOne/AfoScreen';
import MyAccountScreen from '../features/MyAccount/MyAccountScreen';
import JoinRoom from '../features/AllForOne/JoinRoom/JoinRoom';
import CreateRoom from '../features/AllForOne/CreateRoom/CreateRoom';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import EnqueueSongScreen from '../features/AllForOne/EnqueueSong/EnqueueSong';

const LoginStack = createStackNavigator({
  Login: { screen: LoginScreen },
  SignIn: { 
    screen: SignInScreen,
    navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#8DAAE6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'GeosansLight'
      }
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#8DAAE6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'GeosansLight'
      }
    }
  },
});

const AfoStack = createStackNavigator({
  Main: AfoScreen,
  Create: CreateRoom,
  Join: JoinRoom,
  Enqueue: EnqueueSongScreen,

});

const BottomTabNavigator = createBottomTabNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: {
      tabBarIcon: ({}) => (
        <Icon name="user" size={20} color="#000" />
      )
    }
  },
  AllForOne: {
    screen: AfoStack,
    navigationOptions: {
      tabBarIcon: ({}) => (
        <Icon name="circle" size={20} color="#000" />
      )
    }
  }
}, {
  tabBarOptions:{
    activeTintColor: '#000',
    style: { backgroundColor: '#fff' }
  }
});

const Navigator = createSwitchNavigator({
  Login: LoginStack,
  Bottom : BottomTabNavigator,
});

export default createAppContainer(Navigator);