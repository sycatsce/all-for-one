import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import SpotifyAuth from './Spotify/SpotifyAuth';

class MyAccountScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <Text> Hi {this.props.loggedAs} </Text>
        <Text> My Account </Text>
        <SpotifyAuth />
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