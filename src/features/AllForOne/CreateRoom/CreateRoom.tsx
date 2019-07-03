import React from 'react';
import { Text, View, ImageBackground, BackHandler, Picker } from 'react-native';
import Button from 'apsl-react-native-button';
import { Hoshi } from 'react-native-textinput-effects';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';
import AppLayout from '../../../components/layout';
import { NavigationActions } from 'react-navigation';
import UUIDGenerator from 'react-native-uuid-generator';

type state = { roomName: string, description: string, limit: number };

class CreateRoom extends React.Component<any, state> {

  constructor(props: any) {
    super(props);
    this.state = { roomName: this.props.loggedAs + "'s room", description: "My room", limit: 1 };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => { this.handleBackPress(); return true; });
  }

  render() {
    let content = (
      <ImageBackground source={require('../../../../assets/img/backgroundLayout.png')} style={{ width: '100%', height: '100%', opacity: .9 }}>

        <View style={{ padding: '5%', paddingTop: '10%' }}>
          <Text style={{ fontSize: 21, color: 'white', textAlign: 'center', bottom: '10%' }}> Create a Room </Text>

          <Hoshi
            value={this.state.roomName}
            onChangeText={(roomName: any) => this.setState({ roomName })}
            label={'Room Name'}
            inputPadding={16}


            labelStyle={{ color: '#FFFFFF' }}
            inputStyle={{ color: '#FFFFFF', textAlign: 'center' }}
            style={{ width: '100%' }}
            borderColor={'#FFFFF'}
          />

          <Hoshi
            value={this.state.description}
            onChangeText={(description: any) => this.setState({ description })}
            label={'Room Description'}
            inputPadding={16}

            labelStyle={{ color: '#FFFFFF' }}
            inputStyle={{ color: '#FFFFFF', textAlign: 'center' }}
            style={{ width: '100%' }}
            borderColor={'#FFFFF'}
          />

          <View style={{ display: 'flex' }}>
            <Text
              style={{ color: 'white', width: '100%' }}
            > Room limit </Text>
            <Picker
              selectedValue={this.state.limit.toString()}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => this.setState({ limit: parseInt(itemValue) })}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />

            </Picker>
          </View>

          <View style={{ width: '30%', marginLeft: '36%' }}>
            <Button
              onPress={() => { this.createRoom(); }}
              style={{ backgroundColor: 'rgba(236, 201, 212, 0.558011)', borderColor: 'rgba(236, 201, 212, 0.558011)' }}
              textStyle={{ fontSize: 18, color: 'white', borderColor: 'rgba(236, 201, 212, 0.7)' }}
            >
              Create
					</Button>
          </View>
        </View>
      </ImageBackground>

    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }

  handleBackPress() {
    this.props.navigation.dispatch(NavigationActions.back({ key: null }));
  }

  createRoom() {
    UUIDGenerator.getRandomUUID().then((uuid: string) => {
      this.props.actions.createRoomAction(this.state.roomName, this.state.description, this.state.limit, this.props.loggedAs, uuid);
      this.props.navigation.dispatch(NavigationActions.back({ key: null }));
    });
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    inARoom: state.afoReducer.inARoom,
    isHost: state.afoReducer.isHost
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);