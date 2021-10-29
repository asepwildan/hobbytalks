const initialState = {
    // threadDetail: {},
    name: "",
    avatar: "",
    title: "",
    content: "",
    image: "",
    category: "",
    status: "",
    likeCount: 0,
    dislikeCount: 0,
    commentCount: 0,
    date: "",
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
                category: payload.getThreadDetail.category.name,
                status: payload.getThreadDetail.status,
                likeCount: payload.getThreadDetail.likeCount,
                dislikeCount: payload.getThreadDetail.dislikeCount,
                commentCount: payload.getThreadDetail.commentCount,
                date: payload.getThreadDetail.date,
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
