const initialState = {
    userInfo: {},
    threadUser: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
};

function getUserReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getUser/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getUser/get-succsess":
            return {
                ...state,
                userInfo: payload.getUser.data,
                threadUser: payload.getUser.data.threads,
                totalPage: payload.getUser.totalPage,
                nextPage: payload.getUser.nextPage,
                currentPage: payload.getUser.currentPage,
                loading: false,
                error: "",
            };
        case "getUser/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getUserReducer;
