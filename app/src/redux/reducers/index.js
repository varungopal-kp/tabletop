import { combineReducers } from "redux";
import auth from "./auth";
import player from "./player";


const rootReducer = combineReducers({ auth, player });

export default rootReducer;
