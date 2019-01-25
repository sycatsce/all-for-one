import React from 'react';
import { Text, Button, View, TextInput } from 'react-native';

type state = { username: string, password: string }

export default class SignUpScreen extends React.Component<any, state> {
  constructor(props: any) {
    super(props);
    this.state = { username: 'Username', password: 'Password' };
  }
  
  render() {
    return (
      <View>
        <Text> SignUp </Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />

        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
      </View>
    );
  }
}
