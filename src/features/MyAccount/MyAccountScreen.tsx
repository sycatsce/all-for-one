import React from 'react';
import { Text, View, ImageBackground, AsyncStorage } from 'react-native';
import Button from 'apsl-react-native-button';
import { connect } from 'react-redux';
import SpotifyAuth from '../Spotify/SpotifyAuth';
import AppLayout from '../../components/layout';
import { bindActionCreators } from 'redux';
import * as MyAccoutActions from './actions';

class MyAccountScreen extends React.Component<any> {
  render() {
    let content = (
      <ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>

        <View style={{ flex: 1, padding: '5%' }}>
          <Text style={{ fontSize: 21, color: 'white', textAlign: 'center' }}> My Account </Text>

          <SpotifyAuth loggedIn={() => this.props.navigation.navigate('AllForOne')} />

          <Button
            onPress={() => this.logout()}
            style={{ backgroundColor: 'rgba(189, 205, 241, 0.8)', borderColor: 'rgba(189, 205, 241, 0.8)', width: '70%' }}
            textStyle={{ fontSize: 13, color: 'white' }}
          >
            Logout
          </Button>
        </View>
      </ImageBackground>

    );
    return (<AppLayout content={content}></AppLayout>)
  }

  logout(){
    AsyncStorage.removeItem('AFO_TOKEN').then( () => {
      AsyncStorage.removeItem('AFO_USER').then( () => {
        this.props.actions.logoutAction();
        this.props.navigation.navigate('Login');
      })
    })
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    spotifyUser: state.spotifyReducer.spotifyUser
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators( MyAccoutActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountScreen);