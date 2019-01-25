import { combineReducers } from "redux";
import loginReducer from "../features/Login/reducer";
import spotifyReducer from "../features/Spotify/reducer";

export default combineReducers({
    loginReducer,
    spotifyReducer
});