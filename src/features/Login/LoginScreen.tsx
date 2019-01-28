import React from 'react';
import { Text, Button, View, AsyncStorage } from 'react-native';

export default class LoginScreen extends React.Component<any> {
  
  static navigationOptions = { header: null } 
  
  componentDidMount(){
    this.checkLogin();
  }
  
  render() {
    this.checkLogin();
    return (
      <View>
        <Text> Double Bang 5 </Text>
        <Button onPress={ () => this.props.navigation.push('SignIn') } title="Se connecter" />
        <Button onPress={ () => this.props.navigation.push('SignUp') } title="S'inscrire" />
      </View>    
    );
  }

  checkLocalKey(){
    let _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('USER_KEY');
        if (value !== null) {
          return value;
        }
        else {
          return false;
        }
      } catch (error) {
          return false;
      }
    }
    return _retrieveData();
  }

  checkServerKey(user_key:string|boolean){
    //API Call to check that
    return new Promise((resolve, reject) =>{
      resolve(true);
    })
  }

  checkLogin(){
    this.checkLocalKey().then( (user_key: string|boolean) =>{
      if (user_key !== false){
        this.checkServerKey(user_key).then( (logged:any) => {
          if (logged){ this.props.navigation.navigate('AllForOne'); }
        });
      }
    });
  }
}