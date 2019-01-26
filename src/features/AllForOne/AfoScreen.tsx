import React from 'react';
import { Text, Button, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenuScreen from './MainMenu/MainMenuScreen';
import * as AfoActions from './actions';
import JoinRoom from './JoinRoom/JoinRoom';
import CreateRoom from './CreateRoom/CreateRoom';

class AfoScreen extends React.Component<any> {
  render() {
    switch(this.props.step){
      case 'SELECT':
        return <MainMenuScreen />
      case 'JOIN':
        return <JoinRoom />
      case 'CREATE':
        return <CreateRoom />
    }
  }
} 

const mapStateToProps = (state:any) => {
  return {
    step: state.afoReducer.datas.step,
    description: state.afoReducer.datas.description
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(AfoScreen);