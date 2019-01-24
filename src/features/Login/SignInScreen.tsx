import React from 'react';
import { Text, Button, View, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';

type state = { username: string, password: string }

class SignInScreen extends React.Component<any, state> {
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

        <Button
          title="Sign In"
          onPress={ () => this.userLogin() }
        />
      </View>
    );
  }

  
  userLogin(){
    //API Call, check inputs
    let _storeData = async () => {      
      //await AsyncStorage.setItem('USER_KEY', 'myKey');
      this.props.actions.login(this.state.username);
      this.props.navigation.navigate('Home');
    }
    _storeData();
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