const INITIAL_STATE = {
    inARoom : false,
    isHost : false,
    roomName : null,
    roomDescription: null,
    limit: null,
};

const afoReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case "CREATE_ROOM":
            let newState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                limit: action.payload.limit,
                inARoom: true,
                isHost: true
            }
            return Object.assign( {}, state, newState );
        default:
            return state
    }

};

export default afoReducer;