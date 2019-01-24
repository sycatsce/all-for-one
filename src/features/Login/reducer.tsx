const INITIAL_STATE = {
    loggedAs : "Random",
};

const loginReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign( {}, state, { loggedAs : action.payload } );

        case 'USER_LOGOUT':
            return Object.assign( {}, state, { loggedAs : action.payload } );

        default:
            return state
        }
};

export default loginReducer;