import React from 'react';
import { Text, Button, View, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AfoActions from '../actions';

class CreateRoom extends React.Component<any> {

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', () => { this.handleBackPress(); return true; });
  }


  render() {
    return (
      <View>
        <Text> Create a Room </Text>
      </View>
    );
  }

  handleBackPress(){
    this.props.actions.backAction(this.props.step);
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  actions : bindActionCreators(AfoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);