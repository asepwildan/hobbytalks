const initialState = {
   threadList: [],
   totalPage: null,
   nextPage: null,
   currentPage: null,
   loading: false,
   error: ""
   
};

function getThreadListReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case  "getthread/get-start":
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
        default:
            return state;
    }
}

export default getThreadListReducer;
