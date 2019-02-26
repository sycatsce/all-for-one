import React from 'react';
import { Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from './actions';
import AppLayout from '../../components/layout';
import { socket } from '../../api/socket';

type state = { queue: Object[] }
class AfoScreen extends React.Component<any, state> {

  static navigationOptions = { header: null }
  socket : any;
  
  constructor(props: any) {
    super(props);
    this.socket = socket;
    this.state = { queue: [] }
  }

  componentDidMount(){
    this.socket.on('new-participant', (datas: any) => { this.props.actions.updateParticipantsAction(datas.nbParticipants, datas.user); });
    this.socket.on('new-enqueued-song', (datas: any) => { this.props.actions.enqueueSongAction( datas.songID, datas.songName, this.props.roomUuid, this.props.loggedAs ); });
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
            : this.props.songsQueue.map( (value:any, key: any) => {
                return ( <Text> {key} {value.songName} </Text> );
              })
            }
            <Button
                  onPress={ () => { this.props.navigation.push('Enqueue'); } }
                  style={{backgroundColor: 'white'}}
                  textStyle={{fontSize: 18, color: 'black'}}
            >
              Enqueue a song
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