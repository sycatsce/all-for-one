export const loginAction = (loggedAs: string) => (
    {
      type: 'USER_LOGIN',
      payload: loggedAs
    }
);

export const logoutAction = (loggedAs: string) => (
    {
        type: 'USER_LOGOUT',
        payload: loggedAs
    }
);