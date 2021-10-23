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
