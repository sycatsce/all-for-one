import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Button from 'apsl-react-native-button';
import { Hoshi } from 'react-native-textinput-effects';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';
import * as api from '../../api/login';
import AppLayout from '../../components/layout';

type state = { username: string, password: string, loading: boolean };

class SignInScreen extends React.Component<any, state> {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#7c1111',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
			fontWeight: 'bold',
			fontFamily: 'GeosansLight'
    },
  };

	constructor(props: any) {
		super(props);
		this.state = { username: 'ECSTACYS', password: 'SYCATSCE', loading: false };
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
				<View style={{ position: 'relative', height: '70%' }}></View>
				<View>
					<Button
						title="Sign In"
						onPress={() => { this.setState({ loading: true }); this.userLogin() }}
						style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#003366'}}>
						Sign In
					</Button>
				</View>

			</View>
		);
		return (
			<AppLayout content={content}></AppLayout>
		);
	}


	userLogin() {
		api.signIn(this.state.username, this.state.password).then((res: any) => {
			if (res.login) {
				AsyncStorage.setItem('USER', this.state.username).then(() => {
					this.props.actions.login(this.state.username); //Pass user to the global store
					this.props.navigation.navigate('MyAccount'); //Bye bye
				}); //Stock username in localstorage, idk what to do
			} else {
				this.setState({ loading: false });
			}
		}).catch((err) => {
			this.setState({ loading: false });
			console.log(err);
		})
	}
}

const mapStateToProps = (state: any) => {
	return {
		loggedAs: state.loginReducer.loggedAs
	}
}


const mapDispatchToProps = (dispatch: any) => ({
	actions: bindActionCreators({ login }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);