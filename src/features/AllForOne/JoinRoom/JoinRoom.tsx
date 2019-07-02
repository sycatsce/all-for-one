import React from 'react';
import { Text, View, BackHandler, TouchableHighlight, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Button from 'apsl-react-native-button';
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
                        <ImageBackground source={require('../../../../assets/img/backgroundLayout.png')} style={{width: '100%', height: '100%', opacity: .9}}>

      <View>




<View>
        <SearchBar
          lightTheme={true}
          containerStyle={{ backgroundColor: 'white', width: '80%' }}
          inputContainerStyle={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)' }}
          onChangeText={ (needle: string) => { this.setState( {needle } ) }}
          value={this.state.needle}
        />
        <Button
                    onPress={ () => this.searchRoom(this.state.needle) }
                      style={{backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)', float: 'right'}}
                       textStyle={{fontSize: 18, color: 'white'}}
                 >
                  ok
                </Button>

                </View>

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
                              </ImageBackground>

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
      }).catch(() => { console.log('rorr'); })
    }
  }

  joinRoom(){
    this.props.actions.joinRoomAction(
      this.props.loggedAs,
      this.state.roomInfos.roomName,
      this.state.roomInfos.roomDescription,
      this.state.roomInfos.limit,
      this.state.roomInfos.host,
      this.state.roomInfos.uuid
    );
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