import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Button from 'apsl-react-native-button';
import { Hoshi } from 'react-native-textinput-effects';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (

            <ImageBackground source={require('../assets/img/homepageBackground.jpg')} style={{width: '100%', height: '100%', opacity: .9}}>

            			<View style={{ padding: '19%', paddingTop: '54%', textAlign:'center' }} >

            				<View>
            					<Hoshi
            						label={'Username'}
            						labelStyle={{ color: 'white', textAlign:'center'}}
            						inputStyle={{ color: 'white' }}
                                   borderColor={'#FFFFF'}
            						style={{ width: '100%'}}
            					/>

            					<View style={{ height: '5%' }}></View>

            					<Hoshi
            						label={'Password'}
            						labelStyle={{ color: 'white'}}
            						inputStyle={{ color: 'white' }}
                                   borderColor={'#FFFFF'}
                                   style={{ width: '100%'}}
            					/>
            				</View>
            				            			</View>

            				<View style={{ bottom:60, left:14 }}>
            					<Button
            						title="Login"
            						style={styles.loginButton}
                        			textStyle={{fontSize: 14, color: '#FFFFFF'}}>
            						Login
            					</Button>
            					  <Text style={{top: 90, color: '#FFFFFF', left: 115}}> Don’t have an account ? </Text>
            				</View>

            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: 'rgba(236, 120, 145, 0.633674)',
        width: 110,
        height: 31,
        left: 137,
        top: 90,
        paddingTop: 10,
        paddingBottom:10,
        borderRadius: 6,
        borderColor: '#EC7891',
    }
});
