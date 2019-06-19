import React from 'react';
import { View, Text} from 'react-native';
import Button from 'apsl-react-native-button';
import Spotify from 'rn-spotify-sdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SpotifyActions from './actions';
import { spotifyAuthInfos } from '../../api/constants';

class SpotifyAuth extends React.Component<any> {

  componentDidMount(){
    this.initSpotify();
  }

  initSpotify(){
    Spotify.initialize(spotifyAuthInfos).then((loggedIn: any) => {
      if(loggedIn) {
        console.log('Déjà connecté');
        Spotify.getMe().then((user: any) => {
          Spotify.getSessionAsync().then((auth: any) => {
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
      console.log('Etape 1 - Login', loggedIn);
      if (loggedIn){
        Spotify.getMe().then((user: any) => {
          console.log('Etape 2 - User infos', user);
          Spotify.getSessionAsync().then((auth: any) => {
            console.log('Etape 3 - Auth infos', auth);
            this.props.actions.spotifyLogin(user, auth);
          });
        });
      }
    }).catch( (error: any) => { console.log(error); });
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
          onPress={ () => this.auth() }
          style={{backgroundColor: 'black'}}
          textStyle={{fontSize: 18, color: 'white'}}
        >
          Link Spotify
        </Button>
      );
    } else {
      return (
        <View>
          <Text> Spotify account linked : { this.props.spotifyUser.display_name } </Text>
          <Button
            onPress={ () => this.logout() }
            style={{backgroundColor: 'black'}}
            textStyle={{fontSize: 18, color: 'white'}}
          >
          Unlink
        </Button>
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