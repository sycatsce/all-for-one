import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../features/Home/HomeScreen';
import LoginScreen from '../features/Login/LoginScreen';

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen }
});

export default createAppContainer(Navigator);