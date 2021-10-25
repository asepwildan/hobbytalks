import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = () => {
    return axios.get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me", {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
};

export const commentList = (id, page, limit) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/comments/${id}?page=${page}&limit=${limit}`
    );
};
