import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../features/Login/LoginScreen';
import SignInScreen from '../features/Login/SignInScreen';
import SignUpScreen from '../features/Login/SignUpScreen';
import SpotifyScreen from '../features/Spotify/SpotifyScreen';
import AfoScreen from '../features/AllForOne/AfoScreen';

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  SignIn: { screen: SignInScreen },
  SignUp: { screen: SignUpScreen }
});

const BottomTab = createBottomTabNavigator({
  Spotify: { screen: SpotifyScreen },
  AllForOne: { screen: AfoScreen }
});

const Navigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Bottom : BottomTab
});

export default createAppContainer(Navigator);