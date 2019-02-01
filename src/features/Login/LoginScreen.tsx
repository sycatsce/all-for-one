import React from 'react';
import { Text, Button, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';

type state = { loading: boolean };

class LoginScreen extends React.Component<any, state> {
  
  static navigationOptions = { header: null }
  
  constructor(props: any) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount(){
    this.setState({ loading: true });
    this.checkLogin();
  }
  
  componentWillUnmount(){
    this.setState({ loading: false });
  }

  render() {
    this.checkLogin();
    return (
      <View>
        <Text> Halftime </Text>
        <Button onPress={ () => this.props.navigation.push('SignIn') } title="Se connecter" />
        <Button onPress={ () => this.props.navigation.push('SignUp') } title="S'inscrire" />
        { this.state.loading ? <Text> Loading ... </Text> : null }
      </View>    
    );
  }

  checkLocalKey(){
    let _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('USER');
        if (value !== null) {
          return value;
        }
        else {
          return false;
        }
      } catch (error) {
          return false;
      }
    }
    return _retrieveData();
  }

  checkLogin(){
    this.checkLocalKey().then( (user_key: string|boolean) =>{
      if (user_key !== false){ //Si une clé est dans le local storage, on se connecte direct
        this.props.actions.login(user_key);
        this.props.navigation.navigate('MyAccount');
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);