import axios from "axios";
let Token = localStorage.getItem("tokenLogin");

export const getProfileInfo = (page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/users/profile/me?page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${Token}`,
            },
        }
    );
};

//--------Service-Comment-------//
export const commentList = (id, page, limit) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/comments/${id}?page=${page}&limit=${limit}`
    );
};

//-----Service-get Thread List -------//
export const getThreadList = (shorting, page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/${shorting}?page=${page}`
    );
};
//--------Service-get Thread-------//
export const getThreadDetail = (idThread) => {
    return axios.get(`https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/get/${idThread}`);
};

//-----Service-get User------//
export const getUser = (id, page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1//users/user/${id}?page=${page}`
    );
};

//--- Service-get-categoryList------//
export const getThreadCategory = (category, page) => {
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/threadscategory/${category}?page=${page}`
    );
};

export const getSearchThread = (searchValue) => {
    console.log(searchValue, "service search value");
    return axios.get(
        `https://hobbytalk-be-glints.herokuapp.com/api/v1/threads/search/${searchValue}`
    );
};
