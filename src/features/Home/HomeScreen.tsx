import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component<any> {
  render() {
    return (
      <View>
        <Text> Hi {this.props.loggedAs} </Text>
        <Text> Start using All for One </Text>
      </View>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    loggedAs: state.loginReducer.loggedAs
  }
}

export default connect(mapStateToProps)(HomeScreen);