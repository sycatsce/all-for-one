export const loginAction = (loggedAs: string) => (
    {
      type: 'USER_LOGIN',
      payload: loggedAs
    }
);