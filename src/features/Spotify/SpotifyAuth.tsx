import React from 'react';
import { Button } from 'react-native';
import Spotify from 'rn-spotify-sdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { spotifyOptions } from './const';
import * as SpotifyActions from './actions';

class SpotifyAuth extends React.Component<any> {

  constructor(props: any){
    super(props);
    this.state = ({
      spotifyInitialized: false
    });
  }

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
      this.setState({spotifyInitialized: true});
      if(loggedIn) {
        this.props.actions.spotifyLogin();
        console.log('Déjà connecté');
        Spotify.getMe().then((result: any) => {
          console.log(result);
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
    console.log(this.props);
		Spotify.login().then((loggedIn: any) => {
			if(loggedIn){
        this.props.actions.spotifyLogin();
        Spotify.getMe().then((result: any) => {
          console.log(result);
        });
      }
			else{
				console.log('Pas pu se connecter');
			}
		}).catch((error: any) => {
			console.log(error);
    });
  }

  render() {
    return (
      <Button
        title="Link Spotify"
        onPress={ () => this.auth() }
      />
    );
  }
}


const mapStateToProps = (state:any) => {
  return {
    spotifyLogged: state.spotifyReducer.spotifyLogged
  }
}


const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(SpotifyActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyAuth);