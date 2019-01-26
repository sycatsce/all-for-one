import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';

class JoinRoom extends React.Component<any> {
  render() {
    return (
      <View>
        <Text> Hi {this.props.loggedAs} </Text>
        <Text> Join a Room </Text>
      </View>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}

export default connect(mapStateToProps)(JoinRoom);