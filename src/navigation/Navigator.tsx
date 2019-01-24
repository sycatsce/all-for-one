import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../features/Home/HomeScreen';
import LoginScreen from '../features/Login/LoginScreen';
import SignInScreen from '../features/Login/SignInScreen';
import SignUpScreen from '../features/Login/SignUpScreen';

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen }
});

const Navigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Home: { screen: HomeScreen }
});

export default createAppContainer(Navigator);