import { baseURI } from './constants';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const searchRoom = (needle: string): Promise<any> => {
    let getToken = async () => {
        return await AsyncStorage.getItem('AFO_TOKEN');
    }
    
    return getToken().then( (token) => { 
        return axios.post(baseURI + '/api/v1/search-room', {
            needle: needle
        }, { headers: { "x-access-token" : token } })
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    })
}
