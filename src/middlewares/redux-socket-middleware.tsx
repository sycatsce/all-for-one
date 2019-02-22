import UUIDGenerator from 'react-native-uuid-generator';
import io from 'socket.io-client';
import { socket } from '../api/socket';

export const socketMiddleware = (uri: any) => {
    return (store: any) => {
        var ioClient = socket;
        return (next: any) => (action: any) => {
            if( action.websocket == true ){
                if (action.type == "CREATE_ROOM"){
                    UUIDGenerator.getRandomUUID().then((uuid: string) => {
                        action.payload.uuid = uuid;
                        ioClient.emit('create-room', action.payload);
                        next(action);
                    });
                }
                if (action.type == "JOIN_ROOM"){
                    ioClient.emit('join-room', action.payload);
                    next(action);
                }
            } else {
                next(action);
            }
        }
    }
}