export const spotifyLogin = (spotifyUser: string, userAuth: any) => (
    {
      type: 'SPOTIFY_LOGIN',
      payload: { user: spotifyUser, auth: userAuth }
    }
);

export const spotifyLogout = () => (
    {
        type: 'SPOTIFY_LOGOUT',
        payload: null
    }
);