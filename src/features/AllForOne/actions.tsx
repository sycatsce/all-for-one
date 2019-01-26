export const joinAction = () => (
    {
        type: 'JOIN_ROOM',
        payload: {
            description : "Joining a room",
            step: "JOIN"
        }
    }
);

export const createAction = () => (
    {
        type: 'CREATE_ROOM',
        payload: {
            description : "Creating a room",
            step: "CREATE"
        }
    }
);

export const backAction = (currentStep: any) => (
    {
        type: 'BACK',
        payload: currentStep
    }
);