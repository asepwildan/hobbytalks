const initialState = {
    profileData: {},
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
                profileData: payload.getprofile,
                profileInfo: payload.getprofile.data,
                threadListProfile: payload.getprofile.data.threads,
                loading: false,
                error: "",
                bio: payload.getprofile.data.bio,
                banner: payload.getprofile.data.banner,
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
