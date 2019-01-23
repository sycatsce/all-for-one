import React from 'react';
import { Button } from 'react-native';
import Spotify from 'rn-spotify-sdk';

export default class SpotifyAuth extends React.Component<any> {

  componentDidMount(){

  }

  auth(){

  }

  render() {
    return (
      <Button
        title="Link Spotify"
        onPress={this.auth}
      />

    );
  }
} 