const INITIAL_STATE = {
    spotifyLogged : false,
    spotifyUser: null
};

const spotifyReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {
    switch (action.type) {
        case 'SPOTIFY_LOGIN':
            return Object.assign( {}, state, { spotifyLogged : true, spotifyUser : action.payload } );

        case 'SPOTIFY_LOGOUT':
            return Object.assign( {}, state, { spotifyLogged : false, spotifyUser : null } );

        default:
            return state
    }
};

export default spotifyReducer;