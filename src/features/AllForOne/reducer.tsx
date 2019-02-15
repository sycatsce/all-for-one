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
            let cNewState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                limit: action.payload.limit,
                inARoom: true,
                isHost: true
            }
            return Object.assign( {}, state, cNewState );
        case "JOIN_ROOM":
            let jNewState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                limit: action.payload.limit,
                inARoom: true,
                isHost: false
            }
        return Object.assign( {}, state, jNewState );
        default:
            return state
    }

};

export default afoReducer;