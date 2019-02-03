export const spotifyLogin = (spotifyUser: string, userAuth: any, Spotify: any) => (
    {
      type: 'SPOTIFY_LOGIN',
      payload: { user: spotifyUser, auth: userAuth, Spotify: Spotify }
    }
);

export const spotifyLogout = () => (
    {
        type: 'SPOTIFY_LOGOUT',
        payload: null
    }
);