import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";
import getThreadListReducer from "./getThreadList";
import getThreadDetail from "./getThreadDetail";
import getUserReducer from "./getUser";

const rootReducer = combineReducers({
    getProfileReducer,
    getCommentReducer,
    getThreadListReducer,
    getThreadDetail,
    getUserReducer,
});

export default rootReducer;
