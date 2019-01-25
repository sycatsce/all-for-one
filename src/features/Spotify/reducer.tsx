const INITIAL_STATE = {
    spotifyLogged : false,
};

const spotifyReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case 'SPOTIFY_LOGIN':
            return Object.assign( {}, state, { spotifyLogged : true } );

        case 'SPOTIFY_LOGOUT':
            return Object.assign( {}, state, { spotifyLogged : false } );

        default:
            return state
        }
};

export default spotifyReducer;