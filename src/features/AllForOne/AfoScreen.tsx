import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Button from 'apsl-react-native-button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from './actions';
import AppLayout from '../../components/layout';
import { socket } from '../../api/socket';
import Spotify from 'rn-spotify-sdk';

type state = { musicPos: number }

class AfoScreen extends React.Component<any, state> {

  static navigationOptions = { header: null }
  socket: any;

  constructor(props: any) {
    super(props);
    this.socket = socket;
    this.state = { musicPos: 0 }
  }

  componentDidMount() {
    this.socket.on('new-participant', (datas: any) => { this.props.actions.updateParticipantsAction(datas.nbParticipants, datas.user); });
    this.socket.on('update-song-queue', (datas: any) => { this.props.actions.updateSongQueueAction(datas.songID, datas.songName); });
  }

  render() {
    var content;
    if (this.props.inARoom == true) {
      content = (
        <ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>
          <View style={{ borderRadius: 10, height: '40%', padding: '5%' }}>

            <View style={{ height: '50%' }}>
              <Text style={{ color: 'white' }}> {this.props.roomName} </Text>
              <Text style={{ color: 'white' }}> {this.props.roomDescription} </Text>
              <Text style={{ color: 'white' }}> {this.props.nbParticipants} / {this.props.limit} </Text>
              {this.props.songsQueue.length == 0 ?
                <Text style={{ color: 'white' }}> No Songs in the queue </Text>
                : this.props.songsQueue.map((value: any, key: any) => {
                  return (<Text style={{ color: 'white' }}> {key + 1 + ". " + value.songName} </Text>);
                })
              }
            </View>

            {this.props.songsQueue.length > 0 ?
              <Button
                onPress={() => { this.startQueue(); }}
                style={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)', }}
                textStyle={{ fontSize: 18, color: 'white', borderColor: 'rgba(236, 201, 212, 0.7)' }}
              >
                Start
              </Button> : null
            }

            <Button
              onPress={() => { this.pause(); }}
            > Pause
            </Button>

            <Button
              onPress={() => { this.resume(); }}
            > Resume
            </Button>

            <Button
              onPress={() => { this.props.navigation.push('Enqueue'); }}
              style={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)', }}
              textStyle={{ fontSize: 18, color: 'white', borderColor: 'rgba(236, 201, 212, 0.7)' }}
            >
              Enqueue a song
            </Button>

            <Button
              onPress={() => { this.props.actions.disconnectionAction(this.props.loggedAs, this.props.roomName, this.props.roomUuid) }}
              style={{ backgroundColor: 'white' }}
              textStyle={{ fontSize: 18, color: 'black' }}
            >
              Leave Room
            </Button>
          </View>
        </ImageBackground>
      );
    } else {
      content = (
        <ImageBackground source={require('../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>
          <View>

            <View style={{ borderRadius: 10, height: '30%', padding: '5%', top: '120%' }}>

              <Button
                onPress={() => { this.props.navigation.push('Create') }}
                style={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)' }}
                textStyle={{ fontSize: 18, color: 'white' }}
              >
                Créer une salle
                </Button>
              <View style={{ height: 5 }} />
              <Button
                onPress={() => { this.props.navigation.push('Join'); }}
                style={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)' }}
                textStyle={{ fontSize: 18, color: 'white' }}
              >
                Rejoindre une salle
                </Button>
            </View>
          </View>
        </ImageBackground>
      );
    }
    return (<AppLayout content={content}></AppLayout>)
  }

  startQueue() {
    if (this.props.songsQueue[this.state.musicPos]) {
      Spotify.playURI('spotify:track:' + this.props.songsQueue[this.state.musicPos].songID, 0, 0).then((error: any) => {
        if (!error) {
          Spotify.once('trackChange', (event: any) => {
            Spotify.once('trackChange', (event: any) => {
              this.setState({ musicPos: this.state.musicPos + 1 });
              this.startQueue();
            });
          });
        }
      });
    }
  }

  pause() {
    Spotify.setPlaying(false).then(() => { console.log('Paused'); });
  }

  resume() {
    Spotify.setPlaying(true).then(() => { console.log('Resumed'); });
  }

}

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    spotifyLogged: state.spotifyReducer.spotifyLogged,
    inARoom: state.afoReducer.inARoom,
    isHost: state.afoReducer.isHost,
    roomName: state.afoReducer.roomName,
    roomDescription: state.afoReducer.roomDescription,
    roomUuid: state.afoReducer.roomUuid,
    limit: state.afoReducer.limit,
    nbParticipants: state.afoReducer.nbParticipants,
    participantsList: state.afoReducer.participantsList,
    songsQueue: state.afoReducer.songsQueue
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);