import React from 'react';
import { Text, View, BackHandler, Picker } from 'react-native';
import Button from 'apsl-react-native-button';
import { Kaede } from 'react-native-textinput-effects';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';
import AppLayout from '../../../components/layout';
import { NavigationActions, StackActions } from 'react-navigation';

type state = { roomName: string, description: string, limit: number };

class CreateRoom extends React.Component<any, state> {

	constructor(props: any) {
		super(props);
		this.state = { roomName: this.props.loggedAs + "'s room", description: "My room", limit: 1 };
	}

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => { this.handleBackPress(); return true; });
  }

  render() {
    let content = (
      <View>
        <Text> Create a Room </Text>

        <Kaede
          value={this.state.roomName}
          onChangeText={(roomName: any) => this.setState({ roomName })}
          label={'Room Name'}
          inputPadding={16}
        />

        <Kaede
          value={this.state.description}
          onChangeText={(description: any) => this.setState({ description })}
          label={'Room Description'}
          inputPadding={16}
        />

        <View style={{display: 'flex'}}>
          <Text> Room limit </Text>
          <Picker
            selectedValue={this.state.limit.toString()}
            style={{height: 50, width: 100}}
            onValueChange={ (itemValue, itemIndex) => this.setState({ limit: parseInt(itemValue) }) }
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />

          </Picker>    
        </View>

				<View>
					<Button
						onPress={() => { this.createRoom(); }}
						style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#003366'}}
          >
						Create
					</Button>
				</View>
      </View>
    );
    return (
      <AppLayout content={content}></AppLayout>
    );
  }

  handleBackPress(){
    this.props.actions.backAction(this.props.step);
  }

  createRoom(){
    this.props.actions.createRoomAction( this.state.roomName, this.state.description, this.state.limit, this.props.loggedAs );
    this.props.navigation.dispatch( NavigationActions.back( { key: null }) );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    inARoom: state.afoReducer.inARoom,
    isHost: state.afoReducer.isHost
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);