import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';

import LoginScreen from '../features/Login/LoginScreen';
import SignInScreen from '../features/Login/SignInScreen';
import SignUpScreen from '../features/Login/SignUpScreen';
import AfoScreen from '../features/AllForOne/AfoScreen';
import MyAccountScreen from '../features/MyAccount/MyAccountScreen';
import JoinRoom from '../features/AllForOne/JoinRoom/JoinRoom';
import MainMenuScreen from '../features/AllForOne/MainMenu/MainMenuScreen';

const LoginStack = createStackNavigator({
  Login: { screen: LoginScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen },
});

const BottomTabNavigator = createBottomTabNavigator({  
  MyAccount: { screen: MyAccountScreen },
  AllForOne: { screen: AfoScreen },
});

const Navigator = createSwitchNavigator({
  Login: LoginStack,
  Bottom : BottomTabNavigator,
  Main: { screen: MainMenuScreen },
});

export default createAppContainer(Navigator);