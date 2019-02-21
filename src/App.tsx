/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Button from 'apsl-react-native-button'
import image from '../assets/img/Homepage.jpg';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (

            <ImageBackground source={require('../assets/img/homepageBackground.jpg')} style={{width: '100%', height: '100%', opacity: .9}}>



                <View style={styles.container}>
                    <Text style={styles.welcome}> Yourmail@gmail.com </Text>

                    <Text style={styles.ligne}>_____________________________________________ </Text>

                    <Text style={styles.welcome}> Your password </Text>
                    <Text style={styles.ligne}>_____________________________________________ </Text>


                    <Button style={styles.loginButton}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </Button>
                    <Text style={styles.instructions}> Don’t have an account ? </Text>


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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
        top: 15,
        fontSize: 15,
    },
    instructions: {
        top: 85,
        color: '#FFFFFF',
    },
    loginButton: {
        backgroundColor: 'rgba(236, 120, 145, 0.633674)',
        width: 110,
        height: 31,
        left: 150,
        top: 90,
        fontSize: 58,
        borderRadius: 6,
        borderColor: '#EC7891',
    },
    loginText: {
        color: '#FFFFFF',
    },
    ligne: {
        color: '#FFFFFF',
        borderColor			  : '#FFFFFF',
        borderWidth		  : 0,
        borderStyle			  : 'solid',
    },
});
