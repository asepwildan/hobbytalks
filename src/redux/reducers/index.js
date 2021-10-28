import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";
import getThreadListReducer from "./getThreadList";
import getThreadDetail from "./getThreadDetail";

const rootReducer = combineReducers({
    getProfileReducer,
    getCommentReducer,
    getThreadListReducer,
    getThreadDetail,
});

export default rootReducer;
