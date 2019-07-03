//Server Base URI
export const baseURI = "http://6d5fe2e4.ngrok.io";

//Spotify API Base URI 
export const baseSpotifyUri = "https://api.spotify.com/v1";

//Spotify Application Infos
export const spotifyAuthInfos = {
    "clientID":"CLIENT-ID",
    "sessionUserDefaultsKey":"SpotifySession",
    "redirectURL":"REDIRECT-URL",
    "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
    "tokenSwapURL": baseURI + "/swap",
    "tokenRefreshURL": baseURI + "/refresh",
};