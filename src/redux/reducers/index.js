import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";
import getThreadListReducer from "./getThreadList";
import getThreadDetail from "./getThreadDetail";
import getUserReducer from "./getUser";
import getThreadSearchReducer from "./getSearch";
import valueForumReducer from "./valueForum";

const rootReducer = combineReducers({
    getProfileReducer,
    getCommentReducer,
    getThreadListReducer,
    getThreadDetail,
    getUserReducer,
    getThreadSearchReducer,
    valueForumReducer,
});

export default rootReducer;
