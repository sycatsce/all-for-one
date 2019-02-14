import React from 'react';
import { Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from './actions';
import AppLayout from '../../components/layout';

type state = { test: string };

class AfoScreen extends React.Component<any, state> {

  static navigationOptions = { header: null }

	constructor(props: any) {
		super(props);
		this.state = { test: 'aoe' };
  }
  
  render() {
    var content;
    if (this.props.spotifyLogged == true){
      if(this.props.inARoom == true){
        content = (
          <View>
            <Text> {this.props.roomName} </Text>
            <Text> {this.props.roomDescription} </Text>
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
                  {this.props.inARoom ? 'true' : 'false'}
                </Button>
                <View style={{height: 5}}/>
                <Button
                  onPress={ () => { this.props.navigation.push('Join'); } }
                  style={{backgroundColor: 'black'}}
                  textStyle={{fontSize: 18, color: 'white'}}
                >
                  Rejoindre une salle
                </Button>
                <Button
                  onPress={ () => { this.setState({test: 'test'}) } }
                  style={{backgroundColor: 'black'}}
                  textStyle={{fontSize: 18, color: 'white'}}
                >
                  {this.state.test}
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
    limit: state.afoReducer.limit
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);