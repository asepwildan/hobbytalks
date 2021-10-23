import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";

const rootReducer = combineReducers({
    getProfileReducer,
});

export default rootReducer;
