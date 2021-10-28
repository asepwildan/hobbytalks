const initialState = {
    profileInfo: {},
    threadListProfile: [],
    loading: false,
    error: "",
    bio: "",
    banner: "",
    bahaya: "nande",
    indexThreadUser: null,
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
                threadListProfile: payload.getprofile.threads,
                loading: false,
                error: "",
                bio: payload.getprofile.bio,
                banner: payload.getprofile.banner,
            };
        case "getprofile/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        case "add-index-thread":
            return Object.assign({}, state, {
                indexThreadUser: payload.indexThread,
            });

        default:
            return state;
    }
}

export default getProfileReducer;
