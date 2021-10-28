const initialState = {
    // threadDetail: {},
    name: "",
    avatar: "",
    title: "",
    content: "",
    image: "",
    loading: false,
    error: "",
};

function getThreadDetailReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "getThreadDetail/get-start":
            return {
                ...state,
                loading: true,
            };
        case "getThreadDetail/get-succsess":
            return {
                ...state,
                name: payload.getThreadDetail.userId.name,
                avatar: payload.getThreadDetail.userId.avatar,
                title: payload.getThreadDetail.title,
                content: payload.getThreadDetail.content,
                image: payload.getThreadDetail.image,
                loading: false,
                error: "",
            };
        case "getThreadDetail/get-failed":
            return {
                ...state,
                loading: false,
                error: payload.error,
            };

        default:
            return state;
    }
}

export default getThreadDetailReducer;
