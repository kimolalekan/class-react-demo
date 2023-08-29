import { combineReducers } from "redux";
import accountReducer from "./account";
import profileReducer from "./profile";

const rootReducer = combineReducers({ accountReducer, profileReducer });

export default rootReducer;
