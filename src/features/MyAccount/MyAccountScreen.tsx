import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import SpotifyAuth from './Spotify/SpotifyAuth';

class MyAccountScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <Text> My Account </Text>
        <SpotifyAuth loggedIn={ () => this.props.navigation.navigate('AllForOne') }/>
      </View>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}

export default connect(mapStateToProps)(MyAccountScreen);