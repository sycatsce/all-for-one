import React from 'react';
import { Text, View } from 'react-native';
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
  socket : any;
  
  constructor(props: any) {
    super(props);
    this.socket = socket;
    this.state = { musicPos: 0 }
  }

  componentDidMount(){
    this.socket.on('new-participant', (datas: any) => { this.props.actions.updateParticipantsAction(datas.nbParticipants, datas.user); });
    this.socket.on('update-song-queue', (datas: any) => { this.props.actions.updateSongQueueAction( datas.songID, datas.songName ); });
  }

  render() {
    var content;
    if (this.props.spotifyLogged == true){
      if(this.props.inARoom == true){
        content = (
          <View>
            <Text> {this.props.roomName} </Text>
            <Text> {this.props.roomDescription} </Text>
            <Text> {this.props.nbParticipants} / {this.props.limit} </Text>
            { this.props.songsQueue.length == 0 ?
              <Text> No Songs in the queue </Text>
            : this.props.songsQueue.map( (value: any, key: any) => {
                return ( <Text> {key + 1 + ". " + value.songName} </Text> );
              })
            }

            { this.props.songsQueue.length > 0 ? 
              <Button
                onPress={ () => { this.startQueue(); }}
              >
                Start Queue
              </Button> : null }

            <Button
                  onPress={ () => { this.props.navigation.push('Enqueue'); } }
                  style={{backgroundColor: 'white'}}
                  textStyle={{fontSize: 18, color: 'black'}}
            >
              Enqueue a song
            </Button>

            <Button
                  onPress={ () => { this.props.navigation.push('Enqueue'); } }
                  style={{backgroundColor: 'white'}}
                  textStyle={{fontSize: 18, color: 'black'}}
            >
              Leave Room
            </Button>
          </View>
        );
      } else {
          content = (
            <View>
              <View style={{ borderRadius: 10, height: '30%', padding:'5%'}}>
                <Button
                  onPress={ () => { this.props.navigation.push('Create') } }
                  style={{backgroundColor: 'black'}}
                  textStyle={{fontSize: 18, color: 'white'}}
                >
                  Créer une salle
                </Button>
                <View style={{height: 5}}/>
                <Button
                  onPress={ () => { this.props.navigation.push('Join'); } }
                  style={{backgroundColor: 'black'}}
                  textStyle={{fontSize: 18, color: 'white'}}
                >
                  Rejoindre une salle
                </Button>
              </View>
            </View>
          );
      }
    } else {
        content =  (
        <View>
          <Text> Hi {this.props.loggedAs} </Text>
          <Text> Link your spotify account and start using All for One </Text>
        </View>
      );
    }
    return ( <AppLayout content={content}></AppLayout> )
  }

  startQueue(){
    if (this.props.songsQueue[this.state.musicPos]){
      Spotify.playURI('spotify:track:' + this.props.songsQueue[this.state.musicPos].songID, 0, 0).then( (error: any) => {
        if(!error){
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

} 

const mapStateToProps = (state:any) => {
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

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);