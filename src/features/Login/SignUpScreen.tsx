import React from 'react';
import { View } from 'react-native';
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
			<View style={{ padding: '5%', paddingTop: '10%' }} >

				<View>
					<Hoshi
						label={'Username'}
						onChangeText={(username: any) => this.setState({ username })}
						labelStyle={{ color: '#000' }}
						inputStyle={{ color: '#000' }}
						style={{ width: '100%' }}
						value={this.state.username}
					/>

					<View style={{ height: '5%' }}></View>

					<Hoshi
						label={'Password'}
						onChangeText={(password: any) => this.setState({ password })}
						labelStyle={{ color: '#000' }}
						inputStyle={{ color: '#000' }}
            value={this.state.password}
            secureTextEntry={true}
					/>
				</View>
				<View style={{ height: '70%' }}></View>
				<View>
					<Button
						title="Sign In"
						onPress={() => { }}
						style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#003366'}}>
						Sign Up
					</Button>
				</View>

      </View>
    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }
}
