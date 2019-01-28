import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';

import LoginScreen from '../features/Login/LoginScreen';
import SignInScreen from '../features/Login/SignInScreen';
import SignUpScreen from '../features/Login/SignUpScreen';
import AfoScreen from '../features/AllForOne/AfoScreen';
import MyAccountScreen from '../features/MyAccount/MyAccountScreen';
import JoinRoom from '../features/AllForOne/JoinRoom/JoinRoom';
import CreateRoom from '../features/AllForOne/CreateRoom/CreateRoom';

const LoginStack = createStackNavigator({
  Login: { screen: LoginScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
});

const AfoStack = createStackNavigator({
  Main: AfoScreen,
  Create: CreateRoom,
  Join: JoinRoom
});

const BottomTabNavigator = createBottomTabNavigator({  
  MyAccount: { screen: MyAccountScreen },
  AllForOne: AfoStack
});

const Navigator = createSwitchNavigator({
  Login: LoginStack,
  Bottom : BottomTabNavigator,
});

export default createAppContainer(Navigator);