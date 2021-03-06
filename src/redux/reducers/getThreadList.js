const initialState = {
    threadList: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
};

function getThreadListReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getthread/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getthread/get-succsess":
            return {
                ...state,
                threadList: payload.getThreadList.data,
                totalPage: payload.getThreadList.totalPage,
                nextPage: payload.getThreadList.nextPage,
                currentPage: payload.getThreadList.currentPage,
                loading: false,
                error: "",
            };
        case "getthread/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case "getThreadCategory/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getThreadCategory/get-succsess":
            return {
                ...state,
                threadList: payload.getThreadCategory.data,
                totalPage: payload.getThreadCategory.totalPage,
                nextPage: payload.getThreadCategory.nextPage,
                currentPage: payload.getThreadCategory.currentPage,
                loading: false,
                error: "",
            };
        case "getThreadCategory/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case "getFollowingThread/get-start":
            return {
                ...state,
                loading: true,
            };

        case "getFollowingThread/get-succsess":
            return {
                ...state,
                threadList: payload.getThreadCategory.data,
                totalPage: payload.getThreadCategory.totalPage,
                nextPage: payload.getThreadCategory.nextPage,
                currentPage: payload.getThreadCategory.currentPage,
                loading: false,
                error: "",
            };

        // case "getFollowingThread/get-succsess":
        //     return {
        //         ...state,
        //         threadList: payload.getFollowingThread.data,
        //         totalPage: payload.getFollowingThread.totalPage,
        //         nextPage: payload.getFollowingThread.nextPage,
        //         currentPage: payload.getFollowingThread.currentPage,
        //         loading: false,
        //         error: "",
        //         pagination: false,
        //     };

        case "getfollowingthread/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error.message,
            };

        default:
            return state;
    }
}

export default getThreadListReducer;
