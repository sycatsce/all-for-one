import io from 'socket.io-client';
import UUIDGenerator from 'react-native-uuid-generator';

export const socketMiddleware = (url: string) => {
    return (store: any) => {

        let socket = io(url);

        return (next: any) => (action: any) => {
            if( action.websocket == true ){
                if (action.type == "CREATE_ROOM"){
                    UUIDGenerator.getRandomUUID().then((uuid: string) => {
                        action.payload.uuid = uuid;
                        socket.emit('create-room', action.payload);
                        next(action);
                    });
                }
                if (action.type == "JOIN_ROOM"){
                    socket.emit('join-room', action.payload);
                    next(action);
                }
            } else {
                next(action);
            }
        }
    }
}