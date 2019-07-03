import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import SpotifyAuth from '../Spotify/SpotifyAuth';
import AppLayout from '../../components/layout';

class MyAccountScreen extends React.Component<any> {
  render() {
    let content = (
      <ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>

        <View style={{ height: '30%', padding: '5%' }}>
          <Text style={{ fontSize: 21, color: 'white', textAlign: 'center' }}> My Account </Text>
          
          <View style={{ height: '50%', top: '20%' }}>
            <SpotifyAuth loggedIn={() => this.props.navigation.navigate('AllForOne')} />
          </View>

        </View>
      </ImageBackground>

    );
    return (<AppLayout content={content}></AppLayout>)
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    spotifyUser: state.spotifyReducer.spotifyUser
  }
}

export default connect(mapStateToProps)(MyAccountScreen);