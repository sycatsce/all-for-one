import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import * as LoginActions from './actions';
import { bindActionCreators } from 'redux';

class LoginScreen extends React.Component<any> {
  constructor(props:any){
    super(props);
    this.state = {
      isLogged: false
    }
  }
  render() {
    let isLogged = this.props.isLogged ? "Oui" : "Non";
    return (
      <View>
        <Text> Double Bang 5 </Text>
        <Button onPress={ () => this.props.navigation.navigate('Home') } title="Go to home" />

        <Button onPress={ () => this.props.actions.userLogin() } title="Se connecter" />
        <Button onPress={ () => this.props.actions.userLogout() } title="Se déconnecter" />

        <Text> Connecté ? {isLogged} </Text>
      </View>    
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    isLogged: state.loginReducer.isLogged
  }
}


const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(LoginActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);