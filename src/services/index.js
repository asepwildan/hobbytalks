import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = () => {
    return axios.get("https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me", {
        headers: {
            Authorization: `Bearer ${Token}`,
        },
    });
};

//--------Service-Comment-------//
export const commentList = (id, page, limit) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/comments/${id}?page=${page}&limit=${limit}`
    );
};
//--------Service-get Thread-------//
export const getThreadDetail = (idThread) => {
    return axios.get(`https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/get/${idThread}`);
};
