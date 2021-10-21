import { getProfileInfo, editProfile } from "../../services";

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

export const editProfileAsync = (name) => {
    return async (dispatch) => {
        dispatch({ type: "editProfile/start" });
        try {
            const response = await editProfile(name);
            console.log(response, "dari edit profile");
            if (response.data) {
                dispatch(editProfileSuccsess(response.data));
            }
            return response;
        } catch (error) {
            console.log(error.response.data.message, "dari edit eror propil");
            dispatch(editProfileFailed(error.response.data));
            return error;
        }
    };
};

export const editProfileSuccsess = (name) => ({
    type: "editProfile/succsess",
    payload: { name },
});

export const editProfileFailed = (error) => ({
    type: "editProfile/failed",
    payload: { error },
});
