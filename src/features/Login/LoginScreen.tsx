import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAction as login } from './actions';
import AppLayout from '../../components/layout';

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
    let content = (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ height: '20%'}} />

        <View style={{ }}>
          <Text style={{ fontFamily: 'GeosansLight', textAlign: 'center', fontSize: 60, color: 'black'}}> All For One </Text>
        </View>

        <View style={{ height: '50%' }} />

        <View style={{ width: '90%'}}>
          <Button 
            onPress={ () => this.props.navigation.push('SignIn') }
            style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#000000'}}>
              Sign In
          </Button>
          
          <Button
            onPress={ () => this.props.navigation.push('SignUp') }
            style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#000000'}}>
              Sign Up
          </Button>

          { this.state.loading ? <Text> Loading ... </Text> : null }
        </View>

      </View>
    );
    return (
      <AppLayout content={content}></AppLayout>  
    );
  }

  checkLocalKey(){
    let _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('AFO_USER');
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
      if (user_key !== false){
        this.props.actions.login(user_key);
        this.setState({ loading: false });
        this.props.navigation.navigate('MyAccount');
      } else {
        this.setState({ loading: false });
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