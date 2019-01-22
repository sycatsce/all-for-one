import React from 'react';
import { Text, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Title",
    headerTitleStyle: {
      fontFamily: "Verdana",
      fontWeight: "200"
    }
  }

  render() {
    return (
      <View>
        <Text> Binks </Text>
        <Button onPress={ () => this.props.navigation.navigate('Login') } title="Go to login" />
      </View>
    );
  }
}
