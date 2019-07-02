import { baseURI } from './constants';
import axios from 'axios';

export const signIn = (username: string, password: string): Promise<any> => {
    return axios.post(baseURI + '/api/v1/login', {
        username: username,
        password: password
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    })
}

export const signUp = (username: string, password: string) => {
    return axios.post(baseURI + '/api/v1/user', {
        username: username,
        password: password
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    })
}