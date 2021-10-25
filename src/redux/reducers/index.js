import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";

const rootReducer = combineReducers({
    getProfileReducer, getCommentReducer
});

export default rootReducer;
