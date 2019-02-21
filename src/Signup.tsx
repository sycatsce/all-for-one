/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, ImageBackground} from 'react-native';
import image from '../assets/img/Homepage.jpg';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

        <ImageBackground source={require('../assets/img/Homepage.jpg')} style={{width: '100%', height: '100%'}}>



      <View style={styles.container}>
        <Text style={styles.welcome}> Yourmail@gmail.com </Text>
        <Text style={styles.welcome}> Your password </Text>
          {/*<Button
              onPress={}
              style={styles.loginButton}
              title="Login"
          />*/}

          <Button
             // onPress={}
              style={styles.loginButton}
              title="Login"
             // color="#EC7891"
          />

          <Text style={styles.instructions}> Link your Spotify account to start using All For One </Text>
      </View>

        </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#000000',
    //backgroundImage: 'url(' + image + ')',
      //backgroundImage: 'url(' + require('../assets/img/Homepage.jpg') + ')'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
     // backgroundColor: '#000000',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
    loginButton: {


        backgroundColor: '#000000',
//borderRadius: 6,
    },
});
