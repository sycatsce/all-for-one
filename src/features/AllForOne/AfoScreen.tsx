import React from 'react';
import { Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from './actions';
import AppLayout from '../../components/layout';
import SpotifySearch from '../Spotify/SpotifySearch';

class AfoScreen extends React.Component<any> {

  static navigationOptions = { header: null } 

  render() {
    if (this.props.spotifyLogged == true){
      var content = (
        <View>
          <View style={{ borderRadius: 10, height: '30%', padding:'5%'}}>
            <Button
              onPress={ () => { this.props.navigation.push('Create'); } }
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
          
          <View style={{height: 40}}></View>
          
          <View style={{ borderRadius: 10, height: '30%', padding:'5%'}}>
            <SpotifySearch />
          </View>
        </View>
      );
    } else {
      var content =  (
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
    step: state.afoReducer.datas.step,
    description: state.afoReducer.datas.description
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);