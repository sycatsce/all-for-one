import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import Button from 'apsl-react-native-button';
import CombinedButton from 'react-native-combined-button';

type Props = {};
export default class Rooms extends Component<Props> {
  render() {
    return (

        <ImageBackground source={require('../assets/img/backgroundLayout.png')} style={{width: '100%', height: '100%'}}>

                     <Text style={{top: 80, color: '#FFFFFF', textAlign: 'center', fontSize: 35,}}> Welcome Faty </Text>


                			<View style={{ padding: '3%', paddingTop: '35%' }} >


                				<View>


                					 <Button
                                          title="Signup"
                                          style={styles.SignupButton}
                                          textStyle={{fontSize: 14, color: '#FFFFFF'}}>
                                          Create a Room
                                    </Button>

                                     <Button
                                          title="Signup"
                                          style={styles.SignupButton}
                                          textStyle={{fontSize: 14, color: '#FFFFFF'}}>
                                          Join a Room
                                     </Button>

                				</View>

                							</View>

                </ImageBackground>

    );
  }
}


const styles = StyleSheet.create({

  SignupButton: {
          backgroundColor: 'rgba(236, 201, 212, 0.558011)',
          width: 110,
          height: 31,
          left: 137,
          top: 87,
          paddingTop: 10,
          paddingBottom:10,
          borderRadius: 6,
          borderColor: 'rgba(236, 201, 212, 0.558011)',
      },



});
