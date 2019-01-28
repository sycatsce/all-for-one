import React from 'react';
import { Text, Button, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from './actions';

class AfoScreen extends React.Component<any> {

  static navigationOptions = { header: null } 

  render() {
    if (this.props.spotifyLogged == true){
      return(
        <View>
          <Text> Hi {this.props.loggedAs} </Text>
          <Button
            title="Créer une salle"
            onPress={ () => { this.props.navigation.push('Create'); } }
          />

          <Button
            title="Rejoindre une salle"
            onPress={ () => { this.props.navigation.push('Join'); } }
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
    step: state.afoReducer.datas.step,
    description: state.afoReducer.datas.description
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);