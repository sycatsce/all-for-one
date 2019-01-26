import { combineReducers } from "redux";
import loginReducer from "../features/Login/reducer";
import spotifyReducer from "../features/MyAccount/Spotify/reducer";
import afoReducer from "../features/AllForOne/reducer";

export default combineReducers({
    loginReducer,
    spotifyReducer,
    afoReducer
});