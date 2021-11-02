const initialState = {
    threadSearch: [],
    totalPage: null,
    nextPage: null,
    currentPage: null,
    loading: false,
    error: "",
    pagination: false,
};

function getThreadSearchReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getSearch/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getSearch/get-succsess":
            return {
                ...state,
                threadSearch: payload.getSearchThread.data,
                totalPage: payload.getSearchThread.totalPage,
                nextPage: payload.getSearchThread.nextPage,
                currentPage: payload.getSearchThread.currentPage,
                loading: false,
                error: "",
                pagination: false,
            };
        case "getSearch/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getThreadSearchReducer;
