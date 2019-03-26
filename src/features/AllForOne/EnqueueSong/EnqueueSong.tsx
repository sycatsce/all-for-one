import React from 'react';
import { socket } from '../../../api/socket';
import SpotifySearch from '../../Spotify/SpotifySearch';
import AppLayout from '../../../components/layout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

class EnqueueSongScreen extends React.Component<any> {

  socket : any;
  
  constructor(props: any) {
    super(props);
    this.socket = socket;
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => { this.handleBackPress(); return true; });
  }

  render() {
    var content = (
        <SpotifySearch func={ (songID: string, songName: string) => { this.props.actions.enqueueSongAction(songID, songName, this.props.roomUuid, this.props.loggedAs); } }/>
    );
    return ( <AppLayout content={content}></AppLayout> )
  }

  handleBackPress(){
    this.props.navigation.dispatch( NavigationActions.back( { key: null }) );
  }
}

const mapStateToProps = (state: any) => {
  return {
    songsQueue: state.afoReducer.songsQueue,
    roomUuid: state.afoReducer.roomUuid,
    loggedAs: state.loginReducer.loggedAs
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(EnqueueSongScreen);