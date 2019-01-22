const INITIAL_STATE = {
    isLogged : false,
};

const loginReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case 'USER_LOGIN':
            return Object.assign( {}, state, { isLogged : action.payload } );

        case 'USER_LOGOUT':
            return Object.assign( {}, state, { isLogged : action.payload } );

        default:
            return state
        }
};

export default loginReducer;