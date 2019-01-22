export const userLogin = () => (
    {
      type: 'USER_LOGIN',
      payload: true
    }
  );

export const userLogout = () => (
    {
        type: 'USER_LOGOUT',
        payload: false
    }
);