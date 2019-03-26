export const createRoomAction = (roomName: string, description: string, limit: number, host: string, uuid: string) => (
    {
        type: 'CREATE_ROOM',
        websocket: true,
        payload: {
            roomName: roomName,
            roomDescription: description,
            limit: limit,
            host: host,
            uuid: uuid
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

export const enqueueSongAction = ( songID: string, songName: string, roomUuid: string, user: string ) => (
    {
        type: 'ENQUEUE_SONG',
        websocket: true,
        payload: {
            songID: songID,
            songName: songName,
            roomUuid: roomUuid,
            user: user
        }
    }
)

export const updateSongQueueAction = ( songID: string, songName: string ) => (
    {
        type: 'UPDATE_QUEUE',
        payload: {
            songID: songID,
            songName: songName,
        }
    }
)