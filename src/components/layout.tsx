import React from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';

export default class AppLayout extends React.Component<any> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#fff',
        flex: 1,
    },
})