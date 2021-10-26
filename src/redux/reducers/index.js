import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";
import getThreadDetail from "./getThreadDetail";

const rootReducer = combineReducers({
    getProfileReducer,
    getCommentReducer,
    getThreadDetail,
});

export default rootReducer;
