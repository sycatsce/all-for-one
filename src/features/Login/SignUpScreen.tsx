import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';
import AppLayout from '../../components/layout';
import Button from 'apsl-react-native-button';
import { Hoshi } from 'react-native-textinput-effects';

type state = { username: string, password: string }

export default class SignUpScreen extends React.Component<any, state> {
  constructor(props: any) {
    super(props);
    this.state = { username: '', password: '' };
  }

  render() {
    let content = (
      <ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>

        <Text style={{ top: 80, color: '#FFFFFF', textAlign: 'center', fontSize: 35, }}> Sign Up </Text>


        <View style={{ padding: '15%', paddingTop: '35%' }} >

          <View>
            <Hoshi
              label={'Username'}
              onChangeText={(username: any) => this.setState({ username })}
              labelStyle={{ color: '#FFFFFF' }}
              inputStyle={{ color: '#FFFFFF', textAlign: 'center' }}
              style={{ width: '100%' }}
              borderColor={'#FFFFF'}
              value={this.state.username}
            />

            <Hoshi
              label={'Password'}
              onChangeText={(password: any) => this.setState({ password })}
              labelStyle={{ color: '#FFFFFF' }}
              inputStyle={{ color: '#FFFFFF', textAlign: 'center' }}
              borderColor={'#FFFFF'}
              value={this.state.password}
              secureTextEntry={true}
            />

            <Hoshi
              label={'Confirm your password'}
              onChangeText={(password: any) => this.setState({ password })}
              labelStyle={{ color: '#FFFFFF' }}
              inputStyle={{ color: '#FFFFFF', textAlign: 'center' }}
              borderColor={'#FFFFF'}
              value={this.state.password}
              secureTextEntry={true}
            />
          </View>
          <View>
            <Button
              title="Sign Up"
              onPress={() => { }}
              style={styles.SignUpButton}
              textStyle={{ fontSize: 18, color: '#FFFFFF' }}>
              Sign Up
					</Button>
          </View>

        </View>
      </ImageBackground>

    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }
}

const styles = StyleSheet.create({
  SignUpButton: {
    backgroundColor: 'rgba(236, 201, 212, 0.558011)',
    width: 110,
    height: 31,
    left: 90,
    top: 50,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: 'rgba(236, 201, 212, 0.7)',
  }
});
