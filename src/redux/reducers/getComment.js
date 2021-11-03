const initialState = {
    commentList: {},
    commentDetail: [],
    loading: false,
    error: "",
};

function getCommentReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getcomment/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getcomment/get-succsess":
            return {
                ...state,
                commentList: payload.getComment,
                commentDetail: payload.getComment.data,
                loading: false,
                error: "",
            };
        case "getcomment/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error.message,
            };
        default:
            return state;
    }
}

export default getCommentReducer;
