const INITIAL_STATE = {
    inARoom : false,
    isHost : false,
    roomName : null,
    roomDescription: null,
    limit: null,
    nbParticipants: null,
    participantsList: []
};

const afoReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case "CREATE_ROOM":
            let cparticipantsList = [ ...state.participantsList, action.payload.user]
            let cNewState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                limit: action.payload.limit,
                inARoom: true,
                isHost: true,
                nbParticipants: 1,
                participantsList: [ action.payload.user ]
            }
            return Object.assign( {}, state, cNewState );
        case "JOIN_ROOM":
            let jNewState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                limit: action.payload.limit,
                inARoom: true,
                isHost: false,
                participantsList: [ ...state.participantsList, action.payload.user]
            }
            return Object.assign( {}, state, jNewState );
        case "NEW_USER":
            return Object.assign( {}, state, { nbParticipants: action.payload.nbParticipants, participantsList: [ ...state.participantsList, action.payload.user] } )
        default:
            return state
    }

};

export default afoReducer;