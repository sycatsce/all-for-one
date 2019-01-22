import React from 'react';
import { Text, Button, View } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> Double Bang 5 </Text>
        <Button onPress={ () => this.props.navigation.navigate('Home') } title="Go to home" />
      </View>    
    );
  }
}
