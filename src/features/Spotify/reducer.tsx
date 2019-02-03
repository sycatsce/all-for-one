const INITIAL_STATE = {
    spotifyLogged : false,
    spotifyUser: null, //User connected
    userAuth: null //Auth info (token ... );
};

const spotifyReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {
    switch (action.type) {
        case 'SPOTIFY_LOGIN':
            return Object.assign( {}, state, { spotifyLogged : true, spotifyUser : action.payload.user, userAuth : action.payload.auth } );

        case 'SPOTIFY_LOGOUT':
            return Object.assign( {}, state, { spotifyLogged : false, spotifyUser : null, userAuth : null } );

        default:
            return state
    }
};

export default spotifyReducer;