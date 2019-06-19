/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';

type Props = {};
export default class Signup extends Component<Props> {
  render() {
    return (


        <ImageBackground source={require('../assets/img/backgroundLayout.png')} style={{width: '100%', height: '100%'}}>

            <View style={styles.container}>
                <Text style={styles.title}> Welcome </Text>
            </View>



            <View style={styles.container}>

            <TextInput


      />
                <Text style={styles.welcome}> Recent Rooms </Text>
                <Text style={styles.welcome}> No recent rooms, start your own room. </Text>

                <Text style={styles.welcome}> Live Rooms </Text>
                <Text style={styles.welcome}>No available rooms, start your own room. </Text>

                   <View style={{flex: 1, flexDirection: 'row'}}>
                       <Image source={require('../assets/img/icon/favorite_24px_outlined.png')}/>
                       <Image source={require('../assets/img/icon/play_circle_filled_24px_outlined.png')}  style={styles.playButton}/>
                       <Image source={require('../assets/img/icon/search_24px_outlined.png')}/>
                  </View>










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

  playButton: {

  bottom: 20,
  left: 4,
        //  backgroundColor: 'rgba(255, 255, 255, 0.7)',


  },

    title: {
        bottom: 50,
        color: '#FFFFFF',
        fontSize: 24,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 20,
        color: '#FFFFFF',
       // top: 15,
        fontSize: 15,
        bottom: 150,

    },
    instructions: {
        top: 85,
        color: '#FFFFFF',
    },
    loginButton: {
        //backgroundColor: 'rgba(236, 120, 145, 0.633674)',
        backgroundColor: 'rgba(236, 201, 212, 0.558011)',
        width: 110,
        height: 31,
        left: 150,
        bottom: 90,
        fontSize: 58,
        borderRadius: 6,
        borderColor: '#ECC9D4',
    },
    loginText: {
        color: '#FFFFFF',
    },
    ligne: {
        color: '#FFFFFF',
        borderColor			  : '#FFFFFF',
        borderWidth		  : 0,
        borderStyle			  : 'solid',
        bottom: 150,

    },
});
