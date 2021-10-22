import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = () => {
    return axios.get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me", {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
};

export const editProfile = (name, bio) => {
    return axios.put(
        "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/profile",

        {
            name: name,
            bio: bio,
        },

        {
            headers: {
                AUTHORIZATION: `Bearer ${Token}`,
            },
        }
    );
};
