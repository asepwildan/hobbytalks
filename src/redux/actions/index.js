import {
    getProfileInfo,
    editProfile,
    commentList,
    getThreadList,
    getThreadDetail,
} from "../../services";

export const getProfileInfoAsync = (page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getprofile/get-start" });
        getProfileInfo(page)
            .then((response) => {
                console.log(response.data.data, "action");
                dispatch(getProfileSuccsess(response.data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getProfileFailed(error));
            });
    };
};

export const getProfileSuccsess = (getprofile) => ({
    type: "getprofile/get-succsess",
    payload: {
        getprofile,
    },
});

export const getProfileFailed = (error) => ({
    type: "getprofile/get-failed",
    payload: {
        error,
    },
});

//Action-Comment
export const getCommentAsync = (id, page, limit) => {
    return (dispatch, getState) => {
        dispatch({ type: "getcomment/get-start" });
        commentList(id, page, limit)
            .then((response) => {
                console.log(response.data, "action comment");
                dispatch(getCommentSucces(response.data));
            })
            .catch((error) => {
                console.log(error, "error comment");
                dispatch(getCommentFailed(error));
            });
    };
};

export const getCommentSucces = (getComment) => ({
    type: "getcomment/get-succsess",
    payload: {
        getComment,
    },
});

export const getCommentFailed = (error) => ({
    type: "getcomment/get-failed",
    payload: {
        error,
    },
});

export const getThreadListAsync = (shorting, page) => {
    return (dispatch, getState) => {
        dispatch({ type: "getthread/get-start" });
        getThreadList(shorting, page)
            .then((response) => {
                console.log(response.data, "action threadList");
                dispatch(getThreadListSucces(response.data));
            })
            .catch((error) => {
                console.log(error, "error thread");
                dispatch(getThreadListFailed(error));
            });
    };
};

export const getThreadListSucces = (getThreadList) => ({
    type: "getthread/get-succsess",
    payload: {
        getThreadList,
    },
});

export const getThreadListFailed = (error) => ({
    type: "getthread/get-failed",
    payload: {
        error,
    },
});

export const getThreadDetailAsync = (idThread) => {
    return (dispatch, getState) => {
        dispatch({ type: "getThreadDetail/get-start" });
        getThreadDetail(idThread)
            .then((response) => {
                console.log(response.data.data, "action get thread Detail");
                dispatch(getThreadDetailSuccess(response.data.data));
            })
            .catch((error) => {
                console.log(error, "error get thread detail");
                dispatch(getThreadDetailFailed(error));
            });
    };
};

export const getThreadDetailSuccess = (getThreadDetail) => ({
    type: "getThreadDetail/get-succsess",
    payload: {
        getThreadDetail,
    },
});

export const getThreadDetailFailed = (error) => ({
    type: "getThreadDetail/get-failed",
    payload: {
        error,
    },
});

export const addIndexThread = (indexThread) => ({
    type: "add-index-thread",
    payload: { indexThread },
});
