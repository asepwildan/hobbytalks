import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";
import getThreadListReducer from "./getThreadList";

const rootReducer = combineReducers({
    getProfileReducer, getCommentReducer, getThreadListReducer
});

export default rootReducer;
