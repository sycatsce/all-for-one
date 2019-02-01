import React from 'react';
import { Button, View, Text} from 'react-native';
import Spotify from 'rn-spotify-sdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SpotifyActions from './actions';

class SpotifyAuth extends React.Component<any> {

  componentDidMount(){
    this.initSpotify();
  }

  initSpotify(){
    Spotify.initialize({
      "clientID":"1902ccc05b954f14bc57d7cf73363e52",
      "sessionUserDefaultsKey":"SpotifySession",
      "redirectURL":"com.allforone://auth",
      "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
    }).then((loggedIn: any) => {
      if(loggedIn) {
        console.log('Déjà connecté');
        Spotify.getMe().then((user: any) => {
          Spotify.getAuthAsync().then((auth: any) => {
            this.props.actions.spotifyLogin(user, auth);
          });
        });
      }
      else {
        this.setState({ loggedIn: false });
        console.log('Pas connecté');
      }
    }).catch((error: any) => {
      console.log(error);
    });
  }

  auth(){
		Spotify.login().then((loggedIn: any) => {
			if(loggedIn){
        Spotify.getMe().then((user: any) => {
          Spotify.getAuthAsync().then((auth: any) => {
            this.props.actions.spotifyLogin(user, auth);
          });
        });
      }
			else{
				console.log('Pas pu se connecter');
			}
		}).catch((error: any) => {
			console.log(error);
    });
  }

  logout(){
    Spotify.logout().then(() => {
      this.props.actions.spotifyLogout();
    });
  }

  render() {
    if (this.props.spotifyLogged == false){
      return (
        <Button
          title="Link Spotify"
          onPress={ () => this.auth() }
        />
      );
    } else {
      return (
        <View>
          <Text> Spotify </Text>
          <Text> Logged as { this.props.spotifyUser.display_name } </Text>
          <Button
            title="Logout"
            onPress={ () => this.logout() }
          />
        </View>
      )
    }
  }
}

const mapStateToProps = (state:any) => {
  return {
    spotifyLogged: state.spotifyReducer.spotifyLogged,
    spotifyUser: state.spotifyReducer.spotifyUser
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(SpotifyActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyAuth);