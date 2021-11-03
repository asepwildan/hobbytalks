const initialState = {
    paginationCon: "",
};

function valueForumReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "add-pagination-forum":
            return {
                ...state,
                paginationCon: payload.valueXXX,
            };
        default:
            return state;
    }
}

export default valueForumReducer;
