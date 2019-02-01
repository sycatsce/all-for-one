import { baseURI } from './constants';
import axios from 'axios';

export const signIn = (username: string, password: string): Promise<any> => {
    return axios.post(baseURI + '/login', {
        username: username,
        password: password
    })
    .then((response) => {
        return response.data;
    })
}

export const signUp = (username: string, password: string) => {

}