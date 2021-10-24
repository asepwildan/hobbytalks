import { getProfileInfo, editProfile, commentList } from "../../services";

export const getProfileInfoAsync = () => {
    return (dispatch, getState) => {
        dispatch({ type: "getprofile/get-start" });
        getProfileInfo()
            .then((response) => {
                console.log(response.data.data, "action");
                dispatch(getProfileSuccsess(response.data.data));
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

export const editProfileAsync = (name, bio) => {
    return async (dispatch) => {
        dispatch({ type: "editProfile/start" });
        try {
            const response = await editProfile(name, bio);
            console.log(response, "dari edit profile");
            if (response.data) {
                dispatch(editProfileSuccsess());
            }
            return response;
        } catch (error) {
            console.log(error.response.data.message, "dari edit eror propil");
            dispatch(editProfileFailed(error.response.data));
            return error;
        }
    };
};

export const editProfileSuccsess = () => ({
    type: "editProfile/succsess",
});

export const editProfileFailed = (error) => ({
    type: "editProfile/failed",
    payload: { error },
});


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