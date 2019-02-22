import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import SpotifyAuth from '../Spotify/SpotifyAuth';
import AppLayout from '../../components/layout';

class MyAccountScreen extends React.Component<any> {
  render() {
    let content = (
      <View style={{ height: '30%', padding:'5%'}}>
        <Text> My Account </Text>
        <SpotifyAuth loggedIn={ () => this.props.navigation.navigate('AllForOne') }/>
      </View>
    );
    return( <AppLayout content={content}></AppLayout> )
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}

export default connect(mapStateToProps)(MyAccountScreen);