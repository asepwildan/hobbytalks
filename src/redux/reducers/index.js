import { combineReducers } from "redux";
import getProfileReducer from "./getProfile";
import getCommentReducer from "./getComment";

const rootReducer = combineReducers({
    getProfileReducer, getCommentReducer
});

export default rootReducer;

// import { combineReducers } from "redux";

// import getProfileReducer from "./getprofile"

// import userReducer from "./user";
// import todoReducer from "./todo";

// const rootReducer = combineReducers({
//   userReducer,
//   todoReducer
// })

// export default rootReducer;
