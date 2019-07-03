const INITIAL_STATE = {
    inARoom : false,
    isHost : false,
    roomName : null,
    roomDescription: null,
    roomUuid: null,
    limit: null,
    nbParticipants: null,
    participantsList: [],
    songsQueue: []
};

const afoReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case "CREATE_ROOM":
            let cNewState = {
                roomName: action.payload.roomName,
                roomDescription: action.payload.roomDescription,
                roomUuid: action.payload.uuid,
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
                roomUuid: action.payload.uuid,
                limit: action.payload.limit,
                inARoom: true,
                isHost: false,
                participantsList: [ ...state.participantsList, action.payload.user]
            }
            return Object.assign( {}, state, jNewState );
        case "NEW_USER":
            return Object.assign( {}, state, { nbParticipants: action.payload.nbParticipants, participantsList: [ ...state.participantsList, action.payload.user] } );
        case "ENQUEUE_SONG":
            return Object.assign( {}, state, { songsQueue: [ ...state.songsQueue, { songName: action.payload.songName, songID: action.payload.songID } ] } );
        case "UPDATE_QUEUE":
            return Object.assign( {}, state, { songsQueue: [ ...state.songsQueue, { songName: action.payload.songName, songID: action.payload.songID } ] } );
        case "DISCONNECTION":
            return INITIAL_STATE;
        case "USER_LOGOUT":
            return INITIAL_STATE;
        default:
            return state
    }

};

export default afoReducer;