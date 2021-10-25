const initialState = {
    profileInfo: [],
    loading: false,
    error: "",
};

function getProfileReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getprofile/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getprofile/get-succsess":
            return {
                ...state,
                profileInfo: payload.getprofile,
                loading: false,
                error: "",
            };
        case "getprofile/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default getProfileReducer;
