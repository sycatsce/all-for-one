import { baseURI } from './constants';
import axios from 'axios';

export const searchRoom = (needle: string): Promise<any> => {
    return axios.post(baseURI + '/search-room', {
        needle: needle,
    })
    .then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    });
}
