import React from 'react';
import { Text, Button, View, BackHandler, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';
import AppLayout from '../../../components/layout';
import { SearchBar } from 'react-native-elements';
import * as api from '../../../api/rooms';
import { NavigationActions } from 'react-navigation';
import { socket } from '../../../api/socket';

type state = {
  needle: string,
  dataSource: any,
  isModalVisible: boolean, 
  roomInfos: { 
    roomName: string,
    roomDescription: string,
    limit: number,
    host: string,
    uuid: string,
    nbParticipants: number
  }
};

class JoinRoom extends React.Component<any, state> {

  socket: any;

  constructor(props: any) {
    super(props);
    this.socket = socket;
    this.state = {
      needle: '',
      dataSource: [],
      isModalVisible: false,
      roomInfos: { roomName: '', roomDescription: '', limit: 0, host: '', uuid: '', nbParticipants: 0}
    };
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => { this.handleBackPress(); return true; });
    this.socket.on('new-participant', (datas: any) => { this.props.actions.updateParticipantsAction(datas.nbParticipants, datas.user); });
  }

  render() {
    let content = (
      <View>
        <Button title="ok" onPress={ () => this.searchRoom(this.state.needle) }></Button>
        <SearchBar
          lightTheme={true}
          containerStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{ backgroundColor: 'black' }}
          onChangeText={ (needle: string) => { this.setState( {needle } ) }}
          value={this.state.needle}
        />

        <View>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.dataSource}
            renderItem={ ({item}:any) =>
              <TouchableHighlight
                  onPress={ () => { this._toggleModal(item); }}
                  style={{ height: 40}}
              >
                <View>
                    <Text>
                        {item.host + " - " + item.roomName + " - " + item.roomDescription + " - " + item.nbParticipants + "/" + item.limit} 
                    </Text>
                </View>
              </TouchableHighlight> 
            }
          />
        </View>

        <Modal style={{ backgroundColor: 'white', marginTop: '40%', marginBottom: '40%' }} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>

            <Text> Room : {this.state.roomInfos.roomName} </Text>
            <Text> Description : {this.state.roomInfos.roomDescription} </Text>
            <Text> Host : {this.state.roomInfos.host} </Text>
            <Text> </Text>

            <Button title="Join" onPress={ () => { this.joinRoom(); } } />
            <Button title="Cancel" onPress={ () => { this._toggleModal(); } } />
          </View>
        </Modal>

      </View>
    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }

  _toggleModal = (item?: {roomName: string, roomDescription: string, limit: number, host: string, uuid: string, nbParticipants: number}) => {
    if (item){
      this.setState({ roomInfos: item });
    }
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  handleBackPress(){
    this.props.navigation.dispatch( NavigationActions.back( { key: null }) );
  }

  searchRoom(needle: string){
    if(needle){
      this.setState({ needle }); 
      api.searchRoom(this.state.needle).then((datas:any) => {
        if(!datas.error){
          var rooms: Array<Object> = [];
          for( var uuid in datas ){
            rooms.push({
              roomName: datas[uuid].roomName,
              roomDescription: datas[uuid].roomDescription,
              host: datas[uuid].host,
              uuid: datas[uuid].uuid,
              limit: datas[uuid].limit,
              nbParticipants: datas[uuid].nbParticipants
            })
          }
          this.setState({dataSource: rooms});
          console.log(this.state.dataSource);
        }
      }).catch((error:any) => { console.log(error); })
    }
  }

  joinRoom(){
    var { roomName, roomDescription, limit, host, uuid } = this.state.roomInfos;
    var { loggedAs } = this.props;
    this.props.actions.joinRoomAction( loggedAs, roomName, roomDescription, limit, host, uuid );
    this.props.navigation.dispatch( NavigationActions.back( { key: null }) );
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);  