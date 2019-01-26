const INITIAL_STATE = {
    datas : {
        description: "Picking an option",
        step: "SELECT",
    }
};

const afoReducer = (state = INITIAL_STATE, action: {type: string, payload:any}) => {

    switch (action.type) {
        case 'SELECT_OPTION':
            return Object.assign( {}, state, { datas : action.payload } );

        case 'JOIN_ROOM':
            return Object.assign( {}, state, { datas : action.payload } );

        case 'CREATE_ROOM':
            return Object.assign( {}, state, { datas : action.payload } );
        default:
            return state
        }
};

export default afoReducer;