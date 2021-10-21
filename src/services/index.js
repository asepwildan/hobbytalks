import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = () => {
    return axios.get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me", {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
};

export const editProfile = (ujang) => {
    return axios.put(
        "https://hobbytalk-be-glints.herokuapp.com/api/v1/users/edit/profile",
        {
            name: ujang,
        },
        {
            headers: {
                AUTHORIZATION: `Bearer ${Token}`,
            },
        }
    );
};

console.log(Token, "dari service");
