import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import SpotifyAuth from './SpotifyAuth';

class SpotifyScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <Text> Hi {this.props.loggedAs} </Text>
        <Text> Spotify Account </Text>
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

export default connect(mapStateToProps)(SpotifyScreen);