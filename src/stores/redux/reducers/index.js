import { combineReducers } from "redux";
import accountReducer from "./account";
import profileReducer from "./profile";
import { modalReducer, conversationReducer, messageReducer } from "./message";

const rootReducer = combineReducers({
  accountReducer,
  profileReducer,
  messageReducer,
  modalReducer,
  conversationReducer,
});

export default rootReducer;
