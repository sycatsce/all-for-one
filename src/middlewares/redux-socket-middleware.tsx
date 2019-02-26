import { socket } from '../api/socket';

export const socketMiddleware = () => {
    return (store: any) => {
        var ioClient = socket;
        return (next: any) => (action: any) => {
            if( action.websocket == true ){
                if (action.type == "CREATE_ROOM"){
                    ioClient.emit('create-room', action.payload);
                    next(action);
                }
                if (action.type == "JOIN_ROOM"){
                    ioClient.emit('join-room', action.payload);
                    next(action);
                }
                if (action.type == "ENQUEUE_SONG"){
                    ioClient.emit('enqueue-song', action.payload);
                    next(action);
                }
            } else {
                next(action);
            }
        }
    }
}