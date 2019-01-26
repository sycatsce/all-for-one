import React from 'react';
import { Text, Button, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';

class MainMenuScreen extends React.Component<any> {
  render() {
    if (this.props.spotifyLogged == true){
      return(
        <View>
          <Text> Hi {this.props.loggedAs} </Text>
          <Button
            title="Créer une salle"
            onPress={ () => { } }
          />

          <Button
            title="Rejoindre une salle"
            onPress={ () => { this.props.actions.joinAction(); } }
          />
        </View>
      );
    } else {
      return (
        <View>
          <Text> Hi {this.props.loggedAs} </Text>
          <Text> Link your spotify account and start using All for One </Text>
        </View>
      );
    }
  }
} 

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs,
    spotifyLogged: state.spotifyReducer.spotifyLogged,
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreen);