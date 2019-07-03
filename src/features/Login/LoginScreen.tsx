import React from 'react';
import { Text, View, AsyncStorage, ImageBackground, StyleSheet, Image } from 'react-native';
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

  componentDidMount() {
    this.setState({ loading: true });
    this.checkLogin();
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    let content = (
      <ImageBackground source={require('../../../assets/img/homepageBackground.jpg')} style={{ width: '100%', height: '100%', opacity: .8 }}>

        <View style={{ alignItems: 'center', flex: 1, flexDirection: 'column' }}>

          <Image resizeMode='contain' style={{ width: '90%', height: '21%' }} source={require('../../../assets/img/logoHome.png')} />

          <View style={{ height: '0%' }} />

          <View style={{ width: '90%', position: 'absolute', bottom: 0 }}>
            <Button
              onPress={() => this.props.navigation.push('SignIn')}
              style={styles.homeButtons}
              textStyle={{ fontSize: 18, color: '#fff' }}>
              Sign In
            </Button>

            <Button
              onPress={() => this.props.navigation.push('SignUp')}
              style={styles.homeButtons}
              textStyle={{ fontSize: 18, color: '#fff' }}>
              Sign Up
            </Button>

            {this.state.loading ? <Text> Loading ... </Text> : null}
          </View>

        </View>
      </ImageBackground>
    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }

  checkLocalKey() {
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

  checkLogin() {
    this.checkLocalKey().then((user_key: string | boolean) => {
      if (user_key !== false) {
        this.props.actions.login(user_key);
        this.setState({ loading: false });
        this.props.navigation.navigate('MyAccount');
      } else {
        this.setState({ loading: false });
      }
    });
  }
}

const styles = StyleSheet.create({
	homeButtons: {
		backgroundColor: 'rgba(236, 120, 145, 0.633674)',
		paddingTop: 15,
		paddingBottom: 15,
		paddingRight: 20,
		paddingLeft: 20,
		borderRadius: 6,
    borderColor: 'rgba(236, 120, 145, 0.633674)',
	}
});

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}


const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);