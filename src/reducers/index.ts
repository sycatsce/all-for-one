import { combineReducers } from "redux";
import loginReducer from "../features/Login/reducer";
import afoReducer from "../features/AllForOne/reducer";
import spotifyReducer from "../features/Spotify/reducer";

export default combineReducers({
    loginReducer,
    spotifyReducer,
    afoReducer
});