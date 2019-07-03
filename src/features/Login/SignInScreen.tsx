import React from 'react';
import { StyleSheet, Text, View, ImageBackground, AsyncStorage  } from 'react-native';
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
		this.state = { username: 'LANGE', password: 'LANGE', loading: false };
	}

	render() {
		let content = (
			<ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>

				<Text style={{ marginTop:'10%', color: '#FFFFFF', textAlign: 'center', fontSize: 35, }}> Sign In </Text>

        <View style={{ padding: '15%' }} >

						<Hoshi
							label={'Username'}
							onChangeText={(username: any) => this.setState({ username })}
							labelStyle={{ color: 'white', textAlign: 'center' }}
							inputStyle={{ color: 'white' }}
							style={{ width: '100%' }}
							borderColor={'#FFFFF'}
							value={this.state.username}
						/>

						<View style={{ height: '5%' }}></View>

						<Hoshi
							label={'Password'}
							onChangeText={(password: any) => this.setState({ password })}
							labelStyle={{ color: 'white', textAlign: 'center' }}
							inputStyle={{ color: 'white' }}
							borderColor={'#FFFFF'}
							value={this.state.password}
							secureTextEntry={true}
						/>

            <View style={{ height: '20%' }}></View>
            
            <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
              <Button
                title="Sign In"
                onPress={() => { this.setState({ loading: true }); this.userLogin() }}
                style={styles.loginButton}
                textStyle={{ fontSize: 18, color: '#FFFFFF' }}>
                Sign In
              </Button>
            </View>

				</View>
			</ImageBackground>
		);
		return (
			<AppLayout content={content}></AppLayout>
		);
	}


	userLogin() {
		api.signIn(this.state.username, this.state.password).then((res: any) => {
			if (res.login) {
				AsyncStorage.setItem('AFO_TOKEN', res.token).then(() => {
					AsyncStorage.setItem('AFO_USER', this.state.username).then(() => {
						this.props.actions.login(this.state.username); //Pass user to the global store
						this.props.navigation.navigate('MyAccount'); //Bye bye
					});
				});
			} else {
				this.setState({ loading: false });
			}
		}).catch((err) => {
			this.setState({ loading: false });
			console.log(err);
		})
	}
}

const styles = StyleSheet.create({
	loginButton: {
    backgroundColor: 'rgba(236, 201, 212, 0.558011)',
    width: 110,
    height: 31,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 6,
    borderColor: 'rgba(236, 201, 212, 0.7)',
	}
});

const mapStateToProps = (state: any) => {
	return {
		loggedAs: state.loginReducer.loggedAs
	}
}


const mapDispatchToProps = (dispatch: any) => ({
	actions: bindActionCreators({ login }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);