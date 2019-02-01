import React from 'react';
import { Text, Button, View, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';
import * as api from '../../api/login';

type state = { username: string, password: string, loading: boolean };

class SignInScreen extends React.Component<any, state> {
  constructor(props: any) {
    super(props);
    this.state = { username: 'ECSTACYS', password: 'SYCATSCE', loading: false };
  }
  
  render() {
    return (
      <View>
        <Text> SignIn </Text>
        <TextInput
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />

        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <Button
          title="Sign In"
          onPress={ () => { this.setState({loading: true}); this.userLogin() }}
        />
        { this.state.loading ? <Text> Loading ... </Text> : null }
      </View>
    );
  }

  
  userLogin(){   
    api.signIn(this.state.username, this.state.password).then((res: any) => {
      if(res.login){
        AsyncStorage.setItem('USER', this.state.username).then( () => {
          this.props.actions.login(this.state.username); //Pass user to the global store
          this.props.navigation.navigate('MyAccount'); //Bye bye
        }); //Stock username in localstorage, idk what to do
      } else {
        this.setState({loading: false});
      }
    });
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}


const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators({login}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);