//Server Base URI
export const baseURI = "http://localhost:8080"; // The server URL, put the ngrok tunnel here if you're using one

//Spotify API Base URI 
export const baseSpotifyUri = "https://api.spotify.com/v1";

//Spotify Application Infos
export const spotifyAuthInfos = {
    "clientID":"CLIENT-ID", // Your Spotify App Client ID
    "sessionUserDefaultsKey":"SpotifySession",
    "redirectURL":"REDIRECT-URL", // Tell the app where to redirect once the authentication is done. Set it up in the Spotify dashboard
    "scopes":["user-read-private", "playlist-read", "playlist-read-private", "streaming"],
    "tokenSwapURL": baseURI + "/swap",
    "tokenRefreshURL": baseURI + "/refresh",
};