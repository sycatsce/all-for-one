export const createRoomAction = (roomName: string, description: string, limit: number, host: string) => (
    {
        type: 'CREATE_ROOM',
        websocket: true,
        payload: {
            roomName: roomName,
            description: description,
            limit: limit,
            host: host
        }
    }
);