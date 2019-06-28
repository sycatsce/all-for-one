import io from 'socket.io-client';
import { baseURI } from './constants';

export const socket = io(baseURI + "/music-rooms");