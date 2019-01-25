export const spotifyLogin = (loggedAs: string) => (
    {
      type: 'SPOTIFY_LOGIN',
      payload: loggedAs
    }
);

export const spotifyLogout = (loggedAs: string) => (
    {
        type: 'SPOTIFY_LOGOUT',
        payload: loggedAs
    }
);