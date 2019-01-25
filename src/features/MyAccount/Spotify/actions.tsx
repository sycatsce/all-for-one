export const spotifyLogin = (spotifyUser: string) => (
    {
      type: 'SPOTIFY_LOGIN',
      payload: spotifyUser
    }
);

export const spotifyLogout = () => (
    {
        type: 'SPOTIFY_LOGOUT',
        payload: null
    }
);