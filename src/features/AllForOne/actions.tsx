export const createRoomAction = (roomName: string, description: string, limit: number, host: string) => (
    {
        type: 'CREATE_ROOM',
        websocket: true,
        payload: {
            roomName: roomName,
            roomDescription: description,
            limit: limit,
            host: host
        }
    }
);

export const joinRoomAction = (user: string, roomName: string, description: string, limit: number, host: string, uuid: string) => (
    {
        type: 'JOIN_ROOM',
        websocket: true,
        payload: {
            roomName: roomName,
            roomDescription: description,
            limit: limit,
            host: host,
            user: user,
            uuid: uuid
        }
    }
);

export const updateParticipantsAction = ( nbParticipants: number, user: string ) => (
    {
        type: 'NEW_USER',
        payload: {
            nbParticipants: nbParticipants,
            user: user
        }
    }
);